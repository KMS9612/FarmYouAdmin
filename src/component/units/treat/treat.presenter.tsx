/* eslint-disable @next/next/no-img-element */
import * as S from "./treat.styles";
import TreatListItem from "./treatListItem";

export default function AdminTreatUI() {
  return (
    <S.Wrapper>
      <S.Header>상품관리</S.Header>
      <S.Table>
        <S.TableCate>상품 카테고리</S.TableCate>
        <S.TableProduct>상품 명</S.TableProduct>
        <S.TablePrice>상품 가격</S.TablePrice>
        <S.TableIcons>
          <S.IconWrapper>
            <img
              style={{ width: "15px", height: "15px" }}
              src="/icons/treat/AdminEdit.png"
              alt="수정버튼"
            ></img>
            <img
              style={{ width: "15px", height: "15px" }}
              src="/icons/treat/AdminDelete.png"
              alt="삭제버튼"
            ></img>
          </S.IconWrapper>
        </S.TableIcons>
      </S.Table>
      <TreatListItem />
      <TreatListItem />
      <TreatListItem />
      <TreatListItem />
      <TreatListItem />
    </S.Wrapper>
  );
}
