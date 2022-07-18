import "../styles/globals.css";
import LayOut from "../src/component/commons/layout/index";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apolloSetting";
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
