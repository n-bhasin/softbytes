import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Technology from "./components/Technology";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Container maxW="1200px">
        <Services />
        <Technology />
        <ContactUs />
      </Container>
      <Footer />
    </>
  );
}

export default App;
