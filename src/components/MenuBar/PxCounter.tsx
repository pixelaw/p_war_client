import { usePixelawProvider } from '@/providers/PixelawProvider.tsx';
import styles from '@/components/MenuBar/MenuBar.module.css';
import usePlayer from '@/hooks/usePlayer.ts';
import usePixelRecoveryRate from '@/hooks/usePixelRecoveryRate.ts';
import { useEffect, useState } from 'react';

const PxCounter = () => {
    const { gameData } = usePixelawProvider();

    const address = gameData?.account.account?.address ?? '';

    const player = usePlayer(address);
    const pixelRecoveryRate = usePixelRecoveryRate();

    const playerPx = player?.data?.current_px ?? 10; // Default to 10 if player is not loaded
    const maxPx = player?.data?.max_px ?? 10; // Default to 10 if player is not loaded
    const recoveryRate = pixelRecoveryRate?.data?.rate ?? 0;
    const playerLastDate = player?.data?.last_date ?? 0;

    const [currentPx, setCurrentPx] = useState(playerPx);
    const [lastDate, setLastDate] = useState(playerLastDate);
    const [pxChange, setPxChange] = useState(0);

    useEffect(() => {
        if (lastDate === playerLastDate) return;
        const currentSeconds = Math.floor(Date.now() / 1_000);
        const pxRecovered = Math.floor((currentSeconds - playerLastDate) / recoveryRate);
        const newPx = playerPx + pxRecovered > maxPx ? maxPx : playerPx + pxRecovered;
        setPxChange(newPx - currentPx);
        setCurrentPx(newPx);
        setLastDate(playerLastDate);
    }, [playerLastDate, playerPx, lastDate, recoveryRate, maxPx, currentPx]);

    useEffect(() => {
        if (!recoveryRate || maxPx === currentPx) return;
        const interval = setInterval(() => {
            setCurrentPx((prevCurrentPx) => {
                const newPx = prevCurrentPx === maxPx ? maxPx : prevCurrentPx + 1;
                setPxChange(1);
                return newPx;
            });
        }, recoveryRate * 1_000);

        return () => clearInterval(interval);
    }, [recoveryRate, currentPx, maxPx]);

    useEffect(() => {
        if (pxChange !== 0) {
            const timeout = setTimeout(() => setPxChange(0), 1000);
            return () => clearTimeout(timeout);
        }
    }, [pxChange]);

    return (
        <div className={`${styles.addressContainer} ${currentPx === 0 ? styles.zeroPx : ''}`}>
            {currentPx}/{maxPx} PX
            {pxChange !== 0 && (
                <div className={styles.pxChange}>{pxChange > 0 ? `+${pxChange}` : pxChange}</div>
            )}
        </div>
    );
};

export default PxCounter;
