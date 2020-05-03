import React from 'react';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-sign-up-page/SignInAndSignUp';
import { auth } from './firebase/firebaseUtils';
import { Switch, Route } from 'react-router-dom';
import { createUSerProfileDocument } from './firebase/firebaseUtils';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null ;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUSerProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
}
export default App;
