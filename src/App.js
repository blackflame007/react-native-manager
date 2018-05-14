import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC3lyng7T2rUFiH4Uzq1tU-Ou__J5d70R0',
      authDomain: 'manager-f4379.firebaseapp.com',
      databaseURL: 'https://manager-f4379.firebaseio.com',
      projectId: 'manager-f4379',
      storageBucket: '',
      messagingSenderId: '789702812340'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
