import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css"
import isWinner from "../../Helpers/CheckWinner";
function Grid({ numberOfCards }){
    const [bord, setBord] = useState(Array(numberOfCards).fill(" "));
    const [turn, setTurn]= useState(true); // true => O; false => x
    const [winner, setWinner] = useState(null);

    function play(index){
        if(turn == true){
            bord[index] ='O';
        }
        else{
            bord[index]='X';
        }
        const win = isWinner(bord, turn ? 'O' : 'X')
        if(win){
            setWinner(win);
        }
        setBord([...bord]);
        setTurn(!turn);
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setBord(Array(numberOfCards).fill(" "));
    }
    
    return (
        <div className="grid-wrapper">
            {
                winner &&(
                    <h1 className="turn-highlight">Winnre is {winner}</h1>
                )
                
            }
            
            <div  className="grid">
            {bord.map((el,idx) => <Card gameEnd={winner ? true:false} key={idx} onPlay={play} player={el} index={idx} />)}
            </div>
            <h1 className="turn-highlight">Current turn : {(turn)? 'O' : 'X'}</h1>
            {
                winner &&(
                    <button className="reset" onClick={reset}>Reset Game</button>
                )
                
            }
        </div>
        
    )
}

export default Grid;