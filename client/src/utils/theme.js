import { createTheme } from "@material-ui/core";
const mainColor = "#1462F3";

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
