import React, { useState, useEffect } from "react";
import styles from "./Energy.module.scss";

import { Grid, MenuItem, Select, Typography } from "@mui/material";
import {
  ComposedChart,
  CartesianGrid,
  Line,
  Area,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function Energy({
  data = [
    { energy: 25, hour: 12 },
    { energy: 13, hour: 13 },
    { energy: 14, hour: 14 },
    { energy: 15, hour: 15 },
    { energy: 15, hour: 16 },
    { energy: 10, hour: 17 },
  ],

  sort = [
    {
      label: "This Week",
      value: 1,
    },
    {
      label: "This Month",
      value: 2,
    },
    {
      label: "This Year",
      value: 3,
    },
  ],
}) {
  return (
    <div className={styles["energy-wrapper"]}>
      <Grid container spacing={0} className={styles.grid}>
        <Grid item xs={2}>
          <Typography variant="h4">Energy</Typography>
        </Grid>
        <Grid item xs={4}>
          <Select
            className={styles.select}
            // value={sortMethod}
            // onChange={handleChangeSort}
          >
            {sort.map((option, key) => (
              <MenuItem key={key} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <div className={styles["energy-content"]}>
        <ResponsiveContainer widht="100%" height="100%">
          <ComposedChart width={500} height={300} data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DF54A7" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#DF54A7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Line
              dot={{ stroke: "#E150A6", strokeWidth: 3, r: 7, fill: "#FFFFFF" }}
              type="natural"
              strokeWidth={5}
              stroke="#E150A6"
              dataKey="energy"
            />
            <CartesianGrid stroke="#EEF0F5" strokeDasharray="5 5" />
            <XAxis dataKey="hour" />
            <Tooltip />
            <Area
              type="natural"
              dataKey="energy"
              stroke="#8884d8"
              fill="url(#colorUv)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
