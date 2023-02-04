import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Portfolio, About, Visual } from "./pages";
import { HurryBuy } from "./pages/portfolio/hurryBuy";
import { TodoList } from "./pages/portfolio/todoList";
import { Calculator } from "./pages/portfolio/calculator";
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/hurrybuy" element={<HurryBuy />} />
        <Route path="/portfolio/todolist" element={<TodoList />} />
        <Route path="/portfolio/calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/visual" element={<Visual />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
