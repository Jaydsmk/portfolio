import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Project from "./components/project/Project";
import AboutMe from "./components/aboutMe/AboutMe";
import Menu from "./components/menu/Menu";
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar open={menuOpen} setOpen={setMenuOpen} />
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Project />
      </div>
    </div>
  );
};

export default App;
