/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./header.styles";

import "moment/locale/ko";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
export default function HeaderLayoutUI() {
  let myTimer: any;
  const [timer, setTimer] = useState(moment());
  useEffect(() => {
    myTimer = setInterval(() => {
      setTimer(moment());
    }, 30000);
    return () => {
      clearInterval(myTimer);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.Header>FarmYou Admin Console</S.Header>
        <S.Date>{timer.format("YYYY-MM-DD")}</S.Date>
        <S.Time>{timer.format("HH:mm")}</S.Time>
      </S.HeaderWrapper>
    </S.Wrapper>
  );
}
