import { useState,useEffect } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Carddiv from"./components/Carddiv.jsx";
import Difficulty from"./components/Difficulty.jsx";
function App() {
  const [difficulty,setdifficulty]=useState(null);
  let [cards,setcards]=useState([]);
  let [score,setscore]=useState(0);
  let [highscore,sethighscore]=useState(0);
  let [result,setresult]=useState("playing");
  useEffect(()=>{
    async function fetchpoke(){
      let pokemon=[];
      for(let i=1;i<=20;i++){
        let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
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
  },[])
  return (
    <div className="h-screen bg-[url('/pokemon-bg.jpg')] flex flex-col">
    <Header score={score} highscore={highscore} sethighscore={sethighscore}/>
    <div className='flex flex-1 justify-center items-center'>
   {(difficulty==null)?<Difficulty setdifficulty={setdifficulty}/>:<Carddiv difficulty={difficulty} cards={cards} score={score} setscore={setscore}/>}
   </div>
    </div>
  )
}

export default App
