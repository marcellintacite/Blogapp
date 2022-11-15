import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";
import GlobalStyles from "./styles/global";
import "font-awesome/css/font-awesome.css";
// Root : /, /post/:id ,/user/:id

const theme = {
  color: {
    primary: "#7544e9",
    blue: "#7544e910",
    green: "#27e5b6",
    second: "#f7aca9",
    black: "#1b1c20",
    white: "#fff",
    dark: "#222",
  },
  shadow: "0px 3px 10px 5px #f7aca911",
  mobile: 687,
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/Blogapp" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
