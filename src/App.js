import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
let cardItems1 = [];
let cardItems2 = [];
function CardItem(props){
  let card = props.card;
  return <div style={{margin:'10px',borderRadius:'10px',border:'1px solid blue',width:'100px',height:'100px',backgroundColor:'red',float:'left'}}>
          Name : {card.name}<br/>
          Age : { card.age}<br/>
         
        </div>
}
// image : <img src="{{card.img}}" width="50" height="30" /><br/>

function Card(props){
    console.log("re rendering card with active: ",props.active);
     cardItems1 = cardItems1.length > 0 ? cardItems1: props.card1.map((card) => <CardItem card={card} key={'first'+card.id}></CardItem>);
     cardItems2 = cardItems2.length > 0 ? cardItems2: props.card2.map((card) => <CardItem card={card} key={'second'+card.id}></CardItem>);

     return props.active? cardItems1: cardItems2;

}

function  Page() {
  const  [active,setActive] = useState(false);
  const [card1,setCard1 ] = useState([]);
  const [card2,setCard2 ] = useState([]);
  const card = {
    name: 'sreejith',
    age: 34,
    img:'capture001.png'

  }
  const toggleActive = () => {
   setActive((active) => !active);
  }
  useEffect(() => {
    console.log("preparing");
    let cards = [];
    let cards2 = [];
    for(let i=0; i< 10000;i++){
      let myCard = {...card,...{name: card.name+i, age: card.age+i, id: i}};
      cards.push(myCard);
    }
    for(let i=0; i< 20000;i++){
      let myCard = {...card,...{name: 'ajith'+i, age: card.age+i, id: i}};
      cards2.push(myCard);
    }
    setCard1(cards);
    setCard2(cards2);
},[]);
 

          return (
            <div>
            <button onClick={()=>toggleActive()}>Toggle Tab</button>
              <div style={{width:'100%',height:'100vh',overflow:'scroll'}}>
                <Card card1={ card1} card2={ card2} active={active}/>
              </div>
          </div>
          );

  
}
const App = () => (<Page/>)
export default App;
