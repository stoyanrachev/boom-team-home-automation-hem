import styles from "./Scenes.module.scss";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card";
import { Fragment, useState } from "react";
import AddScene from "./AddScene";
import EditScene from "./EditScene";
import { CardTravelSharp } from "@mui/icons-material";

export default function Scenes({
  cards = [
    {
      id: 1,
      name: "Morning",
      iconUrl: "/images/morning.svg",
      roomId: 1,
      userId: 1,
    },
    {
      id: 2,
      name: "Alarm Clock",
      iconUrl: "/images/alarm-clock.svg",
      roomId: 1,
      userId: 1,
    },
    {
      id: 3,
      name: "Shower",
      iconUrl: "/images/shower.svg",
      roomId: 1,
      userId: 1,
    },
    {
      id: 4,
      name: "Tea Cup",
      iconUrl: "/images/tea-cup.svg",
      roomId: 3,
      userId: 1,
    },
    {
      id: 5,
      name: "Rock",
      iconUrl: "/images/rock.svg",
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
  const [openEditScene, setOpenEditScene] = useState(false);





  const handleAddSceneClick = () => {
    setOpenAddScene(true);
  };


  const handleEditSceneClick = (id) => {
    console.log(`Editing scene with ID : ${id}`);
    const index = cards.findIndex((card) => card.id === id);
    setEditCardNum(index);
    setOpenEditScene(true);
  };

  const handleRemoveScene = (id) => {
    console.log(`Removing scene with ID : ${id}`);
   };

  const handleSubmit = (name) => {
    console.log(`Submitting scene: ${name}`);
  };

  const handleSave = (selectedID) => {
    console.log(`Saving scene with ID: ${selectedID}`);
  };



  return (
    <div className={styles["scenes-container"]}>
      <Grid container spacing={2} >
        {cards.map((card, key) => (
          <Fragment key={key}>
            <Grid item xs={4}>
              <Card
                id={card.id}
                iconUrl={card.iconUrl}
                variant={card.variant}
                title={card.title}
                outlined={selectedCard && selectedCard.id == card.id}
                menu={true}
                onClick={
                  onCardClick ? onCardClick : () => setSelectedCard(card)
                }
                onEdit={handleEditSceneClick}
                onRemove={handleRemoveScene}
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
        buttonText="ADD NEW SCENE" />

      <EditScene
        selected={selectedCard}
        devices={devices}
        rooms={rooms}
        onScene={onScene}
        onSubmit={handleSave}
        open={openEditScene}
        handleClose={() => setOpenEditScene(false)}
        title="EDIT SCENE"
        buttonText="SAVE CHANGES" />
    </div>
  );
}
