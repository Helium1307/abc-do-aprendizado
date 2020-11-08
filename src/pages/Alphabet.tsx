import React, { useEffect, useState } from 'react';

import { FaBackspace } from 'react-icons/fa';

import Words from '../components/Word/Words';
import Suggestion from '../components/Suggestion/Suggestion'
import '../styles/alphabet.css';
import { idText } from 'typescript';




function Alphabet(){
  
  let word = {
    value: '',
    id: 1,
  };

  const [rightLetter, setRightLetter] = useState<any>([]);
  const [suggestion, setSuggestion] = useState<any>([]);
  
  function handlePutLetter(){
    
    
  }

  function backspace(){
    

    const length = rightLetter.length;
    const deletedLetter = rightLetter[length-1];
    
     //setRightLetter(rightLetter.filter((item : any)=>(item !== (item.id === deletedLetter))));
     //ATÉ AGORA OQUE DEU CERTO
     console.log(word.id)
      setRightLetter(rightLetter.filter((item : any)=>(
     
        rightLetter.indexOf(item) !== rightLetter.indexOf(deletedLetter)
        )
      ));

      
  }

  // UTILIZANDO O POP() NO setRightLetter ,  ELE SIMPLESMENTE PEGA O VALOR DO POP E TRANSFORMA NO VALOR DO STATE.
  
  useEffect(()=>{
    
  },[rightLetter])


  return(
    <>
      <header>
        <div className="name-container">
          <span>Aprendiz: {String(localStorage.getItem('userName'))}</span>
        </div>
        
        <div className="letters-table">
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="A";word.id++; console.log(word.id); setRightLetter([...rightLetter,word.value]);}}>A</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="B";word.id++; console.log(word.id); setRightLetter([...rightLetter,word.value]);}}>B</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="C" ; setRightLetter([...rightLetter,word.value]);}}>C</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="D" ; setRightLetter([...rightLetter,word.value]);}}>D</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="E" ; setRightLetter([...rightLetter,word.value]);}}>E</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="F" ; setRightLetter([...rightLetter,word.value]);}}>F</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="G" ; setRightLetter([...rightLetter,word.value]);}}>G</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="H" ; setRightLetter([...rightLetter,word.value]);}}>H</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="I" ; setRightLetter([...rightLetter,word.value]);}}>I</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="J" ; setRightLetter([...rightLetter,word.value]);}}>J</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="K" ; setRightLetter([...rightLetter,word.value]);}}>K</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="L" ; setRightLetter([...rightLetter,word.value]);}}>L</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="M" ; setRightLetter([...rightLetter,word.value]);}}>M</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="N" ; setRightLetter([...rightLetter,word.value]);}}>N</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="O" ; setRightLetter([...rightLetter,word.value]);}}>O</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="P" ; setRightLetter([...rightLetter,word.value]);}}>P</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="Q" ; setRightLetter([...rightLetter,word.value]);}}>Q</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="R" ; setRightLetter([...rightLetter,word.value]);}}>R</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="S" ; setRightLetter([...rightLetter,word.value]);}}>S</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="T" ; setRightLetter([...rightLetter,word.value]);}}>T</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="U" ; setRightLetter([...rightLetter,word.value]);}}>U</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="V" ; setRightLetter([...rightLetter,word.value]);}}>V</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="X" ; setRightLetter([...rightLetter,word.value]);}}>X</span>
          <span className="letters" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ word.value ="Z" ; setRightLetter([...rightLetter,word.value]);}}>Z</span>

        </div>

        <button className="btn-backspace" onClick={(event: React.MouseEvent<HTMLElement>) =>{backspace()} } ><FaBackspace /></button>
      </header>  
      
      <main className="words">
        <Words value={ rightLetter }/>
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