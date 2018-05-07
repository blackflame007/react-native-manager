import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
