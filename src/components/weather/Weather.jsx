import styles from "./Weather.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function Weather({ degrees, type }) {
  return (
    <div className={classNames(styles["weather-wrapper"])}>
      <div>
        <img
          src={`/images/${type}.svg`}
          alt={type}
          className={classNames(styles["image"])}
        />
      </div>
      <div>
        <Typography variant="body" className={classNames(styles["title"])}>
          Weather
        </Typography>
        <Typography variant="h3" className={classNames(styles["degrees"])}>
          {degrees}&deg;
        </Typography>
      </div>
    </div>
  );
}
