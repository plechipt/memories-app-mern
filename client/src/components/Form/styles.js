import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  imageButton: {
    display: "inline-block",
    backgroundColor: "red",
    color: "white",
    padding: "12px 24px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
}));
