import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigacija from "./komponente/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./stranice/Home";
import ONama from "./stranice/ONama";
import Kontakt from "./stranice/Kontakt";

function App() {
  return (
    <>
       <Navigacija />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onama" element={<ONama />} />
            <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;