import Login from "../../src/components/login/Login";
import classNames from "classnames";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import styles from "./LoginPage.module.scss";
import Link from "../../src/components/link/Link";

export default function LoginPage() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles["container"])}>
        <Paper className={classNames(styles["paper"])}>
          <Login />
        </Paper>
      </Container>
      <p>
        Don't have account yet?
        <Link href="/register" className="link-to">
          Go to register.
        </Link>
      </p>
    </div>
  );
}
