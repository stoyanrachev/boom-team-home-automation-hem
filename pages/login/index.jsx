import Login from "../../src/components/login/Login";
import classNames from "classnames";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import styles from "./LoginPage.module.scss";
import Link from "../../src/components/link/Link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [errors, setErrors] = useState({});

  async function onSubmit(userData) {
    const result = await fetch("https://project-5-api.boom.dev/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await result.json();
    if (result.status !== 200 && result.status !== 201) {
      setErrors(data);
    } else {
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/");
    }
  }

  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles["container"])}>
        <Paper className={classNames(styles["paper"])}>
          <Login onSubmit={onSubmit} err={errors} />
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
