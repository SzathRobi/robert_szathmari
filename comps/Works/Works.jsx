import Image from "next/image";
import WorkCard from "./WorkCard";
import { projects } from "../../projectsObject";
import styles from "../../styles/Works/Works.module.css";

function Works() {
  return (
    <section className={styles.works}>
      <section className={styles.works_header}>
        <h1 className={styles.section_title}>WORKS</h1>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            src="/works.svg"
            layout="fill"
            alt="Me in front of a board filled with postits about my projects."
          />
        </div>
      </section>
      <section className={styles.works_content}>
        {/*<div className={styles.filter_container}>
          <button className={styles.filter_btn}>ALL</button>
          <button className={styles.filter_btn}>DESIGN</button>
          <button className={styles.filter_btn}>DEVELOP</button>
  </div>*/}
        <section className={styles.works_container}>
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
          {/**works.map(work => <WorkCard key={work.id}/>) */}
        </section>
      </section>
    </section>
  );
}

export default Works;
