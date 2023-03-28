import styles from "./Devices.module.scss";
import { Grid, Typography, Chip } from "@mui/material";
import Card from "../../components/card/Card";
import { useState } from "react";


export default function Devices({
  devices = [
    {
      // title: "Lightbulb-Living",
      // iconUrl: "/images/bulb.svg",
      // variant: "ON"
      title: "ON",
      iconUrl: "/images/bulb.svg",
    },
    {
      // title: "Lightbulb-Bedroom",
      // iconUrl: "/images/bulb.svg",
      // variant: "OFF"
      title: "OFF",
      iconUrl: "/images/bulb.svg",

    },
    {
      // title: "Eletctric Switch Living",
      // iconUrl: "/images/plug.svg",
      // variant: "OFF"
      title: "OFF",
      iconUrl: "/images/plug.svg",

    },
    {
      // title: "Eletctric Switch Bedroom",
      // iconUrl: "/images/plug.svg",
      // variant: "OFFLINE"
      title: "OFFLINE",
      iconUrl: "/images/plug.svg",

    },
  ],

  hasButton = true,

}) {
  const [devicesState, setDevicesState] = useState(devices);
  console.log(devicesState)

  const handleCardClick = (index) => {
    const updatedDevices = [...devicesState];
    const deviceToUpdate = updatedDevices[index];
    if (deviceToUpdate.title !== "OFFLINE") {
      deviceToUpdate.title = deviceToUpdate.title === "ON" ? "OFF" : "ON";
      setDevicesState(updatedDevices);
    }
    setDevicesState(updatedDevices);
    console.log(devicesState)

  };

  return (
    <div className={styles["devices-wrapper"]}>

      <Typography variant="h4">Devices</Typography>


      <div className={styles.cards}>
        <Grid container spacing={2} className={styles.grid}>
          {devicesState.map((card, index) => (


            <Grid item xs={4} className={styles.wrapper}>
              <Card
                iconUrl={card.iconUrl}
                variant={card.title}
                title={card.title}
                onClick={() => handleCardClick(index)}
              />
              {card.title === "OFFLINE" && (
                <Chip className={styles.chip} label="!" size="small" />
              )}
            </Grid>

          ))}
          {hasButton ? (
            <Grid item xs={4}>
              <Card iconUrl={"/images/plus.svg"} outlined={true} />
            </Grid>
          ) : null}
        </Grid>
      </div>
    </div>
  );
}
