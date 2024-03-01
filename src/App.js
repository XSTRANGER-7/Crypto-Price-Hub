import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Coins from "./components/Coins";
import Exchange from "./components/Exchange";
import CoinDetails from "./components/CoinDetails";

function App() {
  return (
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
     </Router>
  );
}

export default App;
