/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ Component } from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.alternativeLayoutButtonContainer}>  
          <TextInput style={styles.input} placeholder="Primary value" keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Secondary value" keyboardType="numeric" />
        </View>
        <TextInput style={styles.output} placeholder="Result" />
        <View style={styles.alternativeLayoutButtonContainer}>     
          <Button onPress={this._onPressButton} title="+" color="#841584" />
          <Button onPress={this._onPressButton} title="-" color="#841584" />
          <Button onPress={this._onPressButton} title="×" color="#841584" />
          <Button onPress={this._onPressButton} title="÷" color="#841584" />
          <Button onPress={this._onPressButton} title="=" color="#841584" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 70,
  },
  alternativeLayoutButtonContainer: {
    margin: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },

  output: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 3,
    justifyContent: 'center',
  },
});

//export default App;
