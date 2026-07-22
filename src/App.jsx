import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Carddiv from"./components/Carddiv.jsx";
import Difficulty from"./components/Difficulty.jsx";
function App() {
  const [difficulty,setdifficulty]=useState(null);
  return (
    <div className="h-screen bg-[url('/pokemon-bg.jpg')] flex flex-col">
    <Header/>
    <div className='flex flex-1 justify-center items-center'>
   {(difficulty==null)?<Difficulty setdifficulty={setdifficulty}/>: <Carddiv difficulty={difficulty}/>}
   </div>
    </div>
  )
}

export default App
