/* eslint-disable @next/next/no-img-element */
import * as S from "./Edit.styles";
import "react-quill/dist/quill.snow.css";
import { Select } from "antd";
import UploadImage from "../UploadImage/UploadImage.container";
import InputComponent from "../../../../commons/inputs";
import ButtonComponent from "../../../../commons/buttons";
import { IProps } from "./Edit.types";
import { useEffect } from "react";

export default function EditUI(props: IProps) {
  useEffect(() => {
    props.setFileUrls(
      props.DataItem?.fetchProductDirect.files[0].url?.split(",") || []
    );
  }, []);
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickUpdate)}>
      <S.Header>상품 수정</S.Header>
      <S.InnerWrapper>
        <S.ImageItemWrapper>
          {new Array(props.fileUrls.length + 1).fill(1).map((el, index) => (
            <UploadImage
              key={`${el}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
              fileUrls={props.fileUrls}
              DataItem={props.DataItem}
            />
          ))}
        </S.ImageItemWrapper>
        <S.CategoryWrapper>
          <S.Label>카테고리</S.Label>
          <Select
            onChange={props.handleChange}
            style={{ width: "25%" }}
            defaultValue={props.DataItem?.fetchProductDirect.category.name}
          >
            {props.CategoryList.map((el: any, index: number) => (
              <Select.Option key={index} value={el.name}>
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
          defaultValue={props.DataItem?.fetchProductDirect.title}
        />
        <S.FormWrapper>
          <S.InputWrapper>
            <S.Label>상품가격</S.Label>
            <InputComponent
              placeholder={"가격을 입력해주세요"}
              type={"string"}
              register={props.register("price")}
              defaultValue={props.DataItem?.fetchProductDirect.price}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 총 수량</S.Label>
            <InputComponent
              placeholder={"100"}
              type={"string"}
              register={props.register("quantity")}
              defaultValue={props.DataItem?.fetchProductDirect.quantity}
            />
          </S.InputWrapper>
        </S.FormWrapper>
        <S.Label>상품설명</S.Label>
        <S.InputQuill
          onChange={props.onChangeContents}
          defaultValue={props.DataItem?.fetchProductDirect.content}
        />
        <S.ButtonWrapper>
          <ButtonComponent
            buttonColor="#f6651e"
            title="수정하기"
            type="submit"
          />
          <ButtonComponent
            buttonColor="#BDBDBD"
            title="이전으로"
            type="button"
            onClick={props.onClickMove(`/admin_treat`)}
          />
        </S.ButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
