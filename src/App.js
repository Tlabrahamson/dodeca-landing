import GlobalStyles from "./GlobalStyles";
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Planet from "./components/Planet";
import FlipSection from "./components/FlipSection";
import SocialQuote from "./components/SocialQuote";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Features />
      <Planet />
      <FlipSection />
      <SocialQuote />
      <Footer />
    </>
  );
}

export default App;
