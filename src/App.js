import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import firebase from './firebase';

import { PageHeader } from './components/PageHeader';
import TrophyRoom from './components/TrophyRoom';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import './App.css';

class App extends Component {
  state = {
    authorized: false,
    user: '',
    view: 'room'
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.email.value)
    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    //   console.log('start');
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   if (errorCode === 'auth/wrong-password') {
    //     alert('Wrong password.');
    //   } else {
    //     alert(errorMessage);
    //   }
    //   console.log('end')
    // });
  }

  render() {
    return <div className="App">
        <PageHeader />
        {/*<TrophyRoom view={this.state.view} />*/}
        <Login onSubmit={this.onSubmit} />
        <Footer />
      </div>;
  }
}

export default App;
