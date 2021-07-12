import { motion, useAnimation } from "framer-motion";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import PfContext from "../../context/pfContext";
import styles from "../../styles/Works/WorkCard.module.css";
import router from "next/router";

function WorkCard({ project }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const { setActualProject } = useContext(PfContext);

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

  const goToProject = (project) => {
    setActualProject(project);
    router.push(`/works/${project.id}`);
  };

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
      className={styles.work_card}
    >
      <div className={styles.img_container}>
        <Image src={`${project.images[0]}.jpg`} layout="fill" alt={"imgAlt"} />
      </div>
      <div className={styles.card_content}>
        <h3>{project.name}</h3>
        <div className={styles.br} />
        <div className={styles.btn_container}>
          <button className={styles.btn} onClick={() => goToProject(project)}>
            DETAILS
          </button>

          <Link href={project.link}>
            <a className={`${styles.btn} ${styles.btn_visit}`} target="blank">
              VISIT
            </a>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default WorkCard;
