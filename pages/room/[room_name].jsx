import styles from "./Room.module.scss";
import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Grid, Typography } from "@mui/material";
import Navigation from "../../src/components/navigation/Navigation";
import Header from "../../src/components/header/Header";
import Cameras from "../../src/components/cameras/Cameras";
import Devices from "../../src/components/devices/Devices";
import devicesData from "../../data/devices.json";
import roomData from "../../data/rooms.json";

export default function Room() {
  const router = useRouter();
  const { room_name } = router.query;

  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setDevices(devicesData.devices);
  }, []);

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    setRooms(roomData.rooms);
  }, []);
  return (
    <Container maxWidth="false" className={styles.room_container}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Navigation rooms={rooms} />
        </Grid>
        <Grid item xs={10}>
          <div
            style={{
              marginLeft: "-50px",
              height: "224px",
              backgroundColor: "#7441f3",
            }}
          />

          <div
            style={{
              width: "100%",
              paddingLeft: "100px",
              paddingRight: "140px",
              marginTop: "-134px",
            }}
          >
            <Header
              left={
                <Typography variant="h2" className={styles.room}>
                  {room_name}
                </Typography>
              }
              right={
                <div className={styles["right_head"]}>
                  <Typography className={styles["dev_head"]}>
                    Devices
                  </Typography>
                  <Typography variant="h2" className={styles["room_count"]}>
                    {devices.filter((el) => el.title != "offline").length}
                  </Typography>
                </div>
              }
            />

            <Grid container spacing={2} style={{ marginTop: "85px" }}>
              <Grid item xs={6}>
                <Devices />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  style={{ marginTop: "10px", marginBottom: "24px" }}
                >
                  Cameras
                </Typography>
                <Cameras />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
