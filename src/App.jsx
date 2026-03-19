import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Trainers from "./pages/Trainers";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-white dark:bg-[#0b0b0b] text-black dark:text-white min-h-screen transition-colors duration-300">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;