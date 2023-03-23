import React, { useState, useEffect } from "react";
import styles from "./Cameras.module.scss";
import MUICard from '@mui/material/Card';
import {Container, Grid } from "@mui/material";
import Card from "../card/Card";


export default function Cameras({
    cameras = [
        { videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"  },
        { videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
        { videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
        { videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
        { videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
        { videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
    ],
    hasButton = true
}) {


    const [selectedCard, setSelectedCard] = useState(0);

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    return (
        <div className={styles['cameras-wrapper']}>
            <Grid container spacing={1} style={{ width: '100%', height: '100%' }}>
                <Grid item xs={7} style={{ width: '100%', height: '100%' }}>
                    <Card iconUrl={cameras[selectedCard].videoUrl} mediaType='video' autoPlay={true} />
                </Grid>

                <Grid item xs={5}  >
                    <Container disableGutters style={{ width: '100%', height: '100%' }}>
                        <Grid container spacing={1}
                            className={`${styles.cards} ${hasButton ? styles.hasButton : ""}`}
                        >

                            {cameras.map((camera, index) => (

                                <Grid item key={index} xs={6} className={styles.card} onClick={() => handleCardClick(index)}>

                                    <Card iconUrl={camera.videoUrl} outlined={selectedCard === index} mediaType='video'/>

                                </Grid>

                            ))}
                        </Grid>
                        {hasButton ? (
                            <Grid container spacing={1} >
                                <Grid item xs={12} className={styles.plus} >
                                    <Card iconUrl={"/images/plus.svg"} outlined={true} />
                                </Grid>
                            </Grid>
                        ) : null}
                    </Container>
                </Grid>

            </Grid>
        </div>
    );
}