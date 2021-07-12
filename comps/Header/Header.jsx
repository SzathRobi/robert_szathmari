import React from "react";
import styles from "../../styles/Header/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a
          className={styles.nav_link}
          href="#home"
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </a>
        <a className={styles.nav_link} href="#about">
          About
        </a>
        <a className={styles.nav_link} href="#works">
          Works
        </a>
        <a className={styles.nav_link} href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
