import * as S from "./order.styles";
import OrderListItem from "./orderListItem";

export default function AdminOrderUI() {
  return (
    <S.Wrapper>
      <S.Header>주문내역</S.Header>
      <S.Table>
        <S.TableName>주문 고객</S.TableName>
        <S.TableProduct>주문 상품</S.TableProduct>
        <S.TableCount>수량</S.TableCount>
        <S.TableAddress>배송지</S.TableAddress>
      </S.Table>
      <OrderListItem />
    </S.Wrapper>
  );
}
