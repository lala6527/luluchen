import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Portfolio,About,Visual } from "./pages";
import { VisualDetail } from "./components/Content/VisualDetail";
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/visual" element={<Visual />} />
        {/* <Route path="/VisualDatail" element={<VisualDetail />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
