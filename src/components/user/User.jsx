import React from "react";
import { Container, Grid, Avatar, Typography } from "@mui/material";
import styles from "./User.module.scss";

export default function User({
  avatar,
  name,
  size,
  headingSize = "h1",
  hasWelcome = false,
}) {
  return (
    <div className={styles["user-container"]}>
      <Container>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          <Grid item xs={4} className={styles["grid-avatar"]}>
            <Avatar
              alt={name}
              src={avatar}
              sx={{ width: size, height: size }}
            />
          </Grid>
          <Grid item xs={8} className={styles["grid-text"]}>
            {hasWelcome && (
              <Typography className={styles.welcome}>Welcome back,</Typography>
            )}
            <Typography variant={headingSize}>{name}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
