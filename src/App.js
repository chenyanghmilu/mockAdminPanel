import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import MainPenel from './components/mainPanel/MainPenel';
import SignIn from './pages/sign-in/Sign-in';
import User from './components/user/User'
import { auth, createUserProfileDocument } from './firebase//firebase'
import Sidebar from './components/sidebar/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }

          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="wrapper">
        <Sidebar currentUser={this.state.currentUser} />
        <MainPenel />
        <Switch>
          <Route exact path='/login' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
