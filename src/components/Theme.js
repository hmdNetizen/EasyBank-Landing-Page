import { createMuiTheme } from "@material-ui/core/styles";

const darkBlue = "hsl(233, 26%, 24%)";
const limeGreen = "hsl(136, 65%, 51%)";
const brightCyan = "hsl(192, 70%, 51%)";
const greyishBlue = "hsl(233, 8%, 62%)";
const lightGrey = "hsl(220, 16%, 96%)";
const vLightGrey = "hsl(0, 0%, 98%)";
const white = "White: hsl(0, 0%, 100%)";

export const theme = createMuiTheme({
  palette: {
    common: {
      blue: darkBlue,
      green: limeGreen,
      cyan: brightCyan,
      gBlue: greyishBlue,
      lightGrey: lightGrey,
      lighterGrey: vLightGrey,
      white: white,
    },
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: limeGreen,
    },
    warning: {
      main: brightCyan,
    },
  },
  typography: {
    fontFamily: "Public Sans, sans-serif",

    text: {
      color: greyishBlue,
      fontSize: "1.2rem",
    },

    h1: {
      color: darkBlue,
      fontSize: "3.5rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2.5rem",
      color: darkBlue,
    },
    h4: {
      fontSize: "2rem",
      color: darkBlue,
    },
    h5: {
      color: darkBlue,
    },
    subtitle1: {
      fontSize: "1.2rem",
      color: greyishBlue,
      lineHeight: 1.5,
    },

    subtitle2: {
      fontSize: "1rem",
      color: greyishBlue,
      lineHeight: 1.5,
      textAlign: "center",
    },

    btn: {
      borderRadius: "50px",
      fontWeight: "700",
      color: "white",
      fontFamily: "public sans",
      background: `linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))`,
      textTransform: "none",
      padding: "0.65rem 3rem",

      "&:hover": {
        opacity: 0.7,
      },
    },
  },
});
