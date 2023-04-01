import { Container, Paper, Link } from "@mui/material";
import Register from "../../src/components/register/Register";
import styles from "./RegisterPage.module.scss";

export default function RegisterPage() {

    const handleSubmit = (data) => {
        console.log("Userdata:", data);

        fetch("https://project-5-api.boom.dev/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
            .then((response) => {           
                return response.json();
            })
            .then((responseData) => {
                console.log("Registration status:", responseData);
            })
            .catch((error) => {
                console.error("Error during registration:", error);
            });
    };

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} disableGutters>
                <Paper className={styles.paper}>
                    <Register onSubmit={handleSubmit} />
                </Paper>
            </Container>
            <p>
                Already registered?&nbsp;
                <Link href="/login" className="link-to">
                    Go to login.
                </Link>
            </p>
        </div>
    )
}