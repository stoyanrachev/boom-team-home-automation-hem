import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import MUICard from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from "@mui/material";


export default function Card({ iconUrl, outlined = false, onClick, title,mediaType, autoPlay, variant = "" }) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={`${styles.card} 
                         ${variant === 'ON' ? styles['card--on'] : variant === 'OFF' || variant === '' ? '' : styles['card--offline']}`} onClick={handleClick}>
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
                                ${variant === "ON"
                                        ? styles["image--on"]
                                        : variant === "OFFLINE"
                                        ? styles["image--offline"]
                                        : ""
                                    }`}
                            />
                            {title && <Typography className={styles.card_title}>{title}</Typography>}
                            {variant ? <Typography className={`${styles.text} 
                            ${variant === "ON"
                                    ? styles["image--on"]
                                    : variant === "OFFLINE"
                                    ? styles["image--offline"]
                                    : ""
                                }`}
                            >{variant}</Typography> : null}
                        </div>
                    )}
                </CardContent>
            </MUICard>
        </div>
    );
};