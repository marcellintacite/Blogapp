import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    font-family: 'Roboto Slab', serif;
    margin:0;
    padding:0
}

body {
    width:100%;
    height: 100vh;
}

`;

export default GlobalStyles;
