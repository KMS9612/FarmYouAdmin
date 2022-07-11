import "../styles/globals.css";
import LayOut from "../src/component/commons/layout/index";
function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );
}

export default MyApp;
