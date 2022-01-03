import {  Link } from "react-router-dom";
import classes from "./serverIcon.module.css";


const ServerIcon = ({ img, alt, path }) => {
  
  return (
    <>
      <Link to={`${path}`}>
        <a className={classes.servername}>
          <img src={`${img}`} alt={`${alt}`} />
        </a>
      </Link>
    </>
  );
};

export default ServerIcon;
