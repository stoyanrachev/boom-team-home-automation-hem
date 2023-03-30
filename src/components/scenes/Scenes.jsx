import styles from "./Scenes.module.scss";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card";
import { Fragment, useState } from "react";
import AddScene from "./AddScene";

export default function Scenes({
  cards = [
    {
      id: 1,
      name: "Lightbulb",
      iconUrl: "/images/plug.svg",
      roomId: 1,
      userId: 1,
    },
    {
      id: 2,
      name: "Air Conditioner",
      iconUrl: "/images/plug.svg",
      roomId: 1,
      userId: 1,
    },
    {
      id: 3,
      name: "Eletctric Switch",
      iconUrl: "/images/bulb.svg",
      roomId: 1,
      userId: 1,
    },
    {
      id: 4,
      name: "Water Heater",
      iconUrl: "/images/bulb.svg",
      roomId: 3,
      userId: 1,
    },
  ],
  selected,
  hasButton = true,
  onCardClick,
  devices,
  rooms,
  onScene
}) {
  const [selectedCard, setSelectedCard] = useState(selected);
  const [openAddScene, setOpenAddScene] = useState(false);

  const handleAddSceneClick = () => {
    setOpenAddScene(true);
  };

  const handleSubmit = (name) => {
    console.log(`Submitting scene: ${name}`);
   
  };

  return (
    <div className={styles["scenes-container"]}>
      <Grid container spacing={2}>
        {cards.map((card, key) => (
          <Fragment key={key}>
            <Grid item xs={4}>
              <Card
                id={card.id}
                iconUrl={card.iconUrl}
                variant={card.variant}
                title={card.title}
                outlined={selectedCard && selectedCard.id == card.id}
                onClick={
                  onCardClick ? onCardClick : () => setSelectedCard(card)
                }
              />
            </Grid>
          </Fragment>
        ))}
        {hasButton ? (
          <Grid item xs={4}>
            <Card iconUrl={"/images/plus.svg"} 
                  outlined={true}
                  onClick={handleAddSceneClick} />
          </Grid>
        ) : null}
      </Grid>
      <AddScene devices={devices}
                rooms={rooms}
                onScene={onScene}
                onSubmit={handleSubmit} 
                open={openAddScene}
                handleClose={() => setOpenAddScene(false)} 
                title="ADD SCENE"
                buttonText="ADD NEW SCENE"/>
    </div>
  );
}
