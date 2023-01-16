import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    marginTop: "50px",
    padding: "20px",
  },
  formContainer: {
    display: "flex",
  },
  primary: {
    textAlign: "right",
  },
  input: {
    display: "flex",
    marginLeft: theme.spacing(1),
    flex: 2,
  },
  iconButton: {
    display: "flex",
    justifyContent: "right",
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
