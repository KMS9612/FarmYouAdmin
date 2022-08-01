/* eslint-disable @next/next/no-img-element */
import * as S from "./create.styles";
import "react-quill/dist/quill.snow.css";
import ButtonComponent from "../../../commons/buttons";
import InputComponent from "../../../commons/inputs";
import { Select } from "antd";
import UploadImage from "./UploadImage/UploadImage.container";
import ReactQuillContainer from "../../commons/quill";

export default function CreateUI(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickCreate)}>
      <S.Header>상품 등록</S.Header>
      <S.InnerWrapper>
        <S.ImageItemWrapper>
          {new Array(props.fileUrls.length + 1).fill(1).map((el, index) => (
            <UploadImage
              key={`${el}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
              fileUrls={props.fileUrls}
              DataItem={undefined}
            />
          ))}
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
              type={"text"}
              register={props.register("price")}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 총 수량</S.Label>
            <InputComponent
              placeholder={"수량을 입력해주세요"}
              type={"text"}
              register={props.register("quantity")}
            />
          </S.InputWrapper>
        </S.FormWrapper>
        <S.Label>상품설명</S.Label>
        <ReactQuillContainer
          getValues={props.getValues}
          onChangeContent={props.onChangeContents}
        />
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
