/**
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Button,TextInput,StyleSheet,Pressable,View,Text} from 'react-native';

//import Calculator from './src/components/calculator';
export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={primary:0,secondary:0};
  }

  Sum =() =>{
    var N1= parseInt(this.state.primary);
    var N2= parseInt(this.state.secondary);
    var Results = N1+N2;
    alert(Results);
  }
  Subtract =() =>{
    var N1= parseInt(this.state.primary);
    var N2= parseInt(this.state.secondary);
    var Results = N1-N2;
    alert(Results);
  }

  Multiply =() =>{
    var N1= parseInt(this.state.primary);
    var N2= parseInt(this.state.secondary);
    var Results = N1*N2;
    alert(Results);
  }

  Divide =() =>{
    var N1= parseInt(this.state.primary);
    var N2= parseInt(this.state.secondary);
    var Results = N1/N2;
    alert(Results);
  }

  render() {
    return (
      <View>
        <Text style={styles.title}> Sample Calculator</Text>
        <TextInput style={styles.textInput} placeholder=" First value" keyboardType='numeric' onChangeText={primary=>this.setState({primary})} />
        
        <TextInput style={styles.textInput} placeholder=" Second value" keyboardType='numeric' onChangeText={secondary=>this.setState({secondary})}/>
        
        <Pressable style={styles.button} onPress={this.Sum}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        
        <Pressable style={styles.button} onPress={this.Subtract}>
          <Text style={styles.text}>-</Text>
        </Pressable>
        
        <Pressable style={styles.button} onPress={this.Multiply}>
          <Text style={styles.text}>×</Text>
        </Pressable>
        
        <Pressable style={styles.button} onPress={this.Divide}>
          <Text style={styles.text}>÷</Text>
        </Pressable>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textInput: {
    borderWidth:1,
    margin:10,
    borderRadius:4,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    backgroundColor: '#1183ca',
  },
  text: {
    fontSize: 24,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1183ca',
    margin: 10,
  },
});

//export default Calculator;
