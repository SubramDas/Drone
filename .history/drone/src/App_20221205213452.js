import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import { useState } from "react";




function App() {
  const [isOpen,setIsopen]=useState(false);
  
  return (
    <>


    <GlobalStyle/>
    <Navbar toggle=/>
    <Dropdown/>
    <Hero slides={SliderData}/>
    </>
  );
}


export default App;
