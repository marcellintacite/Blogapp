import React, { useEffect, useState } from "react";
import { NavStyled } from "./../styles/NavStyled";
import { Flex } from "./../styles/Flex.Styled";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
export default function Nav() {
  const [togle, setTogle] = useState(false);
  return (
    <NavStyled id="main">
      <Flex>
        <div className="first">
          <img src={logo} alt="profile" />
          <Link to="/">
            Front<span className="color">dev</span>
          </Link>
        </div>
        <div className="toggle" onClick={() => setTogle(!togle)}>
          <span className={togle ? "fa fa-times" : "fa fa-align-center"}></span>
        </div>
        <div className={togle ? "liste active" : "liste"}>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/">Articles</Link>
            </li>
            <li>
              <Link to="/">A propos</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </Flex>
    </NavStyled>
  );
}
