import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import MUICard from '@mui/material/Card';
import { CardContent, CardMedia } from "@mui/material";


export default function Card({ iconUrl, outlined = false, onClick, mediaType,autoPlay }) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <MUICard className={`${styles.content} ${outlined ? styles.outlined : ""}`} >
                <CardContent   >
                    {mediaType === "video" ? (
                        <CardMedia
                            component='video'
                            image={iconUrl}
                            autoPlay={autoPlay}
                        />
                    ) : (
                        iconUrl && <img src={iconUrl} alt="icon" className={styles.image} />
                    )}
                </CardContent>
            </MUICard>
        </div>
    );
};