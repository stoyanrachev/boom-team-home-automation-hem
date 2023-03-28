import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import MUICard from '@mui/material/Card';
import { CardContent, CardMedia, Typography,Chip } from "@mui/material";


export default function Card({ iconUrl, outlined = false, onClick, title, mediaType, autoPlay, variant }) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={`${styles.card} 
         ${variant === 'on' ? styles['card--on'] : variant === 'offline' ? styles['card--offline'] : ''}`} onClick={handleClick}>

            <MUICard className={`${styles.content} ${outlined ? styles.outlined : ""}`} >
                <CardContent className={`${styles.cc} ${mediaType === "video" ? styles.ccVideo : ""}`} >
                    {mediaType === "video" ? (
                        <CardMedia className={styles.video}
                            component='video'
                            image={iconUrl}
                            autoPlay={autoPlay}
                        />
                    ) : (
                        <div className={styles.container}>
                            <img src={iconUrl} className={`${styles.image} 
                                ${variant === "on"
                                    ? styles["image--on"]
                                    : variant === "offline"
                                        ? styles["image--offline"]
                                        : ""
                                }`}
                            />
                            {title && <Typography className={styles.card_title}>{title}</Typography>}
                            {variant === "offline" && (
                                <Chip className={styles.chip} label="!" size="small" />
                            )}

                        </div>
                    )}
                </CardContent>
            </MUICard>
        </div>
    );
};