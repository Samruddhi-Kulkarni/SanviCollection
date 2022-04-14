import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from "./Pages/ContactUs";
import Necklace from './Pages/Necklace';
import Earring from './Pages/Earring';
import Ring from './Pages/Ring.js'
import Bracelet from './Pages/Bracelet';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}  />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/contactus" element={<ContactUs/>} />
     
    <Route path="/necklace" element={<Necklace/>} />
    <Route path="/earring" element={<Earring/>} />
    <Route path="/ring" element={<Ring/>} />
    <Route path="/bracelet" element={<Bracelet/>} />
    </Routes>
    </BrowserRouter>

    </>
  );
};

export default App;
