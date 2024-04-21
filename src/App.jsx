import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {

  document.body.style.backgroundColor = "#131313";

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
