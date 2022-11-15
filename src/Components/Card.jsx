import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <div className="card">
      <img src={data.img} alt="test" />
      <div className="texte">
        <h3>{data.titre}</h3>
        <p>{data.auteur}</p>
        <span>{data.date}</span>
      </div>
      <Link to={`/articles/${data.id}`} className="btn">
        Lire
      </Link>
    </div>
  );
}
