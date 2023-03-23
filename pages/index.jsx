import Example from "../src/components/example/Example";
import React from "react";
import { Grid, Typography } from "@mui/material";
import Navigation from "../src/components/navigation/Navigation";
import Header from "../src/components/header/Header";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Time from "../src/components/time/Time";
import Thermostat from "../src/components/thermostat/Thermostat";
import Scenes from "../src/components/scenes/Scenes";
import Cameras from "../src/components/cameras/Cameras";
import Energy from "../src/components/energy/Energy";
import Rooms from "../src/components/rooms/Rooms";
export default function Index() {
  return (

    <div style={{ backgroundColor: '#F9F9F9' }}>
      <Grid container spacing={0}>
        <Grid item xs={2} >
          <Navigation />
        </Grid>
        <Grid item xs={10} >
          <div style={{ marginLeft: '-50px', height: '224px', backgroundColor: '#7441f3' }} />

          <div style={{ width: '100%', paddingLeft: '100px', paddingRight: '140px', marginTop: '-134px' }}>
            <Header
              left={<User name="JohnDoe" avatar="/images/avatar.png" size={114} hasWelcome={true} />}
              right={<>
                <Weather degrees={14} type="cloudy" />
                <Time />
              </>} />

            <Grid container spacing={2} style={{ marginTop: '85px' }}>
              <Grid item xs={6} >
                <Typography variant="h4"> Thermostat</Typography>
                <Thermostat />
              </Grid>
              <Grid item xs={6} >
                <Typography variant="h4"> Scenes</Typography>
                <Scenes />
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ marginTop: '85px' }}>
              <Grid item xs={6} >
                <Typography variant="h4"style={{marginTop:'10px',marginBottom:'24px'}}> Cameras</Typography>
                <Cameras />
              </Grid>
              <Grid item xs={6} >
                <Energy />
              </Grid>
            </Grid>
          <Grid item xs={12} style={{ marginTop: '85px' }}>
            <Typography variant="h4" >Rooms</Typography>
              <Rooms />
          </Grid>

            <div style={{ marginTop: '85px' }}>
              <Typography variant="h4" > Rooms</Typography>
            </div>

          </div>
        </Grid>
      </Grid>
    </div>


  );
}
