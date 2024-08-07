import { useEffect, useMemo, useState, useRef } from 'react';
import Loading from '@/components/Loading/Loading.tsx';
import Settings from '@/pages/Settings/Settings.tsx';
import { usePixelawProvider } from '@/providers/PixelawProvider.tsx';
import { useViewStateStore, useSyncedViewStateStore } from '@/stores/ViewStateStore.ts';
import { useDojoInteractHandler } from '@/hooks/useDojoInteractHandler.ts';
import { useSettingsStore } from '@/stores/SettingsStore.ts';
import Governance from '@/pages/Governance.js';
import NewProposal from '@/pages/NewProposal.js';
import ProposalDetails from '@/pages/ProposalDetails.js';
import { RiArrowGoBackFill } from 'react-icons/ri';
import NewProposalPopupForMain from '@/components/NewProposalPopupForMain/NewProposalPopupForMain.tsx';
import { FaArrowDown, FaFilter } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import ProposalListForMain from './components/NewProposalPopupForMain/ProposalListForMain';
import styles from './App.module.css';
import FilterMenu from './components/FilterMenu/FilterMenu';
import SimpleColorPicker from '@/components/ColorPicker/SimpleColorPicker.tsx';
import MenuBar from '@/components/MenuBar/MenuBar.tsx';
import { GAME_ID, sounds } from '@/global/constants.ts';
import useBoard from '@/hooks/useBoard.ts';
import { useSound } from 'use-sound';
import { useDojoPixelStore } from '@/stores/DojoPixelStore.ts';
import Viewport from '@/webtools/components/Viewport/ViewPort.tsx';
import { useSimpleTileStore } from '@/webtools/hooks/SimpleTileStore.ts';
import { useUpdateService } from '@/webtools/hooks/UpdateService.ts';
import { type Bounds, type Coordinate, toString } from '@/webtools/types.ts';
import { type BoardBounds, createBoardBounds, isCoordinateInBounds } from '@/webtools/utils.ts';

function App() {
    //<editor-fold desc="State">

    //</editor-fold>

    //<editor-fold desc="Hooks">
    const settings = useSettingsStore();

    const updateService = useUpdateService(settings.config?.serverUrl);
    const pixelStore = useDojoPixelStore(settings.config?.toriiUrl);
    const tileStore = useSimpleTileStore(`${settings.config?.serverUrl}/tiles`);
    const { clientState, error, gameData } = usePixelawProvider();
    const {
        color,
        setColor,
        center,
        setCenter,
        zoom,
        setZoom,
        setHoveredCell,
        setClickedCell,
        setSelectedApp, // added
    } = useViewStateStore();
    const [play] = useSound(sounds.placeColor);

    // FIXME: should be in the ViewStateStore??
    const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
    const [isProposalListVisible, setIsProposalListVisible] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Closed'>('All');
    const filterRef = useRef<HTMLDivElement>(null);
    const [endDate, setEndDate] = useState(new Date());

    useDojoInteractHandler(pixelStore, gameData!);
    useSyncedViewStateStore();
    //</editor-fold>

    // get end date (FIXME: It's not smooth...)
    useEffect(() => {
        if (gameData?.setup?.contractComponents?.Game?.values?.end) {
            const gameEntries = gameData.setup.contractComponents.Game.values.end.entries();
            const firstGame = gameEntries.next().value;

            if (firstGame) {
                const endTimestamp = firstGame[1];
                setEndDate(new Date(Number(endTimestamp) * 1000));
            }
        }
    }, [gameData]);

    //<editor-fold desc="Handlers">
    useEffect(() => {
        if (!updateService.tileChanged) return;
        console.log('updateService.tileChanged', updateService.tileChanged);
        tileStore.fetchTile(updateService.tileChanged!.tileName);
        pixelStore.refresh();
    }, [updateService.tileChanged]);

    const board = useBoard(GAME_ID);

    const newCenter: Coordinate | undefined = board.data
        ? [board.data.center.x, board.data.center.y]
        : undefined;

    const bounds: BoardBounds = createBoardBounds(
        board.data?.origin ?? { x: 0, y: 0 },
        board.data?.width ?? 0,
        board.data?.height ?? 0,
    );
    const hasBoard = !!board?.data;

    useEffect(() => {
        if (!hasBoard) return;
        const origin = board.data!.origin;
        for (let y = origin.y - 1; y <= origin.y + board.data!.height; y++) {
            for (let x = origin.x - 1; x <= origin.x + board.data!.width; x++) {
                const color =
                    x === origin.x - 1 ||
                    x === origin.x + board.data!.width ||
                    y === origin.y - 1 ||
                    y === origin.y + board.data!.height
                        ? '0x000000FF'
                        : '0xFFFFFFFF';

                pixelStore.setPixel(toString([x, y]), {
                    action: '0',
                    color,
                    owner: '',
                    text: '',
                    timestamp: Date.now() / 1_000,
                    x,
                    y,
                });
            }
        }
    }, [hasBoard]);
    function onWorldviewChange(newWorldview: Bounds) {
        updateService.setBounds(newWorldview);
        pixelStore.prepare(newWorldview);
        tileStore.prepare(newWorldview);
    }

    function onCellHover(coordinate: Coordinate | undefined) {
        // TODO this is where we'll do some p2p social stuff
        setHoveredCell(coordinate);
    }

    function onCellClick(coordinate: Coordinate) {
        if (board.data) {
            if (!isCoordinateInBounds(coordinate, bounds)) return;
        }
        setClickedCell(coordinate);
        play();
    }

    function onColorSelect(color: string) {
        // remove the leading #
        color = color.replace('#', '');
        setColor(color);
    }

    function toggleColorPicker() {
        setIsColorPickerVisible((prevState) => !prevState);
    }

    function toggleProposalList() {
        setIsProposalListVisible((prevState) => !prevState);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setFilterOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    //</editor-fold>

    //<editor-fold desc="Custom behavior">

    // TODO "slide up" the bottom as the zoomlevel increases
    const zoombasedAdjustment = useMemo(() => {
        // show color palette always at the bottom for now.
        return '1rem';
        // if (zoom >= 2000) {
        //     return '1rem';
        // }
        // return '-100%';
    }, [zoom]);

    //</editor-fold>

    //<editor-fold desc="Output">
    if (clientState === 'loading') {
        document.title = 'PixeLAW: Loading';
        return <Loading />;
    }

    if (clientState === 'error') {
        document.title = 'PixeLAW: Error';
        const errorMessage = `${error}`;
        return (
            <div className={styles.errorContainer}>
                <div className={styles.errorMessage}>
                    <h1 className={styles.errorTitle}>Something went wrong</h1>
                    {errorMessage !== '' && <p className={styles.errorDetail}>{errorMessage}</p>}
                    <p className={styles.errorSuggestion}>
                        Try to refresh this page. If issue still persists, alert the team at
                        Discord.
                    </p>
                </div>
            </div>
        );
    }

    document.title = 'PixeLAW: World';

    return (
        <div className='flex min-h-screen flex-col bg-bg-primary'>
            <MenuBar address={gameData?.account?.account?.address} endTime={endDate} />
            <div className={styles.main}>
                <Routes>
                    <Route path='/settings' element={<Settings />} />
                    <Route
                        path='/'
                        element={
                            <>
                                <Viewport
                                    tileset={tileStore.tileset!}
                                    pixelStore={pixelStore}
                                    zoom={zoom}
                                    setZoom={setZoom}
                                    center={newCenter ?? center}
                                    setCenter={setCenter}
                                    onWorldviewChange={onWorldviewChange}
                                    onCellClick={onCellClick}
                                    onCellHover={onCellHover}
                                />
                                <div
                                    className={styles.colorpicker}
                                    style={{
                                        bottom: zoombasedAdjustment,
                                        display: isColorPickerVisible ? 'flex' : 'none',
                                    }}
                                >
                                    <SimpleColorPicker
                                        color={color}
                                        onColorSelect={onColorSelect}
                                    />
                                    <button
                                        className={styles.closeButton}
                                        onClick={toggleColorPicker}
                                    >
                                        <RiArrowGoBackFill size={22} />
                                    </button>
                                </div>

                                <div className={styles.proposalListContainer}>
                                    <div className={`mb-4 flex items-center justify-between`}>
                                        <div className='text-xl font-bold text-white'>
                                            Proposals
                                        </div>
                                        <div className='relative ml-1 flex items-center'>
                                            {isProposalListVisible && (
                                                <button
                                                    className='rounded-md bg-gray-700 px-4 py-2 text-white'
                                                    onClick={() => setFilterOpen(!filterOpen)}
                                                >
                                                    <FaFilter />
                                                </button>
                                            )}
                                            {isProposalListVisible && filterOpen && (
                                                <div
                                                    className='absolute z-10 mt-2 w-48 rounded-md bg-gray-800 shadow-lg'
                                                    ref={filterRef}
                                                    style={{ top: '100%', right: -100 }}
                                                >
                                                    <FilterMenu
                                                        statusFilter={statusFilter}
                                                        setStatusFilter={setStatusFilter}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            className='ml-auto bg-gray-700 transition duration-300'
                                            onClick={toggleProposalList}
                                        >
                                            <FaArrowDown
                                                className={`text-white ${isProposalListVisible ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    </div>
                                    {isProposalListVisible && (
                                        <div className='mb-4'>
                                            <div className=''>
                                                <ProposalListForMain
                                                    headerHeight={64}
                                                    statusFilter={statusFilter}
                                                />
                                            </div>
                                            <div className='pt-4'>
                                                <NewProposalPopupForMain />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className={styles.buttonContainer}>
                                    <button
                                        className={styles.placePixelButton}
                                        onClick={() => {
                                            toggleColorPicker();
                                            setSelectedApp('p_war');
                                        }}
                                        style={{ display: isColorPickerVisible ? 'none' : 'flex' }}
                                    >
                                        Choose a Color
                                    </button>
                                </div>
                            </>
                        }
                    />
                    <Route path='/governance' element={<Governance />} />
                    <Route path='/new-proposal' element={<NewProposal />} />
                    <Route path='/proposal/:id' element={<ProposalDetails />} />
                </Routes>
            </div>
        </div>
    );
    //</editor-fold>
}

export default App;
