import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserauthContext } from "../../context/userAuthContext";
import Chat from "./Chat";
import classes from "./dashbord.module.css";
import Sidbar from "./Sidbar";

const Dashbord = () => {
  const { user } = useContext(UserauthContext);

  return (
    <>
      {!user && <Navigate to={"/login"} />}
      {user && (
        <div className={classes.container}>
          <Sidbar />
          <Chat />
        </div>
      )}
    </>
  );
};

export default Dashbord;
