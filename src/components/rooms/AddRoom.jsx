import styles from "./AddRoom.module.scss";
import Modal from "../modal/Modal";
import { InputAdornment, TextField } from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";

export default function AddRoom({ open, handleClose, onSubmit }) {
  return (
    <Modal
      className={styles["modal-wrapper"]}
      title="ADD ROOM"
      buttonText="ADD NEW ROOM"
      open={open}
      handleClose={handleClose}
      handleSubmit={onSubmit}
    >
      <div className={styles.input_wrapper}>
        <TextField
          className={styles.text_input}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BedOutlinedIcon fontSize="large" />
              </InputAdornment>
            ),
          }}
          variant="standard"
          fullWidth={true}
          placeholder="Room Name"
        />
      </div>
    </Modal>
  );
}
