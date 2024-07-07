import React, { useState, useEffect } from 'react';
import styles from './Loading.module.css';

const Loading: React.FC = () => {
    const [loadingText, setLoadingText] = useState('Loading.');

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingText(prev => {
                if (prev === 'Loading...') {
                    return 'Loading.';
                }
                return prev + '.';
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.loadingContainer}>
            <span className={styles.loadingText}>{loadingText}</span>
        </div>
    );
};

export default Loading;
