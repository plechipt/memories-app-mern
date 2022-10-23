import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useGoogleLogin } from "@react-oauth/google";

import useStyles from "./styles";
import Icon from "./Icon";

const GoogleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const handleLogin = () => {
    setIsLoading(true);
    login();
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      setIsLoading(false);
    },
    onError: () => console.log("Login Failed. Try again later"),
  });

  return (
    <Button
      onClick={() => handleLogin()}
      className={classes.googleButton}
      color="primary"
      fullWidth
      disabled={isLoading}
      startIcon={<Icon />}
      variant="contained"
    >
      Google Sign In
    </Button>
  );
};

export default GoogleLogin;
