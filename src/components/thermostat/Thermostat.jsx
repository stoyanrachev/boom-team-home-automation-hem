import styles from "./Thermostat.module.scss";
import classNames from "classnames";
import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { AddCircleOutlined, RemoveCircleOutlined } from "@mui/icons-material";
import { ComposedChart, Line } from "recharts";

export default function Thermostat({
  data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ],
}) {
  let [temp, setTemp] = useState(25);

  function incrementTemp(e) {
    if (temp < 50) {
      return setTemp((temp += 1));
    }
  }

  function decrementTemp(e) {
    if (temp > 15) {
      return setTemp((temp -= 1));
    }
  }

  return (
    <div className={classNames(styles["thermostat-container"])}>
      <div className={classNames(styles["progress-wrapper"])}>
        <div className={classNames(styles["circular-progress"])}>
          <CircularProgress
            variant="determinate"
            value={((temp - 15) * 100) / (50 - 15) / 2}
            size={435}
            className={classNames(styles.progress)}
          />
          <CircularProgress
            variant="determinate"
            value={50}
            size={435}
            className={classNames(styles.progress__filled)}
          />
        </div>
        <div className={classNames(styles["circular-controls"])}>
          <Button variant="contained" onClick={decrementTemp}>
            <RemoveCircleOutlined />
          </Button>
          <span className={classNames(styles.temp__num)}>{temp}°</span>
          <Button variant="contained" onClick={incrementTemp}>
            <AddCircleOutlined />
          </Button>
        </div>
      </div>
      <div className={classNames(styles["linear-progress"])}>
        <span>Temperature graph</span>
        <ComposedChart width={800} height={150} data={data}>
          <Line
            dot={{ stroke: "white", strokeWidth: 3, r: 7, fill: "#E150A6" }}
            type="natural"
            strokeWidth={4}
            stroke="white"
            dataKey="temperature"
          />
        </ComposedChart>
      </div>
    </div>
  );
}
