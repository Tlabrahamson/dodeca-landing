import GlobalStyles from "./GlobalStyles";
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Planet from "./components/Planet";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Features />
      <Planet />
    </>
  );
}

export default App;
