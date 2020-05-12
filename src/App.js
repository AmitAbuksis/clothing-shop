import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-sign-up-page/SignInAndSignUp';
import { auth } from './firebase/firebaseUtils';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createUSerProfileDocument } from './firebase/firebaseUtils';

import './App.css';

class App extends React.Component {

  unSubscribeFromAuth = null ;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUSerProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
        setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? 
                                          (<Redirect to='/' />) 
                                          : <SignInAndSignUp />} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
