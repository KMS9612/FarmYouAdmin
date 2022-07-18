/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div``;
export const Table = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const TableCate = styled.div`
  border: 1px solid #000;
  width: 15%;

  text-align: center;
`;
export const TableProduct = styled.div`
  border: 1px solid #000;
  text-align: center;
  width: 55%;
`;
export const TablePrice = styled.div`
  border: 1px solid #000;
  text-align: center;
  width: 20%;
`;
export const TableIcons = styled.div`
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const IconWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function TreatListItem() {
  return (
    <Table>
      <TableCate>상품 카테고리</TableCate>
      <TableProduct>상품 명</TableProduct>
      <TablePrice>상품 가격</TablePrice>
      <TableIcons>
        <IconWrapper>
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
        </IconWrapper>
      </TableIcons>
    </Table>
  );
}
