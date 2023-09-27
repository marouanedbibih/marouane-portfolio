import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <div className="bg-home">
        <Header />
        <main className="main">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
