import { type DojoCall } from '@dojoengine/core';
import { useEffect } from 'react';
import { type IPixelawGameData } from '@/dojo/setupPixelaw.ts';
import { generateDojoCall } from '@/dojo/utils/call.ts';
import getParamsDef from '@/dojo/utils/paramsDef.ts';
import { coordinateToPosition, hexRGBtoNumber, toastContractError } from '@/global/utils.ts';
import { useViewStateStore } from '@/stores/ViewStateStore.ts';
import { type PixelStore } from '@/webtools/types.ts';
import { useSound } from 'use-sound';
import { sounds } from '@/global/constants';

// TODO maybe cleaner to directly use the Dojo hook here, but its not working.
// For now passing the pixelStore
export const useDojoInteractHandler = (pixelStore: PixelStore, gameData: IPixelawGameData) => {
    const { setClickedCell, clickedCell, selectedApp, color } = useViewStateStore();
    const [playError] = useSound(sounds.error, { volume: 0.5 });

    useEffect(() => {
        if (!clickedCell || !selectedApp) return;

        console.log(`Clicked cell ${clickedCell} with app: ${selectedApp}`);

        // Retrieve info of the pixel
        const pixel = pixelStore.getPixel(clickedCell);

        // If the pixel is not set, or the action is not overridden, use the default "interact"
        const action = pixel && pixel.action !== '0' ? pixel.action : 'interact';

        const contractName = `${selectedApp}_actions`;
        const position = coordinateToPosition(clickedCell);

        const params = getParamsDef(gameData.setup.manifest, contractName, action, position, false);

        if (params.length) {
            console.log(params);
            // User needs to choose parameters first
            // TODO lets first make the scenario without params work (paint)
        }

        console.log('useDojoInteractHandler');
        console.log('Params', params);
        console.log(color);

        // Generate the DojoCall
        const dojoCall: DojoCall = generateDojoCall(
            params,
            gameData.setup.manifest,
            contractName,
            action,
            coordinateToPosition(clickedCell),
            hexRGBtoNumber(color),
        );

        console.log('DojoCall', dojoCall);
        console.log(hexRGBtoNumber(color));

        // Execute the call
        gameData.dojoProvider
            .execute(gameData.account.account!, dojoCall)
            .then((res) => {
                console.log('dojocall', res);

                pixelStore.setPixelColor(clickedCell, hexRGBtoNumber(color));
                pixelStore.setCacheUpdated(Date.now());
                // Do something with the UI?
            })
            .catch((e) => {
                console.error('dojocall error', e);
                toastContractError(e);
                playError();
            });
        setClickedCell(undefined);
    }, [setClickedCell, clickedCell, color, selectedApp, pixelStore, gameData]);
};
