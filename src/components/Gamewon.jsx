import {Card as Shadcard,CardContent} from "./ui/card.jsx"
import {Button} from "./ui/button.jsx";
import favicon from "/favicon.png";
export default function Gamewon({setscore,setdifficulty,setcardsid,setresult}){
    return(
        <Shadcard 
            className="h-150 w-150 hover:shadow-2xl transition-all cursor-pointer duration-300 hover:rotate-6 hover:scale-105">
            <CardContent className="flex flex-col gap-2 items-center justify-center font-['Jim_Nightshade'] ">
                <img src={favicon} alt="Winning Gif" className="h-75 w-75"></img>
                <div className="text-3xl capitalize">You Won!!</div>
                <div className="text-3xl capitalize ml-7">Congratulations, Trainer!
You remembered every Pokémon and conquered the challenge.
The path to becoming a Pokémon Master has never looked brighter!</div>
               <div className="text-3xl capitalize">Play Again?</div>
               <div className="flex gap-12 ">
               <Button onClick={()=>{setscore(0);
                setresult("playing");
                setcardsid([]);
                setdifficulty('easy');}} className="bg-yellow-500  w-25 p-8 text-3xl ">Easy</Button>
       <Button onClick={()=>{
        setscore(0);
        setresult("playing");
        setcardsid([]);
        setdifficulty('medium');}} className="bg-red-500   w-25 p-8 text-3xl">Medium</Button>
        <Button onClick={()=>{
            setscore(0);
            setresult("playing");
            setcardsid([]);
            setdifficulty('hard');}} className ="w-25 p-8 text-3xl">Difficult</Button>
        </div>
            </CardContent>
            </Shadcard>
    );
}