import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import MUICard from '@mui/material/Card';
import { CardContent, CardMedia, Typography, Chip, IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert } from "@mui/icons-material";


export default function Card({ iconUrl, outlined = false, onClick, title, mediaType, autoPlay, variant, menu, onEdit,onRemove,id }) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        onEdit(id);
        handleClose();
    };

    const handleRemove= () => {
        onRemove(id);
        handleClose();
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
                            {!variant && title && <Typography className={styles.card_title}>{title}</Typography>}
                            {variant ? <Typography className={`${styles.text} 
                            ${variant === "on"
                                    ? styles["image--on"]
                                    : variant === "offline"
                                        ? styles["image--offline"]
                                        : ""
                                }`}
                            >{variant.toUpperCase()}</Typography> : null}
                            {variant === "offline" && (
                                <Chip className={styles.chip} label="!" size="small" />
                            )}

                            {outlined && menu && (
                                <IconButton className={styles.icon} onClick={handleClickMenu}>
                                    <MoreVert />
                                </IconButton>)}

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleRemove}>Remove Scene</MenuItem>
                                <MenuItem onClick={handleEdit}>Edit Scene</MenuItem>
                            </Menu>

                        </div>
                    )}

                </CardContent>
            </MUICard>
        </div>
    );
};