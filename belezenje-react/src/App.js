import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigacija from "./komponente/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./stranice/Home";
import ONama from "./stranice/ONama";
import Kontakt from "./stranice/Kontakt";
import {Container} from "react-bootstrap";
import Login from "./stranice/Login";
import Registracija from "./stranice/Registracija";
import Admin from "./stranice/Admin";
import Dogadjaji from "./stranice/Dogadjaji";

function App() {
  return (
    <>
       <Navigacija />
       <Container>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/onama" element={<ONama />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registracija" element={<Registracija />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/dogadjaji" element={<Dogadjaji />} />
            </Routes>
          </BrowserRouter>
       </Container>
    </>
  );
}

export default App;