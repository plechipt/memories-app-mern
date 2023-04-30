import { createTheme } from "@material-ui/core";
const mainColor = "#1976D2";

export const theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
      "&:hover": {
        background: mainColor,
      },
    },
  },
});
