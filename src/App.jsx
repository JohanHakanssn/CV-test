import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutme from "./pages/Aboutme";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PageNav from "./components/PageNav";

function App() {
  return (
    <BrowserRouter>
      <div>
        <PageNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
