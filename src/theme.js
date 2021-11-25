import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  spacing: 12,
  palette: {
    type: "dark",
    primary: {
      main: "#7441F3",
    },
    secondary: {
      main: "#E150A6",
    },
    warning: {
      main: "#EB675C",
    },
    info: {
      main: "#21f396",
    },
    success: {
      main: "#1bde51",
    },
    error: {
      main: "#ff4b2f",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    divider: "#222237",
    text: {
      primary: "#181C24",
      secondary: "#FFFFFF",
      disabled: "#8d8da8",
      hint: "#E1E1FC",
    },
  },
  shape: {
    borderRadius: 15,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 35,
          paddingRight: 35,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: 15,
          fontSize: 14,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#F8F8F8",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 13,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          backgroundColor: "##7441F3",
        },
        outlined: {
          backgroundColor: "##7441F3",
          borderColor: "##7441F3",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',

    h1: {
      fontSize: "3.75rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 900,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.375rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.1rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 1000,
    },
    button: {
      fontWeight: 600,
      fontSize: "0.9rem",
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.7,
    },
    subtitle1: {
      lineHeight: 1.7,
    },
    subtitle2: {
      lineHeight: 1.7,
    },
  },
});

export default theme;
