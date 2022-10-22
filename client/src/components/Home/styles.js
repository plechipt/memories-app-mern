import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      justifyContent: "center",
      flexDirection: "column-reverse",
    },
  },
}));
