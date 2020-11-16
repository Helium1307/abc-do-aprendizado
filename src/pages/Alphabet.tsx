import React, { useEffect, useState } from 'react';

import { FaBackspace } from 'react-icons/fa';

import api from '../services/api';
import Words from '../components/Word/Words';
import Suggestion from '../components/Suggestion/Suggestion'
import '../styles/alphabet.css';
import { idText } from 'typescript';
import { spawn } from 'child_process';




function Alphabet(){
  
  let word = {
    value: '',
    id: 1,
  };

  const [rightLetter, setRightLetter] = useState<any>([{
    
      value:"",
      id:0,
  }]);
  const [suggestion, setSuggestion] = useState<any>([]);
  
  const [counter, setCounter] = useState<number>(0)

  function backspace(){
         
    
     //setRightLetter(rightLetter.filter((item : any)=>(item !== (item.id === deletedLetter))));
     //ATÉ AGORA OQUE DEU CERTO
     setRightLetter(rightLetter.filter((item : any, index : number)=>(
     
      (rightLetter.indexOf(item)) !== (rightLetter.length-1 ) 
    
    )
  ))
  }

  // UTILIZANDO O POP() NO setRightLetter ,  ELE SIMPLESMENTE PEGA O VALOR DO POP E TRANSFORMA NO VALOR DO STATE.
  return(
    <>
      <header>
        <div className="name-container">
          <span>Aprendiz: {String(localStorage.getItem('userName'))}</span>
        </div>
        
        <div className="letters-table">
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"A",id:counter}]);}}>A</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"B",id:counter}]);}}>B</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"C",id:counter}]);}}>C</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"D",id:counter}]);}}>D</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"E",id:counter}]);}}>E</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"F",id:counter}]);}}>F</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"G",id:counter}]);}}>G</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"H",id:counter}]);}}>H</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"I",id:counter}]);}}>I</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"J",id:counter}]);}}>J</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"K",id:counter}]);}}>K</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"L",id:counter}]);}}>L</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"M",id:counter}]);}}>M</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"N",id:counter}]);}}>N</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"O",id:counter}]);}}>O</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"P",id:counter}]);}}>P</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"Q",id:counter}]);}}>Q</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"R",id:counter}]);}}>R</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"S",id:counter}]);}}>S</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"T",id:counter}]);}}>T</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"U",id:counter}]);}}>U</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"V",id:counter}]);}}>V</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"W",id:counter}]);}}>W</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"X",id:counter}]);}}>X</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"Y",id:counter}]);}}>Y</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{setCounter(counter+1); setRightLetter([...rightLetter,{value:"Z",id:counter}]);}}>Z</span>

        </div>

        <button className="btn-backspace" onClick={(event: React.MouseEvent<HTMLElement>) =>{backspace()} } ><FaBackspace /></button>
      </header>  
      
      <main className="words">
        <Words>
          { rightLetter.map((letra : any) => {
            return(
              <span key={letra.id}>{letra.value}</span>
            )
          }) }
        </Words>
      </main>
      
      <footer>
        <header><span>Sugestões:</span></header>

        <div className="content">
          <Suggestion suggestion={'dale dale dale'} />
        </div>
      </footer>


    </>
  );
}

export default Alphabet;