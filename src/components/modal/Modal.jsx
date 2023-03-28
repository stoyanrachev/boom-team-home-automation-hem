import styles from "./Modal.module.scss";
import classNames from "classnames";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function Modal({
  open,
  title,
  buttonText,
  handleSubmit,
  handleClose,
  buttonProps,
  children,
}) {
  return (
    <div className={classNames(styles.modal_wrapper)}>
      <Dialog
        className={classNames(styles.modal_dialog)}
        onClose={handleClose}
        open={open}
        BackdropProps={{ style: { backgroundColor: "#5C2FCF", opacity: 0.5 } }}
        PaperProps={{
          style: { minWidth: "525px", maxWidth: "unset", maxHeight: "100%" },
        }}
      >
        <DialogTitle className={classNames(styles.modal_title)}>
          {title}
        </DialogTitle>
        <DialogContent className={classNames(styles.modal_content)}>
          {children}
        </DialogContent>
        {buttonText && (
          <Button
            className={classNames(styles.modal_button)}
            style={
              buttonProps == "secondary" ? { backgroundColor: "#e150a6" } : null
            }
            onClick={handleSubmit}
          >
            {buttonText}
          </Button>
        )}
      </Dialog>
    </div>
  );
}
