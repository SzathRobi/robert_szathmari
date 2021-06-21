import Image from "next/image";
import styles from "../../styles/Works/WorkCard.module.css";

function WorkCard({
  name = "Just A Project",
  imgAlt = "project",
  categ = "Design",
}) {
  return (
    <article className={styles.work_card}>
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
    </article>
  );
}

export default WorkCard;
