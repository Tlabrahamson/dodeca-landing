import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Planet from "./components/Planet";
import FlipSection from "./components/FlipSection";
import SocialQuote from "./components/SocialQuote";

import Footer from "./components/Footer";

const AppWrapper = styled.main`
  width: calc(100% - 32rem);
  margin: 0 auto;

  @media screen and (max-width: 1366px) {
    width: calc(100% - 16rem);
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 2rem);
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Navbar />
        <Hero />
        <Features />
        <Planet />
        <FlipSection />
        <SocialQuote />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
