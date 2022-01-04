import classes from "./chat.module.css";

import {
  HiOutlineBell,
  HiChatAlt,
  HiUser,
  HiSearch,
  HiArchive,
  HiQuestionMarkCircle,
  HiPaperAirplane,
  HiOutlineEmojiHappy,
  HiOutlinePaperClip,
} from "react-icons/hi";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useContext, useEffect, useRef, useState } from "react";
import Message from "./Message";
import { UserauthContext } from "../../context/userAuthContext";

const Chat = () => {
  const params = useParams();
  const [channelName, setChannelName] = useState(null);
  const [serverId, setServerId] = useState("");
  const [channelId, setChannelId] = useState("");
  const [inputvalue, setInputvalue] = useState("");
  const [user, setUser] = useState(null);
  const ctx = useContext(UserauthContext);
  const [messages, setMessages] = useState(null);
  const chatRef = useRef(null);
  useEffect(() => {
    setUser(ctx.user);
  }, [ctx.user]);

  useEffect(() => {
    if (serverId) {
      onSnapshot(
        query(
          collection(db, "servers", serverId, "channelName"),
          orderBy("timestamp", "asc")
        ),
        (snapshot) => setChannelName(snapshot.docs)
      );
    }
  }, [db, serverId]);

  useEffect(() => {
    setChannelId(params.channelId);
  }, [params.channelId]);

  useEffect(() => {
    setServerId(params.serverId);
  }, [params.serverId]);

  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    scrollToBottom()

    if (inputvalue.trim().length >= 1) {
      const docRef = await addDoc(
        collection(
          db,
          "servers",
          params.serverId,
          "channelName",
          params.channelId,
          "messages"
        ),
        {
          message: inputvalue,
          user: user,
          timestamp: serverTimestamp(),
        }
      );
      await updateDoc(
        doc(
          db,
          "servers",
          params.serverId,
          "channelName",
          params.channelId,
          "messages",
          docRef.id
        ),
        {
          id: docRef.id,
        }
      );
    }
    setInputvalue("");
  };

  useEffect(() => {
    if (params.serverId && params.channelId) {
      onSnapshot(
        query(
          collection(
            db,
            "servers",
            params.serverId,
            "channelName",
            params.channelId,
            "messages"
          ),
          orderBy("timestamp", "asc")
        ),
        (snapshot) => setMessages(snapshot.docs)
      );
    }
  }, [db, params.serverId, params.channelId]);

  return (
    <div className={classes.container}>
      {params.channelId ? (
        <>
          <div className={classes.header}>
            {params.channelId &&
              channelName?.map(
                (doc, index) =>
                  doc.data().id === params.channelId && (
                    <h3 key={index}>#{doc.data().channelName}</h3>
                  )
              )}

            <div className={classes.headerNavBar}>
              <HiOutlineBell className={classes.headerNavBarIcon} />
              <HiChatAlt className={classes.headerNavBarIcon} />
              <HiUser className={classes.headerNavBarIcon} />
              <div className={classes.searchInput}>
                <input type="text" placeholder="Search..." />
                <HiSearch className={classes.headerNavBarIcon} />
              </div>
              <HiArchive className={classes.headerNavBarIcon} />
              <HiQuestionMarkCircle className={classes.headerNavBarIcon} />
            </div>
          </div>
          <div className={classes.chat}>
            {messages &&
              messages.map((doc) => (
                <Message key={doc.data().id} message={doc.data()} />
              ))}
              <div ref={chatRef} className={classes.chatRef} />
          </div>
          <form onSubmit={sendMessage} className={classes.inputContainer}>
            <HiOutlinePaperClip className={classes.inputIcon} />
            <div>
              <input
                value={inputvalue}
                onChange={(e) => setInputvalue(e.target.value)}
                type="text"
                placeholder="Type a message"
              />
              <HiPaperAirplane
                onClick={sendMessage}
                className={classes.inputSendIcon}
              />
            </div>
            <HiOutlineEmojiHappy className={classes.inputIcon} />
          </form>
        </>
      ) : (
        <h1>You have to choose a channel !</h1>
      )}
    </div>
  );
};

export default Chat;
