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
  userDetail: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: 600,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  userProfile: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(2),
  },
  name: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(2),
  },
}));
