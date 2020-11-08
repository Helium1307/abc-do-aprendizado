import React from 'react';

import './word.css';

function Word(props:any){
  return (

    <span id="show-word">{props.value}</span>

  );
}

export default Word;