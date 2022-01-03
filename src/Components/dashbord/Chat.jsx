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

const Chat = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3># ChannelName</h3>
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
      <div className={classes.chat}>Chat</div>
      <div className={classes.inputContainer}>
        <HiOutlinePaperClip className={classes.inputIcon}  />
        <div>
          <input type="text" placeholder="Type a message" />
          <HiPaperAirplane className={classes.inputSendIcon} />
        </div>
        <HiOutlineEmojiHappy className={classes.inputIcon} />
      </div>
    </div>
  );
};

export default Chat;
