import React from 'react';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-sign-up-page/SignInAndSignUp';

import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}
export default App;
