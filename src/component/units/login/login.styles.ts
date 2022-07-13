import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  width: 500px;
  margin-bottom: 40px;
  color: #f6651e;
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Login = styled.input`
  width: 500px;
  height: 50px;
  outline-color: #f6651e;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
`;
export const PassWord = styled.input`
  width: 500px;
  height: 50px;
  outline-color: #f6651e;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
`;
export const BtnWrapper = styled.div`
  width: 500px;
`;
export const LoginBtn = styled.button`
  width: 500px;
  height: 50px;
  margin: 50px 0px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #f6651e;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;
