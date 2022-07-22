/* eslint-disable @next/next/no-img-element */
import * as S from "./create.styles";
import "react-quill/dist/quill.snow.css";
import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import { Select } from "antd";

export default function CreateUI(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickCreate)}>
      <S.Header>상품 {props.isEdit ? "수정" : "등록"}</S.Header>
      <S.InnerWrapper>
        <S.ImageItemWrapper>
          <S.ImageItem>
            <img src="/icons/write/defaultimg.png" alt="" />
          </S.ImageItem>
        </S.ImageItemWrapper>
        <S.CategoryWrapper>
          <S.Label>카테고리</S.Label>
          <Select
            onChange={props.handleChange}
            style={{ width: "25%" }}
            defaultValue="카테고리를 선택하세요"
          >
            {props.CategoryList.map((el: any, index: number) => (
              <Select.Option key={index} value={el.id}>
                {el.name}
              </Select.Option>
            ))}
          </Select>
        </S.CategoryWrapper>
        <S.Label>상품명</S.Label>
        <InputComponent
          placeholder={"상품명을 입력해주세요"}
          type={"text"}
          register={props.register("title")}
        />
        <S.FormWrapper>
          <S.InputWrapper>
            <S.Label>상품가격</S.Label>
            <InputComponent
              placeholder={"가격을 입력해주세요"}
              type={"number"}
              register={props.register("price")}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 총 수량</S.Label>
            <InputComponent
              placeholder={"100"}
              type={"number"}
              register={props.register("quantity")}
            />
          </S.InputWrapper>
        </S.FormWrapper>
        <S.Label>생산지역</S.Label>
        <InputComponent
          placeholder={"생산 지역을 입력해주세요."}
          type={"text"}
          register={props.register("address")}
        />
        <S.Label>상품설명</S.Label>
        <S.InputQuill onChange={props.onChangeContents} />
        <S.ButtonWrapper>
          <ButtonComponent
            buttonColor="#f6651e"
            title={(props.isEdit && "수정하기") || "등록하기"}
            type="submit"
          />
          <ButtonComponent
            buttonColor="#BDBDBD"
            title="이전으로"
            type="button"
          />
        </S.ButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
