import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Home/Home.module.css";

function Landing() {
  const transition = {
    duration: 15,
    repeat: Infinity,
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const variants = {
    box_1: {
      y: [0, -250, -250, -100, -250, -250, 0],
      rotate: [0, 0, 100, 0, 200, 0, 0],
      transition: transition,
    },
    box_2: {
      x: [0, -250, -250, -100, -100, 0, 0],
      rotate: [0, 0, -90, -90, 0, 180, 0],
      transition: transition,
    },
    box_3: {
      x: [0, 100, 100, -150, 150, 0],
      rotate: [0, 100, -100, 100, 0],
      transition: transition,
    },
    box_4: {
      y: [0, 100, 100, 30, 250, 0],
      rotate: [0, 0, 90, 0, -90, 0],
      transition: transition,
    },
  };

  return (
    <section className={styles.home}>
      <article className={styles.intro}>
        <div className={styles.intro_content}>
          <h2 className={styles.intro_subTitle}>HI! Let me introduce!</h2>
          <h1 className={styles.intro_title}>
            My name is Róbert Szathmári and I do some magical stuff like web
            design and development!
          </h1>
          <div className={styles.btn_container}>
            <a href="#about" className={styles.cta}>
              ABOUT ME
            </a>
            <a href="#works" className={styles.cta}>
              MY WORKS
            </a>
          </div>
        </div>
        <motion.div
          variants={variants}
          animate="box_1"
          className={styles.square}
        />
        <motion.div
          variants={variants}
          animate="box_2"
          className={styles.square}
        />
        <motion.div
          variants={variants}
          animate="box_3"
          className={styles.square}
        />
        <motion.div
          variants={variants}
          animate="box_4"
          className={styles.square}
        />
      </article>
      <div className={styles.img_container}>
        <Image
          layout="fill"
          src="/me.svg"
          alt="svg illustration about me thinking in programming stuff"
        />
      </div>
    </section>
  );
}

export default Landing;
