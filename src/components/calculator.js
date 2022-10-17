import React, {Component} from 'react';
import {Button,TextInput,StyleSheet,Pressable,View,Text} from 'react-native';
export default class Calculator extends React.Component {
    constructor(props)
    {
      super(props);
      this.state={primary:0,secondary:0};
    }
    sum =() =>{
        var N1= parseInt(this.state.primary);
        var N2= parseInt(this.state.secondary);
        var Results = N1+N2;
        this.setState({myText: Results})

    }
    
    subtract =() =>{
        var N1= parseInt(this.state.primary);
        var N2= parseInt(this.state.secondary);
        var Results = N1-N2;
        this.setState({myText: Results})
    }

    multiply =() =>{
        var N1= parseInt(this.state.primary);
        var N2= parseInt(this.state.secondary);
        var Results = N1*N2;
        this.setState({myText: Results})
    }

    divide =() =>{
        var N1= parseInt(this.state.primary);
        var N2= parseInt(this.state.secondary);
        var Results = parseInt(N1/N2);
        this.setState({myText: Results})
    }

    render(){
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}> Sample Calculator Application </Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder=" First value" keyboardType='numeric' onChangeText={primary=>this.setState({primary})} />
                    <TextInput style={styles.textInput} placeholder=" Second value" keyboardType='numeric' onChangeText={secondary=>this.setState({secondary})}/>
                </View>
              
                <Text style={styles.result}>
                  {this.state.myText}
                </Text>
                <View>
                    <Pressable style={styles.button} onPress={this.sum}>
                        <Text style={styles.text}>+</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={this.subtract}>
                        <Text style={styles.text}>-</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={this.multiply}>
                        <Text style={styles.text}>×</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={this.divide}>
                        <Text style={styles.text}>÷</Text>
                    </Pressable>
                </View>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth:1,
        margin:10,
        borderRadius:4,
        width: 300,
        fontFamily: 'monospace',
        textAlign: 'center',
        color: '#1183ca',
        fontSize: 20,
    },
    
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 15,
        margin: 10,
        backgroundColor: '#1183ca',
        width: 300,
        verticalSlign: 'middle',
        fontFamily: 'monospace',
    },

    operations: {

    },
    
    text: {
        fontSize: 24,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1183ca',
        margin: 10,
        fontFamily: 'monospace',
    },
    header: {
        height: '10%',
        width: '100%',
    },
    inputContainer: {
        alignItems: 'flex-end',
    },
    result: {
        borderWidth:1,
        margin:10,
        borderRadius: 4,
        backgroundColor: 'white',
        width: 300,
        height: 50,
        fontSize: 25,
        fontFamily: 'monospace',
        backgroundColor:'#e5e0e0',
        textAlign: 'center',
        color: '#1183ca',
        elevation: 15,
        fontWeight: 'bold',
        paddingVertical: 9,
    },
  });