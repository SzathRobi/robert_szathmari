import Image from "next/image";
import styles from "../../styles/Skills/Skills.module.css";

function Skills() {
  return (
    <section className={styles.skills}>
      <h1>SKILLS</h1>
      <div className={styles.img_container}>
        <Image
          src="/skills.svg"
          layout="fill"
          alt="Me standing next to a whiteboard with different states of progress bars"
        />
      </div>
      <section className={styles.skill_container}>
        <div className={styles.skill_wrapper}>
          <article className={styles.skill_card}>
            <h3>Design</h3>
            <p>Figma</p>
            <p>UI/UX fundamentals</p>
          </article>
          <article className={styles.skill_card}>
            <h3>Languages</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </article>
          <article className={styles.skill_card}>
            <h3>Database</h3>
            <p>Figma</p>
            <p>Mongodb fundamentals</p>
          </article>
        </div>
        <div className={styles.skill_wrapper}>
          <article className={styles.skill_card}>
            <h3>Frameworks / Libraries</h3>
            <p>Bootstrap</p>
            <p>Material-UI</p>
            <p>React</p>
            <p>Next</p>
            <p>Node</p>
            <p>Express</p>
            <p>Some small ones</p>
          </article>
          <article className={styles.skill_card}>
            <h3>Tools</h3>
            <p>Git</p>
            <p>Chrome dev tools</p>
            <p>prettier</p>
            <p>eslint</p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Skills;
