import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import * as S from "../src/component/units/login/login.styles";
import { TokenState } from "../src/commons/store/index";
import { Modal } from "antd";
const LOGIN_ADMIN = gql`
  mutation loginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password)
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      type
    }
  }
`;
export default function Home() {
  const [accessToken, setAccessToken] = useRecoilState(TokenState);
  const router = useRouter();
  const [loginAdmin] = useMutation(LOGIN_ADMIN);
  const onClickLogin = async (data) => {
    try {
      const result = await loginAdmin({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      router.push(`/admin_orders`);
      setAccessToken(result.data?.loginAdmin);
    } catch (e) {
      Modal.error({ content: e.message });
    }
  };

  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });
  return (
    <S.Wrapper>
      <S.Text>Farm You Admin</S.Text>
      <form onSubmit={handleSubmit(onClickLogin)}>
        <S.LoginForm>
          <S.Login
            autoFocus={true}
            type="text"
            placeholder="어드민 아이디를 입력해주세요"
            {...register("email")}
          ></S.Login>
          <S.PassWord
            type="password"
            placeholder="어드민 비밀번호를 입력해주세요"
            {...register("password")}
          ></S.PassWord>
        </S.LoginForm>
        <S.BtnWrapper>
          <S.LoginBtn>Login</S.LoginBtn>
        </S.BtnWrapper>
      </form>
    </S.Wrapper>
  );
}
