import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import MUICard from '@mui/material/Card';
import { CardContent } from "@mui/material";


export default function Card({ iconUrl, outlined = false, onClick }) {
    
    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };

    return (
        <div className={styles.card} onClick={handleClick}>
            <MUICard className={`${styles.content} ${outlined ? styles.outlined : ""}`}>
                <CardContent>
                    {iconUrl && <img src={iconUrl} alt="icon" />}
                </CardContent>
            </MUICard>
        </div>
    );
};