import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 15%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #bdbdbd;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 90px;
  padding-top: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Admin = styled.div`
  font-weight: 500;
`;
export const LogOutBtn = styled.button`
  background-color: #fff;
  width: 115px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  &:hover {
    border: 1px solid #f6651e;
    color: #f6651e;
  }
`;
export const DevideLine = styled.div`
  border-top: 1px solid #bdbdbd;
  width: 100%;
  margin: 20px 0px;
`;

export const NavWrapper = styled.div`
  width: 100%;
  padding: 0px 15px;
`;

export const Nav = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid #f6651e;
    color: #f6651e;
  }
`;
