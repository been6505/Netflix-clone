import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Enjoy from "./components/Enjoy/Enjoy";
import Download from "./components/Download/Download";
import Watch from "./components/Watch/Watch";
import Kids from "./components/Kids/Kids";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Kids />

      <Questions />
      <Footer />
    </>
  );
}

export default App;
