import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";
import NotFound from "./components/NotFount";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<NotFound />} />   {/* Catch-all route for undefined paths */}
      </Routes>
    </Container>
  );
}

export default App;
