import { motion, AnimatePresence } from "framer-motion";
import Header from "../comps/Header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    /*<section>
      <Header />*/
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    /*  </section>*/
  );
}

export default MyApp;
