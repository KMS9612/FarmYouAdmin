import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  width: 500px;
  margin-bottom: 40px;
  color: #f6651e;
`;
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Login = styled.input`
  width: 500px;
  height: 50px;
  outline-color: #f6651e;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
`;
const PassWord = styled.input`
  width: 500px;
  height: 50px;
  outline-color: #f6651e;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
`;
const BtnWrapper = styled.div`
  width: 500px;
`;
const LoginBtn = styled.button`
  width: 500px;
  height: 50px;
  margin: 50px 0px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #f6651e;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;
export default function Home() {
  return (
    <Wrapper>
      <Text>Farm You Admin</Text>
      <LoginForm>
        <Login
          autoFocus={true}
          type="text"
          placeholder="아이디를 입력해주세요"
        ></Login>
        <PassWord
          type="password"
          placeholder="비밀번호를 입력해주세요"
        ></PassWord>
      </LoginForm>
      <BtnWrapper>
        <LoginBtn>Login</LoginBtn>
      </BtnWrapper>
    </Wrapper>
  );
}
