import classes from "./message.module.css";

const Message = ({ message }) => {
  console.log(message);
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img
          src={`${message?.user.photoURL}`}
          alt="userPhoto"
        />
      </div>
      <div className={classes.messageContainer}>
        <div className={classes.messageHeader}>
          <h3>Mohammadreza</h3>
          <p>20/10/2021</p>
        </div>
        <p className={classes.messageContent}>
          {message.message}
        </p>
      </div>
    </div>
  );
};

export default Message;
