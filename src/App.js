import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import WriteUps from "./components/Writeups";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <About />
      <WriteUps />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
