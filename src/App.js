import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from './routes/About';
import Career from './routes/Career';
import Home from './routes/Home';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/careers" element={<Career />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
