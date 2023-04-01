import styles from "./Register.module.scss";
import classNames from "classnames";
import { Button, InputAdornment, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

export default function Register({onSubmit}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  const ButtonDisabled = () => {
    return password !== confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className={classNames(styles["register-form"])}>
      <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        type="email"
        variant="standard"
        placeholder="Email"
        className={classNames(styles["input-field"])}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        fullWidth
        type="password"
        variant="standard"
        placeholder="Password"
        id="pass"
        className={classNames(styles["input-field"])}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        value={password}
        onChange={handlePasswordChange}
      />
      <TextField
        fullWidth
        type="password"
        variant="standard"
        placeholder="Retype Password"
        id="pass"
        className={classNames(styles["input-field"])}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
     
      <Button
        fullWidth
        variant="contained"
        className={classNames(styles["button"])}
        disabled={ButtonDisabled()}
        type="submit"
        // onClick={handleSubmit}
      >
        {passwordsMatch ? "Register" : "Passwords do not match"}
      </Button>
      </form>
    </div>
  );
}
