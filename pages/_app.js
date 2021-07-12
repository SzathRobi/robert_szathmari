import { motion, AnimatePresence } from "framer-motion";
import Header from "../comps/Header/Header";
import ContextWrapper from "../comps/ContextWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    /*<section>
      <Header />*/
    <ContextWrapper>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ContextWrapper>
    /*  </section>*/
  );
}

export default MyApp;
