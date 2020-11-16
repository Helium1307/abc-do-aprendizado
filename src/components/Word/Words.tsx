import React from 'react';

import './word.css';

function Word(props:any){
  return (

    <div id="show-word">{props.children}</div>

  );
}

export default Word;