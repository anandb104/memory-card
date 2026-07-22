import { useState,useEffect } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Carddiv from"./components/Carddiv.jsx";
import Difficulty from"./components/Difficulty.jsx";
function App() {
  const [difficulty,setdifficulty]=useState(null);
  let [cards,setcards]=useState([]);
  useEffect(()=>{
    async function fetchpoke(){
      let pokemon=[];
      for(let i=0;i<=20;i++){
        let response=await fetch("https://pokeapi.co/api/v2/pokemon/25");
        let data=await response.json();
        pokemon.push({
          id:data.id,
          name:data.name,
          image:data.sprites.other["official-artwork"].front_default,
        })
      }
      setcards(pokemon);
    } 
    fetchpoke();
  })
  return (
    <div className="h-screen bg-[url('/pokemon-bg.jpg')] flex flex-col">
    <Header/>
    <div className='flex flex-1 justify-center items-center'>
   {(difficulty==null)?<Difficulty setdifficulty={setdifficulty}/>:<Carddiv difficulty={difficulty} cards={cards}/>}
   </div>
    </div>
  )
}

export default App
