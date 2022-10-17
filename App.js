/**
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Button,TextInput,StyleSheet,Pressable,View,Text} from 'react-native';

import Calculator from './src/components/calculator';
export default class App extends Component {
  render(){
    return (
    <Calculator />
    );
  }
}

//export default App;
