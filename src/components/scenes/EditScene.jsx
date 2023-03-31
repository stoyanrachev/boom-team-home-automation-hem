import styles from "./EditScene.module.scss"; import { useState ,useEffect} from "react";
import { TextField } from "@mui/material";
import Modal from "../modal/Modal";
import SceneComposer from "./SceneComposer";

export default function EditScene({ devices, rooms, onScene, onSubmit, open, handleClose, title,buttonText, modalProps,selected }) {

    console.log(selected)
    const [name, setName] = useState(selected.name);

    useEffect(() => {
        setName(selected.name);
    }, [selected]);



    const handleSubmit = () => {
        onSubmit(selected.id);
        handleClose();
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };


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
                <TextField className={styles.textfield} label='Name' value={name} onChange={handleNameChange} />
                <SceneComposer devices={devices} rooms={rooms} onScene={onScene} selected={selected}/>
            </Modal>
        </div>
    );
}
