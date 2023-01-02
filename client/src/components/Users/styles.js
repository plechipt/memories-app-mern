import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ListItemText } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 600,
    margin: "auto",
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
