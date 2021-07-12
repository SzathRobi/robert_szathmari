import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PfContext from "../../context/pfContext";
import styles from "../../styles/Project/Project.module.css";

function Work() {
  const router = useRouter();
  const { actualProject } = useContext(PfContext);
  const [actualImg, setActualImg] = useState(actualProject.images[0]);
  const [imgIndex, setImgIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImg, setModalImg] = useState(actualImg);

  const updateImg = (image, index) => {
    setActualImg(image);
    setImgIndex(index);
  };

  const incrementIndex = () => {
    setImgIndex(imgIndex + 1);
    if (imgIndex >= 2) {
      setImgIndex(0);
    }
    setModalImg(actualProject.images[imgIndex]);
  };
  const decrementIndex = () => {
    setImgIndex(imgIndex - 1);
    if (imgIndex <= 0) {
      setImgIndex(2);
    }
    setModalImg(actualProject.images[imgIndex]);
    console.log("modalImg: ", modalImg);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.project}
    >
      <header>
        <Link href="/" scroll={false}>
          <a>BACK</a>
        </Link>
      </header>
      <section className={styles.container}>
        <article className={styles.container_section}>
          {/** IMAGES HERE */}
          <div className={styles.images_container}>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={actualImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalVisible(true)}
                className={styles.actual_container}
              >
                <Image src={`${actualImg}.jpg`} layout="fill" alt="valami" />
              </motion.div>
            </AnimatePresence>
            <div className={styles.img_picker}>
              {actualProject.images.map((image, index) => (
                <div
                  key={image}
                  className={styles.img}
                  onClick={() => updateImg(image, index)}
                >
                  <Image src={`${image}.jpg`} layout="fill" alt="valami" />
                </div>
              ))}
            </div>
          </div>
        </article>
        <article className={styles.container_section}>
          {/** CONTENT HERE */}
          <div className={styles.content}>
            <h1>{actualProject.name}</h1>
            <div>
              <h2>Description</h2>
              <p>{actualProject.desc}</p>
            </div>
            <div>
              <h2>Stack</h2>
              <div className={styles.stack_container}>
                {actualProject.stack.map((item) => (
                  <p key={item} className={styles.stack_text}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <Link href={`${actualProject.link}`}>
              <a className={styles.btn} target="blank">
                VISIT
              </a>
            </Link>
          </div>
        </article>

        {/**IMG SHOWCASE MODAL */}
        <AnimatePresence exitBeforeEnter>
          {modalVisible && (
            <motion.section
              key={modalVisible}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.modal}
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={modalImg}
                  className={styles.modal_img}
                >
                  <Image src={`${modalImg}.jpg`} layout="fill" />
                </motion.div>
              </AnimatePresence>
              <button
                onClick={() => setModalVisible(false)}
                className={styles.btn}
              >
                CLOSE
              </button>
              <button onClick={incrementIndex} className={styles.btn}>
                NEXT
              </button>
              <button onClick={decrementIndex} className={styles.btn}>
                PREV
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </section>
    </motion.section>
  );
}

export default Work;
