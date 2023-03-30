import styles from "./EditScene.module.scss"; import { useState } from "react";
import { TextField } from "@mui/material";
import Modal from "../modal/Modal";
import SceneComposer from "./SceneComposer";

export default function EditScene({ devices, rooms, onScene, onSubmit, open, handleClose, title,buttonText, modalProps,selected }) {

    const [name, setName] = useState("");



    const handleSubmit = () => {
        onSubmit(selected);
        handleClose();
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    console.log(selected)

    return (
        <div>
            <Modal
                open={open}
                handleClose={handleClose}
                title={title}
                buttonText={buttonText}
                handleSubmit={handleSubmit}
                {...modalProps}
            >
                <TextField className={styles.textfield} label="Name" value={name} onChange={handleNameChange} />
                <SceneComposer devices={devices} rooms={rooms} onScene={onScene} />
            </Modal>
        </div>
    );
}
