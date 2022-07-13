import styled from "@emotion/styled";
import { useRouter } from "next/router";
import HeaderLayout from "./header/header.container";
import SideBar from "./sidebar/sidebar.container";

const Body = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const LayOutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const DevideLine = styled.div`
  border: 1px solid #bdbdbd;
  width: 1px;
  height: 100vh;
`;
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const HIDDEN_LANDING = ["/"];
export default function LayOut(props: any) {
  const router = useRouter();
  const isHidden = HIDDEN_LANDING.includes(router.asPath);
  return (
    <Wrapper>
      {!isHidden && (
        <LayOutWrapper>
          <HeaderLayout />
        </LayOutWrapper>
      )}
      <BodyWrapper>
        {!isHidden && <SideBar />}
        <Body>{props.children}</Body>
      </BodyWrapper>
    </Wrapper>
  );
}
