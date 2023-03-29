import styles from "./Devices.module.scss";
import { Grid, Typography, Chip } from "@mui/material";
import Card from "../../components/card/Card";
import { useState } from "react";


export default function Devices({
  devices = [
    {
      title: "Lightbulb-Living",
      iconUrl: "/images/bulb.svg",
      variant: "on"

    },
    {
      title: "Lightbulb-Bedroom",
      iconUrl: "/images/bulb.svg",
      variant: "off"
    },
    {
      title: "Eletctric Switch Living",
      iconUrl: "/images/plug.svg",
      variant: "off"
    },
    {
      title: "Eletctric Switch Bedroom",
      iconUrl: "/images/plug.svg",
      variant: "offline"
    },
  ],

  hasButton = true,

}) {
  const [devicesState, setDevicesState] = useState(devices);


  const handleCardClick = (index) => {
    const updatedDevices = [...devicesState];
    const deviceToUpdate = updatedDevices[index];
    if (deviceToUpdate.variant !== "offline") {
      deviceToUpdate.variant = deviceToUpdate.variant === "on" ? "off" : "on";
      setDevicesState(updatedDevices);
    }
    setDevicesState(updatedDevices);

  };

  return (
    <div className={styles["devices-wrapper"]}>

      <Typography variant="h4">Devices</Typography>


      <div className={styles.cards}>
        <Grid container spacing={2} className={styles.grid}>

          {devicesState.map((card,index) => (
            <Grid item xs={4} className={styles.wrapper}>
              <Card
                iconUrl={card.iconUrl}
                variant={card.variant.toLowerCase()}
                title={card.title}
                onClick={() => handleCardClick(index)}
              />
             
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
