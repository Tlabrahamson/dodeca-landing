import GlobalStyles from "./GlobalStyles";
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}

export default App;
