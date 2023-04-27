import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home } from "./home";
import { Page1 } from "./p1";
import { Page2 } from "./p2";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <br />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
