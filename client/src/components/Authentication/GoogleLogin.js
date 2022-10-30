import React from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin as GoogleLoginButton } from "@react-oauth/google";

import useStyles from "./styles";
import { googleLogin } from "../../redux/actionCreators/users";

const GoogleLogin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (codeResponse) => {
    const { credential } = codeResponse;
    const decoded = jwt_decode(credential);

    const { sub, name } = decoded;

    const loginData = {
      id: sub,
      username: name,
      token: credential,
      statusCode: 200,
    };

    dispatch(googleLogin(loginData));
    navigate("/");
  };

  return (
    <div className={classes.googleLoginButton}>
      <GoogleLoginButton
        onSuccess={handleLogin}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLogin;
