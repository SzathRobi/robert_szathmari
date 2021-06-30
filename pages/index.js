import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../comps/Header/Header";
import Landing from "../comps/Home/Home";
import About from "../comps/About/About";
import Works from "../comps/Works/Works";
import Skills from "../comps/Skills/Skills";
import Contact from "../comps/Contact/Contact";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Landing />
      </main>
      <About />
      <Works />
      <Skills />
      <Contact />
    </motion.div>
  );
}
