import React from 'react';

import './suggestion.css';

function Suggestion(props:any){
  return (

    <span id="show-suggestion">{props.suggestion}</span>

  );
}

export default Suggestion;