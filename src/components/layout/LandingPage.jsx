import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import { makeStyles, useTheme } from "@material-ui/styles";

import phoneBackground from "../../images/bg-intro-desktop.svg";
import mobileBackground from "../../images/bg-intro-mobile.svg";
import phoneMockups from "../../images/image-mockups.png";
import online from "../../images/icon-online.svg";
import budgettingIcon from "../../images/icon-budgeting.svg";
import onboardingIcon from "../../images/icon-onboarding.svg";
import currency from "../../images/image-currency.jpg";
import restaurantImg from "../../images/image-restaurant.jpg";
import planeImg from "../../images/image-plane.jpg";
import confettiImg from "../../images/image-confetti.jpg";

const LandingPage = () => {
  const useStyles = makeStyles((theme) => ({
    sectionContainer: {
      background: theme.palette.common.lighterGrey,
      width: "100%",
      paddingBottom: "2em",
    },
    btn: {
      ...theme.typography.btn,
    },
    phoneContainer: {
      width: "100%",
      height: "45em",

      [theme.breakpoints.down("xs")]: {
        height: "40em",
      },
    },
    phoneBackground: {
      background: `url(${phoneBackground}) no-repeat`,
      width: "100%",
      height: "100%",
      backgroundSize: "100%",
      backgroundPosition: "top",
      marginTop: "-10em",
      marginLeft: "12em",

      [theme.breakpoints.down("sm")]: {
        marginLeft: "-5em",
        marginTop: "-15em",
      },

      [theme.breakpoints.down("xs")]: {
        background: `url(${mobileBackground}) no-repeat`,
        marginTop: "-10em",
        marginLeft: 0,
        backgroundSize: "cover",
      },
    },
    phone: {
      width: "40em",
      position: "absolute",
      marginLeft: "15em",
      marginTop: "-7em",

      [theme.breakpoints.down("md")]: {
        marginLeft: "12em",
        width: "35em",
      },

      [theme.breakpoints.down("sm")]: {
        marginLeft: "10em",
        marginTop: "-3em",
      },

      [theme.breakpoints.down("xs")]: {
        marginLeft: "0",
        width: "30em",
        display: "block",
        top: "2em",
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
    primaryContentContainer: {
      paddingLeft: "5em",

      [theme.breakpoints.down("md")]: {
        paddingLeft: "3em",
        paddingRight: "3em",
      },
      [theme.breakpoints.down("sm")]: {
        order: 2,
      },
    },
    primaryHeading: {
      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
    },
    secondaryHeading: {
      marginBottom: ".5em",
      marginLeft: 0,

      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
        textAlign: "center",
      },
    },
    tertiaryHeading: {
      fontSize: "1.5rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.3rem",
      },
    },
    midSectionContainer: {
      background: theme.palette.common.lightGrey,
      padding: "5em 5em 3em 5em",

      [theme.breakpoints.down("md")]: {
        padding: "5em 3em 3em 3em",
      },

      [theme.breakpoints.down("sm")]: {
        padding: "5em 3em 3em 3em",
      },
    },
    bottomSectionContainer: {
      background: theme.palette.common.lighterGrey,
      padding: "5em 5em 3em 5em",

      [theme.breakpoints.down("md")]: {
        padding: "5em 3em 3em 3em",
      },

      [theme.breakpoints.down("sm")]: {
        padding: "5em 3em 3em 3em",
      },
    },
    cardImg: {
      maxWidth: "100%",
      minHeight: "25em",
      [theme.breakpoints.down("md")]: {
        minHeight: "30em",
      },
    },
    cardHeader: {
      fontSize: "1.3rem",
      marginTop: ".5rem",

      "&:hover": {
        color: theme.palette.common.green,
      },
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
  }));

  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      {/* Top Section */}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.sectionContainer}
          justify="center"
          alignItems="center"
        >
          <Grid item md={5} className={classes.primaryContentContainer}>
            <Grid container direction="column">
              <Grid
                item
                style={{
                  textAlign: matchesMD ? "center" : "inherit",
                }}
              >
                <Typography
                  variant="h1"
                  className={classes.primaryHeading}
                  gutterBottom
                >
                  Next generation{" "}
                  <br
                    style={{
                      display: matchesSM
                        ? "none"
                        : matchesXS
                        ? "inline"
                        : "inline",
                    }}
                  />{" "}
                  digital banking
                </Typography>
                <Typography
                  varian="subtitle1"
                  gutterBottom
                  style={{ textAlign: matchesXS ? "justify" : "inherit" }}
                >
                  Take your financial life online. Your Easybank account{" "}
                  <br style={{ display: matchesMD ? "none" : "inline" }} /> will
                  be a one-stop-shop for spending, saving,
                  <br style={{ display: matchesMD ? "none" : "inline" }} />{" "}
                  budgeting, investing, and much more.
                </Typography>
              </Grid>
              <Grid
                item
                style={{ textAlign: matchesMD ? "center" : "inherit" }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/invite"
                  className={classes.btn}
                  style={{ marginTop: "2em" }}
                >
                  Request Invite
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7} className={classes.phoneContainer}>
            <img
              src={phoneMockups}
              alt="Phone display"
              className={classes.phone}
            />
            <div className={classes.phoneBackground} />
          </Grid>
        </Grid>
      </Grid>
      {/* Middle Section */}
      <Grid item>
        <Grid
          container
          direction="column"
          className={classes.midSectionContainer}
        >
          <Grid item style={{ marginBottom: "6em" }}>
            <Typography
              variant="h3"
              gutterBottom
              className={classes.secondaryHeading}
            >
              Why choose Easybank?
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ textAlign: !matchesMD ? "left" : "center" }}
            >
              We leverage Open Banking to turn your bank account into your
              financial hub.
              <br style={{ display: matchesMD ? "none" : "inline" }} /> Control
              your finances like never before.
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              spacing={10}
            >
              <Grid lg={3} md={6} item>
                <Grid container direction="column">
                  <Grid
                    item
                    style={{ textAlign: matchesSM ? "Center" : "inherit" }}
                  >
                    <img
                      src={online}
                      alt="Online Banking Icon"
                      style={{ marginBottom: "1em" }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{ textAlign: matchesSM ? "center" : "inherit" }}
                  >
                    <Typography
                      variant="h4"
                      gutterBottom
                      className={classes.tertiaryHeading}
                    >
                      Online Banking
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{
                        marginBottom: "1.5em",
                        textAlign: !matchesSM ? "left" : "center",
                      }}
                    >
                      Our modern web and mobile applications allow you to keep
                      track of your finances wherever you are in the world.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid lg={3} md={6} item>
                <Grid container direction="column">
                  <Grid
                    item
                    style={{ textAlign: matchesSM ? "center" : "inherit" }}
                  >
                    <img
                      src={budgettingIcon}
                      alt="Simple Budgetting icon"
                      style={{ marginBottom: "1em" }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{ textAlign: matchesSM ? "center" : "inherit" }}
                  >
                    <Typography
                      variant="h4"
                      gutterBottom
                      className={classes.tertiaryHeading}
                    >
                      Simple Budgetting
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{
                        marginBottom: "1.5em",
                        textAlign: !matchesSM ? "left" : "center",
                      }}
                    >
                      See exactly where your money goes each month. Receive
                      notifications when you’re close to hitting your limits.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid lg={3} md={6} item>
                <Grid container direction="column">
                  <Grid
                    item
                    style={{ textAlign: matchesSM ? "center" : "inherit" }}
                  >
                    <img
                      src={onboardingIcon}
                      alt="Onboarding Icon"
                      style={{ marginBottom: "1em" }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{ textAlign: matchesSM ? "center" : "inherit" }}
                  >
                    <Typography
                      variant="h4"
                      gutterBottom
                      className={classes.tertiaryHeading}
                    >
                      Fast Onboarding
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{
                        marginBottom: "1.5em",
                        textAlign: !matchesSM ? "left" : "center",
                      }}
                    >
                      We don’t do branches. Open your account in minutes online
                      and start taking control of your finances right away.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid lg={3} md={6} item>
                <Grid container direction="column">
                  <Grid
                    item
                    style={{ textAlign: matchesSM ? "center" : "inherit" }}
                  >
                    <img
                      src={onboardingIcon}
                      alt="Onboarding Icon"
                      style={{ marginBottom: "1em" }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{ textAlign: matchesSM ? "center" : "inherit" }}
                  >
                    <Typography
                      variant="h4"
                      gutterBottom
                      className={classes.tertiaryHeading}
                    >
                      Open API
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{
                        marginBottom: "1.5em",
                        textAlign: !matchesSM ? "left" : "center",
                      }}
                    >
                      Manage your savings, investments, pension, and much more
                      from one account. Tracking your money has never been
                      easier.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Bottom Section */}
      <Grid item>
        <Grid
          container
          direction="column"
          spacing={matchesSM ? 10 : 5}
          className={classes.bottomSectionContainer}
        >
          <Grid item>
            <Typography variant="h3">Latest Articles</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={matchesSM ? "column" : "rows"}
              spacing={3}
            >
              <Grid item lg={3} md={6}>
                <Card style={{ minHeight: "36em" }}>
                  <CardActionArea>
                    <CardMedia
                      image={currency}
                      component="img"
                      alt="Currency Display"
                      classes={{ img: classes.cardImg }}
                    />
                    <CardContent>
                      <Typography variant="caption" gutterBottom>
                        By Claire Robinson
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.cardHeader}
                        gutterBottom
                        style={{ textAlign: matchesMD ? "center" : "inherit" }}
                      >
                        Receive money in any currency with no fees
                      </Typography>{" "}
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        style={{ textAlign: !matchesMD ? "left" : "center" }}
                      >
                        The world is getting smaller and we’re becoming more
                        mobile. So why should you be forced to only receive
                        money in a single …
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item lg={3} md={6}>
                <Card style={{ minHeight: "36em" }}>
                  <CardActionArea>
                    <CardMedia
                      image={restaurantImg}
                      component="img"
                      alt="Restaurant Display"
                      classes={{ img: classes.cardImg }}
                    />
                    <CardContent>
                      <Typography variant="caption" gutterBottom>
                        By Wilson Hutton
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.cardHeader}
                        gutterBottom
                      >
                        Treat yourself without worrying about money
                      </Typography>{" "}
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        style={{ textAlign: !matchesMD ? "left" : "center" }}
                      >
                        Our simple budgeting feature allows you to separate out
                        your spending and set realistic limits each month. That
                        means you …
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item lg={3} md={6}>
                <Card style={{ minHeight: "36em" }}>
                  <CardActionArea>
                    <CardMedia
                      image={planeImg}
                      component="img"
                      alt="Airplane Display"
                      classes={{ img: classes.cardImg }}
                    />
                    <CardContent>
                      <Typography variant="caption" gutterBottom>
                        By Wilson Hutton
                      </Typography>
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.cardHeader}
                      >
                        Take your Easybank card wherever you go
                      </Typography>{" "}
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        style={{ textAlign: !matchesMD ? "left" : "center" }}
                      >
                        We want you to enjoy your travels. This is why we don’t
                        charge any fees on purchases while you’re abroad. We’ll
                        even show you …
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item lg={3} md={6}>
                <Card style={{ minHeight: "36em" }}>
                  <CardActionArea>
                    <CardMedia
                      image={confettiImg}
                      component="img"
                      alt="Confetti Display"
                      classes={{ img: classes.cardImg }}
                    />
                    <CardContent>
                      <Typography variant="caption" gutterBottom>
                        By Claire Robinson
                      </Typography>
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.cardHeader}
                      >
                        Our invite-only Beta accounts are now live!
                      </Typography>{" "}
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        style={{ textAlign: !matchesMD ? "left" : "center" }}
                      >
                        After a lot of hard work by the whole team, we’re
                        excited to launch our closed beta. It’s easy to request
                        an invite through the site ...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
