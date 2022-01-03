import { signInWithPopup } from "firebase/auth";
import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
    <Container>
      <Content>
        <img src="/asset/images/logo.svg" alt="" />
        <button onClick={handleLogin}>Login with google</button>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: #202225;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 5rem;
  img {
    width: 20rem;
    height: auto;
    object-fit: contain;
  }
  button {
    border: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 1.7rem;
    background-color: #295de7;
    color: #fff;
    transition: all 0.2s ease-out;
    &:hover {
      background-color: #3e69e2;
    }
  }
`;

export default Login;
