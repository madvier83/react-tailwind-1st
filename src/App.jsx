import "./App.css";
import { Navbar } from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Flex } from "./Pages";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flexbox" element={<Flex />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
