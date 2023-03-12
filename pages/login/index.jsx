import Login from "../../src/components/login/Login";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import styles from "./LoginPage.module.scss";
import Link from "../../src/components/link/Link";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Paper className={classNames(styles["paper"])}>
        <Container className={classNames(styles["container"])}>
          <Login />
        </Container>
      </Paper>
      <p>Don't have account yet? <Link href="/register" className="link-to">Go to register.</Link></p>
    </div>
  );
}
