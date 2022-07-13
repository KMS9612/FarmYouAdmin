import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import * as S from "../src/component/units/login/login.styles";
import { TokenState } from "../src/commons/store/index";
const LOGIN = gql`
  mutation login($email: String!, $password: String!, $userType: String!) {
    login(email: $email, password: $password, userType: $userType)
  }
`;
export default function Home() {
  const [accessToken, setAccessToken] = useRecoilState(TokenState);
  const router = useRouter();
  const [login] = useMutation(LOGIN);
  const onClickLogin = async (data) => {
    const result = await login({
      variables: {
        email: data.email,
        password: data.password,
        userType: "user",
      },
    });

    router.push(`/admin_create`);
    setAccessToken(result.data?.login);
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
            placeholder="아이디를 입력해주세요"
            {...register("email")}
          ></S.Login>
          <S.PassWord
            type="password"
            placeholder="비밀번호를 입력해주세요"
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
