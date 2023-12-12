import styles from "./About.module.css";
import profilePicture from "./milu-y-yo.jpg";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2>Created by</h2>
      <span className={styles.highlightName}>Jorge Osterrielt</span>
      <div className={styles.profileImageWrapper}>
        <img
          className={styles.profileImage}
          src={profilePicture}
          alt="foto de jorge con su perro"
        />
      </div>
      <p>
        Dog Sitter and Walker. Currently Studying Web Development at{" "}
        <span className={styles.henry}>Henry</span>.
      </p>
      <h4>Buenos Aires - Argentina</h4>
    </div>
  );
};

export default About;
