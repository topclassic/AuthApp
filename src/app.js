/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  View
} from 'react-native';
import {Header, Button, Spinner} from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

export default class AuthApp extends Component {

  state={loggedIn:true}

  componentDidMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyB7L5KyouyVz8iGAOAlKZjSuBFc5pZ-47M',
      authDomain: 'authentication-fdc93.firebaseapp.com',
      databaseURL: 'https://authentication-fdc93.firebaseio.com',
      projectId: 'authentication-fdc93',
      storageBucket: 'authentication-fdc93.appspot.com',
      messagingSenderId: '81111653508'
    })

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn:true})
      }else{
        this.setState({loggedIn:false})
      }
    })
  }
  renderContent(){
      switch(this.state.loggedIn){
          case true:
              return (
                  <View style={styles.containerStyle}>  
                  <Button onPress={()=>firebase.auth().signOut()}>
                      Log Out
                  </Button>
                  </View>
            )      
        case false:
          return <LoginForm/>
        default:
          return <Spinner size="large"/>
    }
  }
  render() {
    return (
      <View>
      <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      position: 'relative',
  },
});
AppRegistry.registerComponent('AuthApp', () => AuthApp);
