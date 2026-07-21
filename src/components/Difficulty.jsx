import {Button} from "./ui/button.jsx";
export default function Difficulty({setdifficulty}){
    return(
        <div className="flex items-center flex-1 justify-center space-x-10">
    <Button onClick={()=>setdifficulty('easy')} className="bg-yellow-400">Easy</Button>
    <Button onClick={()=>setdifficulty('easy')} className="bg-red-500">Medium</Button>
    <Button onClick={()=>setdifficulty('easy')} className="bg-black">Difficult</Button>
    </div>
    );
}