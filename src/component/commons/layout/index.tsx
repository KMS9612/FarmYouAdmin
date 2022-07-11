import styled from "@emotion/styled";
import { useRouter } from "next/router";
import HeaderLayout from "./header/header.container";

const Body = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const HIDDEN_LANDING = ["/"];
export default function LayOut(props: any) {
  const router = useRouter();
  const isHidden = HIDDEN_LANDING.includes(router.asPath);
  return (
    <Wrapper>
      {!isHidden && <HeaderLayout />}
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
