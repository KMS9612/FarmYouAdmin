import "../styles/globals.css";
import LayOut from "../src/component/commons/layout/index";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "https://garbi.shop/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
