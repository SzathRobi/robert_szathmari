import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "../../styles/Works/WorkCard.module.css";

function WorkCard({
  name = "Just A Project",
  imgAlt = "project",
  categ = "Design",
}) {
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
      className={styles.work_card}
    >
      <div className={styles.img_container}>
        <Image src="/something.bl" layout="fill" alt={imgAlt} />
      </div>
      <div className={styles.card_content}>
        <h3>{name}</h3>
        <h6 className={styles.categ}>{categ}</h6>
        <div className={styles.br} />
        <div className={styles.btn_container}>
          <button className={styles.btn}>DETAILS</button>
          <button className={styles.btn}>VISIT</button>
        </div>
      </div>
    </motion.article>
  );
}

export default WorkCard;
