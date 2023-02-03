import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Portfolio, About, Visual } from "./pages";
import { VisualDetail } from "./pages/visual/detail";
import { Charts } from "./components/charts";
import { Todo } from "./components/ToDo";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/visual" element={<Visual />} />
        <Route path="/visual/:vid" element={<VisualDetail />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
