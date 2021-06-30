import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/About/AboutCard.module.css";

function AboutCard({ icon, text }) {
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
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
      className={styles.about_card}
    >
      {icon}
      <p className={styles.about_cardText}>{text}</p>
    </motion.article>
  );
}

export default AboutCard;
