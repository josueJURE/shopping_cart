import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import NotFound from "./pages/NotFount";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartProvider from "./context/UseShoppingCart";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4 bg-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="*" element={<NotFound />} />{" "}
            {/* Catch-all route for undefined paths */}
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
