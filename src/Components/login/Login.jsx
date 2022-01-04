import { signInWithPopup } from "firebase/auth";
import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./login.module.css"
import {
  UserauthContextDispath,
} from "../../context/userAuthContext";
import { auth, provider } from "../../firebase";

const Login = () => {
  const dispatch = useContext(UserauthContextDispath);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({
          type: "login",
          user: {
            userName: res.user.displayName,
            email: res.user.email,
            uid: res.user.uid,
            photoURL: res.user.photoURL,
          },
        });
        navigate("/dashbord", {
          replace: true,
        });
      })
      .catch((message) => {
        alert(message);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src="/asset/images/logo.svg" alt="" />
        <button onClick={handleLogin}>Login with google</button>
      </div>
    </div>
  );
};

export default Login;
