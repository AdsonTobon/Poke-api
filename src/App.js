import React from 'react';
import Cards from './components/Cards';
import Modal from './components/Modal';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) =>  <Cards {...props}/> } />
        <Route exact path="/:pokemonId" render={(props) =>  <Modal {...props}/> } />
        
      </Switch>
         
       
    </div>
  );
}

export default App;
