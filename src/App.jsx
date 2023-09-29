import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <div className="">
        <Header />
        <main className="main">
          <Home />
          <About/>
          <Skills/>
        </main>
      </div>
    </div>
  );
}

export default App;
