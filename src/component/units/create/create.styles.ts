import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
`;
export const Category = styled.select`
  width: 25%;
  height: 30px;
`;
export const CategorySelect = styled.option``;

export const InnerWrapper = styled.div`
  width: 80%;
  margin: 0px auto;
`;

export const PageTitle = styled.div`
  width: 100%;
  font-size: 35px;
  margin: 10px 0px;
  padding-left: 10vw;
`;

export const DevideLine = styled.div`
  width: 100%;
  border-top: 1px solid #f6651e;
  margin: 20px 0px;
`;

export const ImageItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: auto;
  white-space: nowrap;
  cursor: pointer;
`;
export const ImageItem = styled.div`
  min-width: 280px;
  width: 280px;
  height: 210px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #fff;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.div`
  width: 100%;
  font-size: 24px;
  margin: 20px 0px;
`;
export const InputWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputQuill = styled(ReactQuill)`
  width: 100%;
  height: 300px;
  margin-bottom: 60px;
`;

export const ButtonWrapper = styled.div`
  width: 30%;
  min-width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px auto;
  @media (max-width: 575px) {
    width: 50%;
  }
`;
