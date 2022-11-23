import{BrowserRouter ,Route ,Routes} from "react-router-dom";
import { Header,Footer} from "./components";

import './App.scss';

const App = () => {
  return (
  <BrowserRouter>
 <Header />
 <Footer />
 </BrowserRouter>
  );
}

export default App;




