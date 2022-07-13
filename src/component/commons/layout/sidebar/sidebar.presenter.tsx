import * as S from "./sidebar.styles";

export default function SideBarUI(props: any) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.Admin>LocalFood Admin</S.Admin>
        <S.LogOutBtn onClick={props.onClickMove(`/`)}>LogOut</S.LogOutBtn>
      </S.HeaderWrapper>
      <S.DevideLine></S.DevideLine>
      <S.NavWrapper>
        <S.Nav onClick={props.onClickMove(`/admin_users`)}>회원관리</S.Nav>
        <S.Nav onClick={props.onClickMove(`/admin_create`)}>상품등록</S.Nav>
        <S.Nav onClick={props.onClickMove(`/admin_treat`)}>상품관리</S.Nav>
        <S.Nav onClick={props.onClickMove(`/admin_orders`)}>주문내역</S.Nav>
      </S.NavWrapper>
    </S.Wrapper>
  );
}
