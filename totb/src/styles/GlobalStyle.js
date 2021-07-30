import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  font-family: 'Lato' !important;
  font-size: 100%;
}

body {
  margin: 0;
  font-family: 'Lato', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  min-height: 100vh;
}

@media(min-width: 700px) {
  html {
    font-size: 135%;
  }
}

  p, ul, h3, a {
    font-family: 'Poppins';
  }
`