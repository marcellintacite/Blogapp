import React from "react";
import { CardStyled } from "../styles/CardStyled";

export default function CardHorizontal({ data }) {
  return (
    <CardStyled>
      <div className="im">
        <img src={data.img} alt="post" id="img" />
      </div>
      <div className="detail">
        <h4>{data.titre ? data.titre : null}</h4>
        <span className="date">{data.date ? data.date : null}</span>
        <div className="profile">
          <img src={data.profile} alt="profile" srcset="" />
          <span>{data.auteur}</span>
        </div>
      </div>
    </CardStyled>
  );
}
