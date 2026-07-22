import {Button} from "./ui/button.jsx";
export default function Difficulty({setdifficulty}){
    return(
        <div className="flex flex-col items-center  gap-8 bg-gray-400 w-100 h-90 rounded-3xl">
            <div className="mt-2 flex items-center p-4 font-['Jim_Nightshade'] text-3xl">Choose Your Pokémon Challenge.The tougher the level, the sharper your memory must be</div>
            <div className="flex items-center font-['Jim_Nightshade'] text-3xl">Select Your Level</div>
            <div className="mt-6 flex items-center gap-6 font-['Jim_Nightshade'] ">
    <Button onClick={()=>setdifficulty('easy')} className="bg-yellow-500  w-25 p-8 text-3xl ">Easy</Button>
    <Button onClick={()=>setdifficulty('easy')} className="bg-red-500   w-25 p-8 text-3xl">Medium</Button>
    <Button onClick={()=>setdifficulty('easy')} className ="w-25 p-8 text-3xl">Difficult</Button>
    </div>
    </div>
    );
}