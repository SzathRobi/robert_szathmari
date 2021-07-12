import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "../../styles/Skills/Skills.module.css";

function Skills({ scrollRef }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const boxVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  if (inView) {
    controls.start("visible");
  }
  return (
    <section ref={scrollRef} className={styles.skills}>
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
          <motion.article
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            className={styles.skill_card}
          >
            <h3>Design</h3>
            <p>Figma</p>
            <p>UI/UX fundamentals</p>
          </motion.article>
          <motion.article
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            className={styles.skill_card}
          >
            <h3>Languages</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </motion.article>
          <motion.article
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            className={styles.skill_card}
          >
            <h3>Database</h3>
            <p>Mongodb fundamentals</p>
          </motion.article>
        </div>
        <div className={styles.skill_wrapper}>
          <motion.article
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            className={styles.skill_card}
          >
            <h3>Frameworks / Libraries</h3>
            <p>Bootstrap</p>
            <p>Material-UI</p>
            <p>React</p>
            <p>React Native fundamentals</p>
            <p>Next</p>
            <p>Node + Express fundamentals</p>
            <p>Some small ones</p>
          </motion.article>
          <motion.article
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            className={styles.skill_card}
          >
            <h3>Tools</h3>
            <p>Strapi</p>
            <p>Git</p>
            <p>Chrome dev tools</p>
            <p>prettier</p>
            <p>eslint</p>
          </motion.article>
        </div>
      </section>
    </section>
  );
}

export default Skills;
