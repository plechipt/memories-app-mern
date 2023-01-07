import { makeStyles } from "@material-ui/core/styles";

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
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
}));
