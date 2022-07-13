/* eslint-disable @next/next/no-img-element */
import * as S from "./create.styles";
import "react-quill/dist/quill.snow.css";
import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";

export default function CreateUI(props) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.ImageItemWrapper>
          <S.ImageItem>
            <img src="/icons/write/defaultimg.png" alt="" />
          </S.ImageItem>
        </S.ImageItemWrapper>
        <S.Label>상품명</S.Label>

        <InputComponent placeholder={props.accessToken} type={"text"} />
        <S.FormWrapper>
          <S.InputWrapper>
            <S.Label>상품가격</S.Label>
            <InputComponent
              placeholder={"가격을 입력해주세요"}
              type={"number"}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 총 수량</S.Label>
            <InputComponent placeholder={"100"} type={"number"} />
          </S.InputWrapper>
        </S.FormWrapper>
        <S.Label>생산지역</S.Label>
        <InputComponent
          placeholder={"생산 지역을 입력해주세요."}
          type={"text"}
        />
        <S.Label>상품설명</S.Label>
        <S.InputQuill />
        <S.ButtonWrapper>
          <ButtonComponent buttonColor="#f6651e" title="등록하기" />
          <ButtonComponent buttonColor="#BDBDBD" title="이전으로" />
        </S.ButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
