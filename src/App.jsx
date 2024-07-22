import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Layout from "./Layout/Layout";
import Widget from "./Pages/Widget/Widget";
import Mockup from "./Pages/Mockup/Mockup";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/widget" element={<Widget />} />
          <Route path="/mockup" element={<Mockup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
