import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserauthContext } from "../../context/userAuthContext";
import NavbarLink from "./NavbarLink";

const Header = () => {
  const navigate = useNavigate();
  const ctx = useContext(UserauthContext);

  const handleLogin = () => {
    if (ctx.user) {
      return navigate("/dashbord");
    }
    return navigate("/login");
  };

  return (
    <Wapper>
      <Link to="/">
        <img src="/asset/images/logo.svg" alt="Discord logo" />
      </Link>
      <div>
        <ul>
          <NavbarLink title="Download" path="/" />
          <NavbarLink title="Why Discord?" path="/" />
          <NavbarLink title="Nitro" path="/" />
          <NavbarLink title="Safety" path="/" />
          <NavbarLink title="Support" path="/" />
        </ul>
      </div>
      <button onClick={handleLogin}>
        {ctx.user ? "Open on Browser" : "Login"}
      </button>
    </Wapper>
  );
};

const Wapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  align-self: center;
  padding: 2rem 5rem;

  img {
    height: 10rem;
    width: 10rem;
  }

  div {
    display: none;

    @media only screen and (min-width: 768px) {
      display: flex;
      ul {
        display: flex;
        gap: 1.5rem;
      }
    }
  }

  button {
    padding: 1rem 2rem;
    border: none;
    background: #fff;
    border: none;
    border-radius: 3rem;
    cursor: pointer;
    box-shadow: none;
    font-size: 1.5rem;
    font-weight: 600;
    color: #313131;
    transition: all 0.2s ease-out;
  }
  button:hover {
    -webkit-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.2);
  }
`;

export default Header;
