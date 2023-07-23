import React from "react";
import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import Courses from "./components/Courses"
import Teachers from "./components/Teachers"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <About/>
      <Courses/>
      <Teachers/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
