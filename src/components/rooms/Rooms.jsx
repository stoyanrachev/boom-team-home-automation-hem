import styles from "./Rooms.module.scss";
import { Grid } from "@mui/material";
import Card from "../card/Card";

export default function Rooms({
  rooms = [
    {
      name: "Living Room",
      type: "living-room",
      id: 1,
      propertyId: 1,
      userId: 1,
    },
    {
      name: "Bedroom",
      type: "bedroom",
      id: 2,
      propertyId: 1,
      userId: 1,
    },
    {
      name: "Bathroom",
      type: "bathroom",
      id: 3,
      propertyId: 1,
      userId: 1,
    },
    {
      name: "Toilet",
      type: "toilet",
      id: 4,
      propertyId: 1,
      userId: 1,
    },
    {
      name: "Patio",
      type: "patio",
      id: 5,
      propertyId: 1,
      userId: 1,
    },
  ],
  onButtonClick,
  onCardClick,
}) {
  return (
    <div className={styles["rooms-wrapper"]}>
      <Grid container spacing={2}>
        {rooms.map((el, index) => {
          return (
            <Grid item key={index} xs={2}>
              <Card
                iconUrl={"/images/bed.svg"}
                title={el.name}
                onClick={onCardClick}
              />
            </Grid>
          );
        })}
        <Grid item xs={2}>
          <Card
            className={styles["rooms-add"]}
            iconUrl={"/images/outlined-plus.svg"}
            title={"add room"}
            outlined={true}
            onClick={onButtonClick}
          />
        </Grid>
      </Grid>
    </div>
  );
}
