import {Card as Shadcard,CardContent} from "./ui/card.jsx"
import shufflesound from "../assets/shuffle.mp3"
export default function Card({pokemon,setscore,setcardsid,setresult,cardsid,score,ncards,cards,setcards}){
    let shuffleaudio=new Audio(shufflesound);
    function shuffled(cards){
        let shuffle=[...cards];
        let sz=shuffle.length;
        for(let i=sz-1;i>=0;i--){
            let j=Math.floor(Math.random()*(i+1));
            [shuffle[i],shuffle[j]]=[shuffle[j],shuffle[i]];
        }
     return shuffle;
    }
return(
   <Shadcard onClick={()=>{
    if(cardsid.includes(pokemon.id)){
        setresult("lost");
        return;
    }
    else setcardsid(prev=>[...prev,pokemon.id]);
    let newscore=score+1;
    setscore(score=>score+1);
    if(newscore==ncards){
        setresult("won");
        return;
    }
    setcards(shuffled(cards));
    shuffleaudio.play();
    }} className="h-40 w-40 hover:shadow-2xl transition-all cursor-pointer duration-300 hover:rotate-6 hover:scale-105">
    <CardContent className="flex flex-col items-center justify-center font-['Jim_Nightshade'] ">
        <img src={pokemon.image} alt={pokemon.name} className="h-24 w-24"></img>
        <h2 className="text-3xl capitalize">{pokemon.name}</h2>
    </CardContent>
    </Shadcard>
)
}