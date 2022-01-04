import { Link } from "react-router-dom";
import classes from "./navbarLink.module.css"

const NavbarLink = ({ title, path }) => {
  return (
    <li className={classes.navbarLink}>
      <Link to={path}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default NavbarLink;
