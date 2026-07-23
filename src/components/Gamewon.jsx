import {Card as Shadcard,CardContent} from "./ui/card.jsx"
import { useEffect } from 'react'
import favicon from "/favicon.png";
export default function Gamewon({setscore}){
    useEffect(()=>{
        setscore(0);
    },[]);
    return(
        <Shadcard 
            className="h-40 w-40 hover:shadow-2xl transition-all cursor-pointer duration-300 hover:rotate-6 hover:scale-105">
            <CardContent className="flex flex-col items-center justify-center font-['Jim_Nightshade'] ">
                <img src={favicon} alt="Winning Gif" className="h-24 w-24"></img>
                <h2 className="text-3xl capitalize">Win</h2>
            </CardContent>
            </Shadcard>
    );
}