import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import logo from "../../images/logo.svg";
import { useTheme } from "@material-ui/styles";

const About = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        background: theme.palette.common.lightGrey,
      }}
    >
      <Grid item style={{ marginBottom: "5em" }}>
        <img src={logo} alt="EasyBank logo" style={{ height: "2.5rem" }} />
      </Grid>
      <Grid item>
        <Typography variant="h2">About Us</Typography>
      </Grid>
    </Grid>
  );
};

export default About;
