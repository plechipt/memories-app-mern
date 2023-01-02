import { makeStyles, withStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
}));
