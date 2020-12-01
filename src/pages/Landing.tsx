import React, { useState } from 'react';
import {FiArrowRight} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Sunshine from '../assets/Sunshine.svg';
import Kids from '../assets/Kids.svg';

import '../styles/landing.css';

function Landing(){
  
  const [name, setName] = useState('')
  
  function handleNameUser(name:String){
    localStorage.setItem('userName',JSON.stringify(name));
  }


  return(
    // <div className="body">  
      <div id="main-container">
        
        <div className="h1-container">
          <h1>Aprendendo o ABC</h1>
        </div>

        <div className="p-container">
          <p>Aprender o alfabeto nunca foi tão divertido. </p>
          <p>Se divirta com figuras e sugestões de palavras.</p>
        </div>

        <div className="sunshine-nickname">
          <img src={Sunshine} alt="ABC do Aprendizado"/>
          
          <div className="nickname">
            <p>Nome do aprendiz que irá se divertir</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <Link to="/alphabet" className="login-btn" onClick={ (event: React.MouseEvent<HTMLElement>) =>{ handleNameUser(name) }}>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
          </Link>
        </div>

        <img className="kids" src={Kids} alt="Crianças"/>
        
      </div>
    // </div>  
  );
}

export default Landing;