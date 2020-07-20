import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

import logo from "../../images/logo.svg";

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      background: "white",
      zIndex: theme.zIndex.modal + 1,

      [theme.breakpoints.down("md")]: {
        padding: "0 1.5em 0 1.5em",
      },

      [theme.breakpoints.down("xs")]: {
        padding: "0 1em 0 .5em",
      },
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",

      [theme.breakpoints.down("md")]: {
        justifyContent: "space-between",
      },
    },
    toolbarMargin: {
      marginBottom: "4rem",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "4.5rem",
      },
    },
    logo: {
      [theme.breakpoints.down("md")]: {
        height: "2.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        height: "1.5rem",
      },
    },
    logoButton: {
      padding: 0,
      "&:hover": {
        background: "transparent",
      },
    },
    tab: {
      minWidth: 10,
      fontFamily: "public sans",
      fontSize: "1rem",
      margin: "0 2rem",
      textTransform: "none",
      color: "#000",
    },
    btn: {
      ...theme.typography.btn,
      [theme.breakpoints.down("sm")]: {
        padding: "0.85rem 2rem",
      },
    },
    iconBtn: {
      "&:hover": {
        background: "transparent",
      },
    },
    menuIcon: {
      width: "3rem",
      height: "3rem",
    },
    listItem: {
      padding: ".7rem 3rem",
      textAlign: "center",
      fontFamily: "public sans",

      "&:hover": {
        background: "transparent",
      },
    },
    listItemSelected: {
      "&.MuiListItem-button": {
        background: theme.palette.common.green,
        fontWeight: "700",
        color: "white",

        "&:hover": {
          background: theme.palette.common.green,
        },
      },
    },
  }));

  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedList, setSelectedList] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectedList = (event, id) => {
    setSelectedList(id);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  const tabs = [
    { id: 0, label: "Home", link: "/", ariaLabel: "Home Tab" },
    { id: 1, label: "About", link: "/about", ariaLabel: "About Tab" },
    { id: 2, label: "Contact", link: "/contact", ariaLabel: "Contact Tab" },
    { id: 3, label: "Blog", link: "/blog", ariaLabel: "Blog Tab" },
    { id: 4, label: "Career", link: "/career", ariaLabel: "Career Tab" },
  ];

  useEffect(() => {
    [...tabs].forEach((tab) => {
      switch (window.location.pathname) {
        case `${tab.link}`:
          if (value !== tab.id) {
            setValue(tab.id);
            setSelectedList(tab.id);
          }
          break;
        default:
          break;
      }
    });
  });

  const tab = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation Tabs"
        className={classes.tabContainer}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            disableRipple
            label={tab.label}
            component={Link}
            to={tab.link}
            className={classes.tab}
            aria-label={tab.ariaLabel}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        component={Link}
        to="/invite"
        className={classes.btn}
      >
        Request Invite
      </Button>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div className={classes.toolbarMargin} />
        <List
          component="nav"
          aria-label="main navigation menu"
          disablePadding
          classes={{ root: classes.list }}
        >
          {tabs.map((tab) => (
            <ListItem
              key={tab.id}
              button
              disableRipple
              divider
              component={Link}
              to={tab.link}
              onClick={(event) => {
                handleSelectedList(event, tab.id);
                handleClose();
              }}
              selected={selectedList === tab.id && value === tab.id}
              classes={{
                root: classes.listItem,
                selected: classes.listItemSelected,
              }}
            >
              <ListItemText>{tab.label}</ListItemText>
            </ListItem>
          ))}
          <Button
            variant="contained"
            component={Link}
            to="/invite"
            className={classes.btn}
            onClick={handleClose}
          >
            Request Invite
          </Button>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.iconBtn}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar position="fixed" classes={{ root: classes.appBar }}>
        <Toolbar classes={{ root: classes.toolbar }}>
          <Button
            disableRipple
            className={classes.logoButton}
            component={Link}
            to="/"
            onClick={() => {
              setValue(0);
              setSelectedList(0);
            }}
          >
            <img src={logo} alt="logo" className={classes.logo} />
          </Button>
          {matchesMD ? drawer : tab}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
