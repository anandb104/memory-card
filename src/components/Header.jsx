export default function Header({score,highscore,sethighscore}){
    if(score>highscore)sethighscore(score);
    return(
        <div className="h-30 color text-red-500  text-6xl flex flex-col gap-4 items-center justify-center font-['VT323']">
      <h1>Memory-Card</h1>
       <h1>Score:{score} &ensp; &ensp; High Score:{highscore}</h1>
        </div>
    )
}