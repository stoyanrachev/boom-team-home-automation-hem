import styles from "./SceneComposer.module.scss";
import { Grid, Typography } from "@mui/material";
import Scenes from "./Scenes";
import { useMemo } from "react";

export default function SceneComposer({
  devices = [],
  rooms = [],
  selected,
  onScene,
}) {
  const roomWithDevices = useMemo(() => {
    let id = 1;
    const mappedRooms = rooms.map((room) => {
      const devicesArray = [];
      const devicesFilter = devices.filter(
        (device) => room.id === device.roomId
      );

      devicesFilter.map((device) => {
        devicesArray.push(
          {
            id: id++,
            iconUrl: device.iconUrl,
            title: "ON",
            variant: "on",
          },
          {
            id: id++,
            iconUrl: device.iconUrl,
            title: "OFF",
            variant: "off",
          }
        );
        console.log(devicesArray)
      });

      return {
        id: room.id,
        name: room.name,
        roomDevices: devicesArray,
      };
    });

    return mappedRooms;
  }, [devices, rooms]);


  return (
    <div className={styles["scene-composer-wrapper"]}>
      <Grid container spacing={5} direction="column">
        {roomWithDevices.map((room, index) => {
          if (room.roomDevices.length)
            return (
              <Grid item key={index}>
                <Typography variant="h4" paddingBottom={2}>
                  {room.name}
                </Typography>
                <Scenes
                  cards={room.roomDevices}
                  selected={selected}
                  onScene={(e) => onScene(e.target)}
                />
              </Grid>
            );
        })}
      </Grid>
    </div>
  );
}
