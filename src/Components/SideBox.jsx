import React from "react";
import { SideStyled } from "../styles/SideStyled";
import Card from "./Card";
import articles from "../data/data";

export default function SideBox() {
  return (
    <SideStyled>
      <h4>Articles récents</h4>
      {articles.map((p) => (
        <Card key={p.id} data={p} />
      ))}
    </SideStyled>
  );
}
