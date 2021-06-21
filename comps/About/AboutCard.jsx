import React from "react";
import styles from "../../styles/About/AboutCard.module.css";

function AboutCard({ icon, text }) {
  return (
    <article className={styles.about_card}>
      {icon}
      <p className={styles.about_cardText}>{text}</p>
    </article>
  );
}

export default AboutCard;
