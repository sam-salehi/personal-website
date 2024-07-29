import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
