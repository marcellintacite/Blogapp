import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import logo from "./../assets/logo.png";
import SideBox from "../Components/SideBox";
import { Container } from "./../styles/Container";
import { CenterHome } from "../styles/Center";
import articles from "../data/data";
import CardHorizontal from "../Components/CardHorizontal";
import { FooterStyled } from "../styles/FooterStyled";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Nav />
      <p
        style={{
          textAlign: "center",
          color: "#3339",
          padding: 8,
        }}
      >
        Soyez informé sur les dernières technologie de dévéloppement front-end
      </p>
      <Container mt={20} w={90}>
        <SideBox />
        <CenterHome>
          <h2>Tous les articles</h2>
          <Container ml={10}>
            {articles.map((p) => (
              <CardHorizontal key={p.id} data={p} />
            ))}
          </Container>
        </CenterHome>
      </Container>
      <FooterStyled>
        <div className="left">
          <img src={logo} alt="logo" />
          <h3>FrontDev</h3>
          <p>
            Un blog pour tout aspirant dévéloppeur frontend avec plus 50
            articles depuis le début de ce mois.
          </p>
        </div>
        <div className="right">
          <div className="first">
            <h3>Liens importants</h3>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Articles</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="second">
            <h3>Nous supporter</h3>
            <ul>
              <li>
                <Link to="/">Faire un don</Link>
              </li>
              <li>
                <Link to="/">Achetez un café</Link>
              </li>
            </ul>
          </div>
          <div className="social">
            <span className="fa fa-facebook"></span>
            <span className="fa fa-github"></span>
            <span className="fa fa-twitter"></span>
            <span className="fa fa-youtube"></span>
          </div>
        </div>
      </FooterStyled>
    </div>
  );
}
