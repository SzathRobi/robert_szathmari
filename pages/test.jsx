import { motion } from "framer-motion";
import Link from "next/link";

function test() {
  const pageStyle = {
    height: "200vh",
  };

  const linkStyle = {
    position: "absolute",
    bottom: -300,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={pageStyle}
    >
      <h1>ok</h1>
      <h1>ok</h1>
      <h1>ok</h1>
      <Link href="/" scroll={false}>
        <a style={linkStyle}>BACK TO HOME</a>
      </Link>
    </motion.div>
  );
}

export default test;
