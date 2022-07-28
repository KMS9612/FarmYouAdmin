import * as S from "./order.styles";
import { IPropsOrder } from "./order.types";
import OrderListItem from "./orderListItem";

export default function AdminOrderUI(props: IPropsOrder) {
  return (
    <S.Wrapper>
      <S.Header>주문내역</S.Header>
      <S.Table>
        <S.TableName>주문 고객</S.TableName>
        <S.TableProduct>주문 상품</S.TableProduct>
        <S.TableCount>수량</S.TableCount>
        <S.TableAddress>배송지</S.TableAddress>
      </S.Table>
      {props.data?.fetchCompletedPaymentsForAdmin.map((el, index) => (
        <OrderListItem data={props.data} key={`${el}_${index}`} el={el} />
      ))}
    </S.Wrapper>
  );
}
