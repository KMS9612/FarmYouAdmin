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
  width: 100%;

  display: flex;
  flex-direction: row;
  background-color: #bdbdbd;
  color: #fff;
`;
export const TableName = styled.div`
  width: 10%;
  text-align: center;
  border: 1px solid #fff;
`;
export const TableProduct = styled.div`
  width: 40%;
  border: 1px solid #fff;
  text-align: center;
`;
export const TableCount = styled.div`
  width: 30%;
  border: 1px solid #fff;
  text-align: center;
`;
export const TableAddress = styled.div`
  border: 1px solid #fff;
  width: 20%;
  text-align: center;
`;
