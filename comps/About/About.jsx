import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faHeart,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import AboutCard from "./AboutCard";
import styles from "../../styles/About/About.module.css";

function About() {
  return (
    <section>
      <section className={styles.about}>
        <h1 className={styles.about_title}>About Me</h1>
        <div className={styles.image_container}>
          <Image src="/about_me.svg" layout="fill" />
        </div>
        <section className={styles.about_cards}>
          <AboutCard
            icon={<FontAwesomeIcon className={styles.icon} icon={faIdCard} />}
            text={
              "Programming is a passion for me and because of that, I am a highly motivated, curius person in this field, who always seeking for new knowledge and challenges."
            }
          />
          <AboutCard
            icon={
              <FontAwesomeIcon
                className={`${styles.icon} ${styles.iconYellow}`}
                icon={faHeart}
              />
            }
            text={
              "Programming is a passion for me and because of that, I am a highly motivated, curius person in this field, who always seeking for new knowledge and challenges."
            }
          />
          <AboutCard
            icon={<FontAwesomeIcon className={styles.icon} icon={faBookOpen} />}
            text={
              "Every day, I learn something new, or deepen my knowledge in a subject to build more amazing websites and applications with an eye catching design."
            }
          />
          <div className={styles.square} />
          <div className={styles.square} />
          <div className={styles.square} />
          <div className={styles.square} />
          <div className={styles.square} />
        </section>
      </section>
    </section>
  );
}

export default About;
