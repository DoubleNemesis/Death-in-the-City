import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  font-size: 100%;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Poppins', 'Lato', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  min-height: 100vh;
  background-color: midnightblue;
}

@media(min-width: 700px) {
  html {
    font-size: 135%;
  }
}
@media(min-width: 1025px) {
  html {
    font-size: 100%;
  }
}

.navbar-light .navbar-toggler-icon {
  background-image: url('https://tomsclassroom.com/react/navIcon.png') !important;
}

.navbar-light .navbar-nav .nav-link {
    color: whitesmoke;
}

  p, ul, h3, a {
    font-family: 'Poppins';
  }

  .error{
    background-color: red !important;
}
  
`