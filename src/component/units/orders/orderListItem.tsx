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
interface IPropsOrder {
  data: IDataPayment;
  el: any;
  index: number;
}

interface IDataPayment {
  fetchCompletedPaymentsForAdmin: {
    map(arg0: (el: any, index: any) => any): import("react").ReactNode;
    id: string;
    amount: number;
    productDirect: {
      id: string;
      title: string;
      users: {
        id: string;
        name: string;
      };
    };
  };
}

export default function OrderListItem(props: IPropsOrder) {
  return (
    <Table>
      <TableName>{props.el.user.name}</TableName>
      <TableProduct>{props.el.productDirect.title}</TableProduct>
      <TableCount>{props.el.quantity}</TableCount>
      <TableAddress>
        {props.el.user.address[0]?.address +
          props.el.user.address[0]?.detailedAddress}
      </TableAddress>
    </Table>
  );
}
