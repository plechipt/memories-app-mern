import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    marginTop: "30px",
    padding: "0.5em 2em 2em 2em",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  bottomText: {
    marginTop: "1em",
  },
  buttonsContainer: {
    marginTop: theme.spacing(3),
  },
  submitButton: {
    marginBottom: theme.spacing(2),
  },
  googleLoginButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  avatar: {
    margin: theme.spacing(1),
    background: "#1976D2",
  },
}));
