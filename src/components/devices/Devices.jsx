import styles from "./Devices.module.scss";
import { Grid, Typography } from "@mui/material";
import Card from "../../components/card/Card";
import { useState } from "react";
import Chip from "@mui/material/Chip";

export default function Devices({
  devices = [
    {
      title: "Lightbulb-Living",
      iconUrl: "/images/bulb.svg",
      variant: "ON"

    },
    {
      title: "Lightbulb-Bedroom",
      iconUrl: "/images/bulb.svg",
      variant: "OFF"
    },
    {
      title: "Eletctric Switch Living",
      iconUrl: "/images/plug.svg",
      variant: "OFF"
    },
    {
      title: "Eletctric Switch Bedroom",
      iconUrl: "/images/plug.svg",
      variant: "OFFLINE"
    },
  ],

  hasButton = true,

}) {
  const [devicesState, setDevicesState] = useState(devices);
  console.log(devicesState)

  const handleCardClick = (index) => {
    const updatedDevices = [...devicesState];
    const deviceToUpdate = updatedDevices[index];
    if (deviceToUpdate.variant !== "OFFLINE") {
      deviceToUpdate.variant = deviceToUpdate.variant === "ON" ? "OFF" : "ON";
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
                variant={card.variant}
                title={card.title}
                onClick={() => handleCardClick(index)}
              />
              {card.variant === "OFFLINE" && (
                <Chip className={styles.chip} label="!"  size="small" />
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
