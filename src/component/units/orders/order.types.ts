export interface IPropsOrder {
  data: IDataPayment;
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
