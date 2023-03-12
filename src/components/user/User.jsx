import React from 'react';
import { Container, Grid, Avatar, Typography } from '@mui/material';
import styles from "./User.module.scss";


export default function User({avatar, name, size }) {
    return (
        <div className={styles.root}>
            <Container >
                <Grid container spacing={2}  justifyContent="center">
                    <Grid item xs={2}>
                        <Avatar alt={name} src={avatar} sx={{ width: size, height: size }} />
                    </Grid>
                    <Grid item xs={10} className={styles.grid}>
                        <Typography variant="h1">
                            {name}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}





