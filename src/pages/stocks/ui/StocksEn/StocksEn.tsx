import React from "react";
import { useNavigate } from "react-router-dom";

export function StocksEnPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>StocksEn page</h1>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}
