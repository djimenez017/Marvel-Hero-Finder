import { createGlobalStyle } from "styled-components";
import Container from "./components/containters/Container";
import Navigation from "./components/UI/navigation/navigationBar";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
html {
  background-color: #FFEE33;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='39' height='39' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.5' fill='%23FFA900' cx='45' cy='45' r='14'/%3E%3Cg fill='%23FFA900' fill-opacity='0.5'%3E%3Ccircle cx='0' cy='90' r='14'/%3E%3Ccircle cx='90' cy='90' r='14'/%3E%3Ccircle cx='90' cy='0' r='14'/%3E%3Ccircle cx='0' cy='0' r='14'/%3E%3C/g%3E%3C/svg%3E");
}

h1 {
  margin: 0;
}

  body {
    height: 100vh;
    font-size: 16px;
  }
`;

function App() {
  // const baseURL = "https://gateway.marvel.com:443";

  axios
    .get(
      `https://gateway.marvel.com:443/v1/public/characters?name=thor&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
    )
    .then((response) => {
      console.log(response.data);
    });

  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Container />
    </div>
  );
}

export default App;
