import styled from "@emotion/styled";

export const Table = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  background-color: #fff;
  color: #000;
`;
export const TableName = styled.div`
  width: 10%;
  text-align: center;
  border: 1px solid #000;
`;
export const TableProduct = styled.div`
  width: 40%;
  border: 1px solid #000;
  text-align: center;
`;
export const TableCount = styled.div`
  width: 30%;
  border: 1px solid #000;
  text-align: center;
`;
export const TableAddress = styled.div`
  border: 1px solid #000;
  width: 20%;
  text-align: center;
`;

export default function OrderListItem() {
  return (
    <Table>
      <TableName>주문 고객</TableName>
      <TableProduct>주문 상품</TableProduct>
      <TableCount>수량</TableCount>
      <TableAddress>배송지</TableAddress>
    </Table>
  );
}
