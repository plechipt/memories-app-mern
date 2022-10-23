import React from "react";
import { Button } from "@material-ui/core";
import { GoogleLogin as GoogleButton } from "react-google-login";

import useStyles from "./styles";
import Icon from "./Icon";

const GoogleLogin = () => {
  const classes = useStyles();

  const googleSuccess = async (res) => {
    console.log(res);
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In failed. Try again later");
  };

  return (
    <GoogleButton
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <Button
          className={classes.googleButton}
          color="primary"
          variant="contained"
          fullWidth
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          startIcon={<Icon />}
        >
          Google Sign In
        </Button>
      )}
      buttonText="Login"
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLogin;
