import React from "react";

import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

import SidebarNav from "./components/SidebarNav";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Credits from "./pages/Credits";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro />
        <About />
        <Credits/>
      </div>
      <SidebarNav />
    </div>
  );
}

export default App;
