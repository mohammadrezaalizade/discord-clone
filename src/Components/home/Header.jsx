import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserauthContext } from "../../context/userAuthContext";
import NavbarLink from "./NavbarLink";
import classes from "./header.module.css"
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
    <div className={classes.container}>
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
    </div>
  );
};

export default Header;
