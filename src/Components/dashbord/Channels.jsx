import {
  HiHashtag,
  HiOutlineArrowSmDown,
  HiOutlineCog,
  HiOutlineMicrophone,
  HiOutlinePhone,
  HiPlus,
} from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { UserauthContext } from "../../context/userAuthContext";
import classes from "./channels.module.css";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useParams } from "react-router-dom";
const Channels = () => {
  const { user } = useContext(UserauthContext);
  const params = useParams();
  const [channelsName] = useCollection(query(collection(db, "servers")));
  const [channelName, setChannelName] = useState(null);
  console.log(params);
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "servers", "axwEuKoBuIaLWTcWWcJt", "channelName"),
          orderBy("timestamp", "asc")
        ),
        (snapshot) => setChannelName(snapshot.docs)
      ),
    [db, params?.serverId]
  );
  const addChannel = async () => {
    let channelName = prompt("Enter new channel name");
    if (channelName.trim().length >= 4) {
      await addDoc(collection(db, "servers", params.serverId, "channelName"), {
        channelName,
        timestamp: serverTimestamp(),
      });
    }
  };

  return (
    <div className={classes.channels}>
      {params.serverId ? (
        <div className={classes.channelsContainer}>
          <div className={classes.channelsContainerHeader}>
            {params.serverId &&
              channelsName &&
              channelsName.docs.map(
                (doc) =>
                  doc.data().id === params.serverId && (
                    <p>{doc.data().serverName}</p>
                  )
              )}
            <HiOutlineArrowSmDown />
          </div>
          <div className={classes.addNewChannel}>
            <h2>Add New Channel</h2>
            <HiPlus
              onClick={addChannel}
              className={classes.addNewChannelIcon}
            />
          </div>
          <div className={classes.channelsContainerContainer}>
            {channelName &&
              channelName.map((doc) => (
                <Link
                  to={`${params.serverId}/${doc.id}`}
                  key={doc.id}
                  className={classes.channelsContaineritems}
                >
                  <HiHashtag /> <p>{doc.data().channelName}</p>
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <div className={classes.serverAlert}>
          <h1>Plaese choose a server!</h1>
        </div>
      )}
      <div className={classes.userProfileContainer}>
        <div className={classes.userProfileContent}>
          <img src={user?.photoURL} alt="" />
          <div className={classes.userProfileDataUser}>
            <h5>{user?.userName.split(" ")[0]}</h5>
            <h6>#{user?.uid.substr(1, 10)}</h6>
          </div>
        </div>
        <div className={classes.userProfileControls}>
          <HiOutlineMicrophone className={classes.userProfileControlsIcon} />
          <HiOutlinePhone className={classes.userProfileControlsIcon} />
          <HiOutlineCog className={classes.userProfileControlsIcon} />
        </div>
      </div>
    </div>
  );
};

export default Channels;
