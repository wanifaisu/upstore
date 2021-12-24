import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#163EC1",
      light: "#F0F3FD",
      dark: "#22324D",
    },
    secondary: {
      // main: "#fff",
      main: "#797D88",
      light: "#ECF3FF",
    },
    error: {
      main: "#FF0000",
    },
    success: {
      main: "#42ba96",
    },
  },
  typography: {
    h5: {
      fontSize: "30px",
      fontWeight: 500,
    },
    h6: {
      fontSize: "15px",
      fontWeight: 400,
    },
    h2: {
      fontSize: "12px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
    },
  },
});

export default theme;
