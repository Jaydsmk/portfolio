import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Works from "./component/works/Works";
import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import Menu from "./component/menu/Menu";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        {/* <Portfolio /> */}
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
