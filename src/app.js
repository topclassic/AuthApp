/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import {Header} from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

export default class AuthApp extends Component {


  componentDidMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyB7L5KyouyVz8iGAOAlKZjSuBFc5pZ-47M',
      authDomain: 'authentication-fdc93.firebaseapp.com',
      databaseURL: 'https://authentication-fdc93.firebaseio.com',
      projectId: 'authentication-fdc93',
      storageBucket: 'authentication-fdc93.appspot.com',
      messagingSenderId: '81111653508'
    })
  }
  render() {
    return (
      <View>
      <Header headerText="Authentication"/>
      <LoginForm/>
      </View>
    );
  }
}
AppRegistry.registerComponent('AuthApp', () => AuthApp);
