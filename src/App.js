import React from 'react';
import HomePage from './pages/homepage/HomePage'
import { Switch, Route } from 'react-router-dom';

const HatsPage =() => {
  return (<div>
      <h1>HATS PAGE</h1>
  </div>)
}

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}
export default App;
