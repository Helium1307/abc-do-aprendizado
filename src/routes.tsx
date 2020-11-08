import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Alphabet from './pages/Alphabet';
import Landing from './pages/Landing';


function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/alphabet" exact component={Alphabet}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;