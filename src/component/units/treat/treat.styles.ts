import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
export const Table = styled.div`
  background-color: #bdbdbd;
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
