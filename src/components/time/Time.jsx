import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import styles from './Time.module.scss';

export default function Time() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles['time-wrapper']}>
            <Typography variant="h4" className={styles.textove}> Time </Typography>
            <Typography variant="h1" >
                {time.toLocaleTimeString().slice(0, -2)}

                 {/* без секунди
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).slice(0, -2)} */}

            </Typography>
        </div>
    );
};

