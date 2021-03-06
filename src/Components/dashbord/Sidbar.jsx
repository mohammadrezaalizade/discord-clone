import { HiOutlineLogout, HiPlusSm } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import classes from "./sidbar.module.css";
import ServerIcon from "./ServerIcon";
import { ModalStatusContextDispath } from "../../context/modalContext";
import { db } from "../../firebase";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { ServerContextDispath } from "../../context/serverContext";
import Channels from "./Channels";

const Sidbar = () => {
  const dispatchModal = useContext(ModalStatusContextDispath);
  const dispathServer = useContext(ServerContextDispath);
  const params = useParams();

  const addNewChannel = () => {
    dispatchModal({
      type: "enteredData",
      modalStatus: true,
    });
  };

  useEffect(() => {
    dispathServer({
      type: "setServerId",
      serverId: params.serverId,
    });
  }, [params.serverId, dispathServer]);

  const [servers] = useCollection(query(collection(db, "servers")));

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.servers}>
          <Link to="/">
            <div className={classes.discordlogo}>
              <img src="https://rb.gy/kuaslg" alt="" />
            </div>
          </Link>
          <hr />
          <div className={classes.serversname}>
            {servers &&
              servers.docs.map((server) => (
                <ServerIcon
                  key={server.id}
                  path={server.id}
                  img={server.data().image}
                  alt={server.data().serverName}
                />
              ))}
            <div onClick={addNewChannel} className={classes.addserver}>
              <HiPlusSm className={classes.addserverIcon} />
            </div>
          </div>
        </div>
        <div className={classes.logoutBtn}>
          <HiOutlineLogout />
        </div>
      </div>
      <Channels />
    </div>
  );
};

export default Sidbar;
