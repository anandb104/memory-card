import Card from "./Card.jsx"
export default function Carddiv({difficulty,cards}){
    let ncards=0;
    if(difficulty=="easy")ncards=6;
    else if(difficulty=="medium")ncards=12;
    else ncards=20;
    return(
        cards.map(card=>{
            <Card key={card.id}
            pokemon={card}
            difficulty={difficulty}/>
        })
    )
}