import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    position: "static",
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    align: "center",
  },
  image: {
    marginLeft: "15px",
    height: "60px",
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      justifyContent: "center",
      flexDirection: "column-reverse",
    },
  },
}));
