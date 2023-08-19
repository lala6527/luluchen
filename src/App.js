import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Portfolio, About, Visual } from "./pages";
import { VisualDetail } from "./pages/visual/detail";
import { Dashboard } from "./pages/portfolio/dashboard/dashboard";
import { Todo } from "./pages/portfolio/todo";
import { Calculator } from "./pages/portfolio/calculator";
import "./styles/tailwind.css";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/todo" element={<Todo />} />
        { <Route path="/portfolio/dashboard" element={<Dashboard />} /> }
        <Route path="/portfolio/calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/visual" element={<Visual />} />
        <Route path="/visual/:vid" element={<VisualDetail />} />
      </Routes>      
      <Footer />
    </BrowserRouter>  );
};
export default App;