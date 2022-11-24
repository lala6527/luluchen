import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { LuluChen } from "./pages/luluchen";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LuluChen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
