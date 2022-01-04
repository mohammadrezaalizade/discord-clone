import Header from "./Header";
import { HiDownload } from "react-icons/hi";
import classes from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <div className={classes.contentIntroduce}>
          <div className={classes.contentIntroduceMain}>
            <h1>Your palce to talk</h1>
            <p>
              Whether you’re part of a school club, gaming group, worldwide art
              community, or just a handful of friends that want to spend time
              together, Discord makes it easy to talk every day and hang out
              more often.
            </p>
          </div>
          <div className={classes.btnContainer}>
            <button className={classes.discordApp}>
              <HiDownload /> Download for Mac
            </button>
            <button className={classes.discordBrowser}>
              Open Discord in your browser
            </button>
          </div>
        </div>
        <img src="/asset/images/homepage2.svg" alt="homepage2" />
      </div>
    </div>
  );
};

export default HomePage;
