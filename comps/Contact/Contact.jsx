import styles from "../../styles/Contact/Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h1>CONTACT</h1>
      <section className={styles.contact_container}>
        <article className={styles.contact_piece}>
          <div className={styles.contact_info}>
            <div className={styles.contact_circle}></div>
            <p>szathrobi98@gmail.com</p>
          </div>
          <div className={styles.contact_info}>
            <div className={styles.contact_circle}></div>
            <p>+36305379625</p>
          </div>
          <div className={styles.contact_info}>
            <div className={styles.contact_circle}></div>
            <p>Budapest, Hungary</p>
          </div>
        </article>
        {/*<article className={styles.contact_piece}>
          <div>
            <h5>Your email:</h5>
            <input type="text" placeholder="your_email@example.com" />
          </div>
          <div>
            <h5>Your message:</h5>
            <textarea rows="5" placeholder="Your message here..."></textarea>
          </div>
        </article>*/}
      </section>
    </section>
  );
}

export default Contact;
