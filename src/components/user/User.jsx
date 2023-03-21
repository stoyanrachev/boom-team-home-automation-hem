import React from 'react';
import { Container, Grid, Avatar, Typography } from '@mui/material';
import styles from "./User.module.scss";


export default function User({avatar, name, size }) {
    return (
        <div className={styles['user-container']}>
            <Container >
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                    <Grid item xs={1} className={styles['grid-avatar']}>
                        <Avatar alt={name} src={avatar} sx={{ width: size, height: size }} />
                    </Grid>
                    <Grid item xs={11} className={styles['grid-text']}>
                        <Typography variant="h1">
                            {name}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}





