import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import Navigation from "./components/profile/Navigation";
import Footer from "./components/profile/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyle />
        <Navigation />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
