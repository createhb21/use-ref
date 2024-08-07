import React from "react";
import { NavLink } from "react-router-dom";

import { PATH } from "shared/data/path";

export function StocksPage() {
  return (
    <div>
      <h1>주식 모으기 시작하고</h1>
      <h4>최대 100만원 받아요</h4>
      <NavLink to={PATH.stocksKr}>국내주식</NavLink>
      <NavLink to={PATH.stocksEn}>해외주식</NavLink>
    </div>
  );
}
