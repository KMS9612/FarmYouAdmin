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
  &:hover {
    background-color: #ccc;
  }
`;
const Img = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
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

export default function TreatListItem(props: any) {
  return (
    <Table>
      <TableCate>{props.el.categoryId.name}</TableCate>
      <TableProduct>{props.el.title}</TableProduct>
      <TablePrice>{props.el.price} 원</TablePrice>
      <TableIcons>
        <IconWrapper>
          <Img src="/icons/treat/AdminEdit.png" alt="수정버튼"></Img>
          <Img src="/icons/treat/AdminDelete.png" alt="삭제버튼"></Img>
        </IconWrapper>
      </TableIcons>
    </Table>
  );
}
