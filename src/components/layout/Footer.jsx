import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

import logo from "../../images/logo-footer.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import youtubeIcon from "../../images/icon-youtube.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import { Typography } from "@material-ui/core";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      background: theme.palette.common.blue,
      padding: "5em 5em 3em",
      position: "relative",
    },
    mainFooterContainer: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
    },
  }));
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid
        container
        className={classes.mainFooterContainer}
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          {/* Left side container */}
          <Grid container>
            <Grid item>
              <Grid container direction="column">
                <Grid item style={{ marginBottom: "2em" }}>
                  <img src={logo} alt="Easybank logo" />
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item>
                      <img src={facebookIcon} alt="facebook Icon" />
                    </Grid>
                    <Grid item>
                      <img src={youtubeIcon} alt="Youtube Icon" />
                    </Grid>
                    <Grid item>
                      <img src={twitterIcon} alt="Twitter Icon" />
                    </Grid>
                    <Grid item>
                      <img src={pinterestIcon} alt="Pinterest Icon" />
                    </Grid>
                    <Grid item>
                      <img src={instagramIcon} alt="Instagram Icon" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* left side second column */}
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="subtitle1">About Us</Typography>
                  <Typography variant="subtitle1">Contact</Typography>
                  <Typography variant="subtitle1">Blog</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* left hand third column */}
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="subtitle1">Career</Typography>
                  <Typography variant="subtitle1">Support</Typography>
                  <Typography variant="subtitle1">Privacy Policy</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* Right side second column */}
          <Grid container direction="column">
            <Button
              variant="contained"
              component={Link}
              to="/invite"
              className={classes.btn}
            >
              Request Invite
            </Button>
            <Typography variant="subtitle1">&copy;</Typography>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
