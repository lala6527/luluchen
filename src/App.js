import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Portfolio, About, Visual } from "./pages";
import { VisualDetail } from "./pages/visual/detail";
import { Charts } from "./pages/portfolio/charts";
import { Todo } from "./pages/portfolio/todo";
import { Hurrybuy } from "./pages/portfolio/hurrybuy";
import { Calculator } from "./pages/portfolio/calculator";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/charts" element={<Charts />} />
        <Route path="/portfolio/todo" element={<Todo />} />
        <Route path="/portfolio/hurrybuy" element={<Hurrybuy />} />
        <Route path="/portfolio/calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/visual" element={<Visual />} />
        <Route path="/visual/:vid" element={<VisualDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
