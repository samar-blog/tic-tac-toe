import React,{useState} from 'react';
import './TicTac.css';

const TicTac = () => {     
     
  const [winner, setWinner] = useState();
  
     const checkWinner = (quantity) => { 
       let combines = { 
         down: [
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
         ],
         across: [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
         ],
         diagonal: [
           [0, 4, 8],
           [2, 4, 6],
         ],
       };

       for(let combo in combines) { 
          combines[combo].forEach((pattern) => { 
             if ( 
               quantity[pattern[0]] === '' ||
               quantity[pattern[1]] === '' ||
               quantity[pattern[2]] === ''
             ) { }
               else if ( 
                quantity[pattern[0]] === quantity[pattern[1]] &&
                quantity[pattern[1]] === quantity[pattern[2]]
               ) { 
                setWinner(quantity[pattern[0]]);
               }
             
          });
       }
     };
    
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));

    const handleButton = (num) => { 
        if(cells[num] !== '') { 
            alert('You clicked this !');
            return;
        }
        let quantity = [...cells];

        if(turn === 'X') { 
            quantity[num] = 'X';
            setTurn('0') }
            else { 
                quantity[num] = '0';
                setTurn('X')
            }
            checkWinner(quantity);
            setCells(quantity);
    }
    const handleRestart = () => {
      setWinner(null);
      setCells(Array(9).fill(''));
      
    };

    const Cell = ({num}) => { 
        return <td onClick={()=> handleButton(num)}>{cells[num]}</td>
    }
  return (
    <div className='container'>
      
       <div className='box'>
       <table>
         <h1 className='text'> Turn: {turn}</h1>
           <tbody>
               <tr>
                 <Cell num={0}/>
                 <Cell num={1}/>
                 <Cell num={2}/>
               </tr>
               <tr>
                 <Cell num={3}/>
                 <Cell num={4}/>
                 <Cell num={5}/>
               </tr>
               <tr>
                 <Cell num={6}/>
                 <Cell num={7}/>
                 <Cell num={8}/>
               </tr>
           </tbody>
       </table>
       </div>
       {winner && (
				<>
					<p>{winner} is the winner!</p>
					<button onClick={() => handleRestart()} className="btn btn-outline-warning">Play Again</button>
				</>
			)}
    </div>
  )
}

export default TicTac;