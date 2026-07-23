import {Card as Shadcard,CardContent} from "./ui/card.jsx"
export default function Card({pokemon,setscore,setcardsid,setresult,cardsid,score,ncards}){
return(
   <Shadcard onClick={()=>{
    if(cardsid.includes(pokemon.id)){
        setresult("lost");
        return;
    }
    else setcardsid(prev=>[...prev,pokemon.id]);
    let newscore=score+1;
    if(newscore==ncards)setresult("won");
    setscore(score=>score+1);
    }} className="h-40 w-40 hover:shadow-2xl transition-all cursor-pointer duration-300 hover:rotate-6 hover:scale-105">
    <CardContent className="flex flex-col items-center justify-center font-['Jim_Nightshade'] ">
        <img src={pokemon.image} alt={pokemon.name} className="h-24 w-24"></img>
        <h2 className="text-3xl capitalize">{pokemon.name}</h2>
    </CardContent>
    </Shadcard>
)
}