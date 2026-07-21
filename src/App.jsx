import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Carddiv from"./components/Carddiv.jsx";
import Difficulty from"./components/Difficulty.jsx";
function App() {
  const [difficulty,setdifficulty]=useState(null);
  return (
    <div className="h-screen bg-[url('/pokemon-bg.png')] flex flex-col justify-center">
    <Header/>
   {(difficulty==null)?<Difficulty setdifficulty={setdifficulty}/>: <Carddiv difficulty={difficulty}/>}
    <Footer/>
    </div>
  )
}

export default App
