import React from "react";
import styles from "../../styles/Header/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.nav_link} href="#">
          Home
        </a>
        <a className={styles.nav_link} href="#">
          About
        </a>
        <a className={styles.nav_link} href="#">
          Works
        </a>
        <a className={styles.nav_link} href="#">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
