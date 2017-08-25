/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header} from './components/common'

export default class AuthApp extends Component {
  render() {
    return (
      <View>
      <Header headerText="Authentication"/>
        <Text>Appp</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('AuthApp', () => AuthApp);
