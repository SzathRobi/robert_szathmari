import Image from "next/image";
import styles from "../../styles/Home/Home.module.css";

function Landing() {
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
            <button className={styles.cta}>ABOUT ME</button>
            <button className={styles.cta}>MY WORKS</button>
          </div>
        </div>
        <div className={styles.square} />
        <div className={styles.square} />
        <div className={styles.square} />
        <div className={styles.square} />
      </article>
      <Image
        width={400}
        height={400}
        src="/me.svg"
        alt="svg illustration about me thinking in programming stuff"
      />
    </section>
  );
}

export default Landing;
