/* eslint-disable @next/next/no-img-element */
import * as S from "./UploadImage.styles";
import { IUploadsImageUIProps } from "./UploadImage.types";

export default function UploadsImageUI(props: IUploadsImageUIProps) {
  const imgs = props.DataItem?.fetchProductDirect.files.url;
  console.log(imgs);
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton type="button" onClick={props.onClickUpload}>
          <img src="/icons/write/defaultimg.png" alt="기본이미지" />
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
