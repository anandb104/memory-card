import Card from "./Card.jsx"
export default function Carddiv({difficulty,cards,setscore,setresult,setcardsid,cardsid,score}){
    let ncards=0;
    if(difficulty=="easy")ncards=6;
    else if(difficulty=="medium")ncards=12;
    else ncards=20;
    const gamecards=cards.slice(0,ncards);
    return(
    <div className="flex gap-12 flex-wrap ml-15">
        {gamecards.map(card=>{
            return(
            <Card key={card.id}
            pokemon={card}
             setscore={setscore}  setresult={setresult} setcardsid={setcardsid} cardsid={cardsid} score={score} ncards={ncards}/>
            );
        })}
        </div>
    );
}