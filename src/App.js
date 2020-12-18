import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Planet from "./components/Planet";
import FlipSection from "./components/FlipSection";
import SocialQuote from "./components/SocialQuote";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

AOS.init();

const AppWrapper = styled.main`
  position: relative;
  overflow-x: hidden;
  padding: 0 16rem;

  @media screen and (max-width: 1366px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`;

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Features />
      <Planet />
      <FlipSection />
      <SocialQuote />
      <CardSection />
      <Footer />
    </AppWrapper>
  );
}

export default App;
