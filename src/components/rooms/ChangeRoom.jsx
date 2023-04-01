import styles from "./ChangeRoom.module.scss";
import classNames from "classnames";
import Modal from "../modal/Modal";
import Card from "../card/Card";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function ChangeRoom({
  open,
  handleClose,
  onSubmit,
  rooms,
  selected,
}) {
  const [selectedRoom, setSelected] = useState(selected);
  useEffect(() => {
    if (selected) {
      setSelected(selected.id);
    }
  }, [selected]);

  return (
    <Modal
      className={classNames(styles["modal-wrapper"])}
      title="CHANGE ROOM"
      buttonText="SAVE CHANGES"
      open={open}
      handleClose={handleClose}
      handleSubmit={onSubmit}
      buttonProps={"secondary"}
    >
      <Grid
        className={classNames(styles["grid-wrapper"])}
        container
        rowSpacing={2}
        justifyContent="space-between"
      >
        {rooms.map((el) => {
          return (
            <Grid item key={el.id} xs={6}>
              <Card
                iconUrl={"/images/bed.svg"}
                onClick={() => setSelected(el.id)}
                title={el.name}
                variant={selectedRoom == el.id ? "on" : "off"}
              />
            </Grid>
          );
        })}
      </Grid>
    </Modal>
  );
}
