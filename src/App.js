import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import AboutUs from "./Pages/About/AboutUs/AboutUs";
import Channels from "./Pages/Channels/Channels";
import Collections from "./Pages/AllPages/Collections/Collections";
import Details from "./Pages/AllPages/Details/Details";
import ShoppingCart from "./Pages/AllPages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/channels" element={<Channels />}></Route>
          <Route path="/collection" element={<Collections />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/cart" element={<ShoppingCart />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
