import Header from "../comps/Header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <section>
      <Header />
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
