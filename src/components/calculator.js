import React, {Component} from 'react';
import {Button,TextInput,View} from 'react-native';


export default class Calculator extends Component {
    constructor(props)
    {
        super(props);
        this.state={Num1:0,Num2:0};
    }
    
    Sum =() =>{
        var N1= parseInt(this.state.Num1);
        var N2= parseInt(this.state.Num2);
        var Results = N1+N2;
        alert(Results);
    }
    
    Subtract =() =>{
        var N1= parseInt(this.state.Num1);
        var N2= parseInt(this.state.Num2);
        var Results = N1-N2;
        alert(Results);
    }

    Multiply =() =>{
        var N1= parseInt(this.state.Num1);
        var N2= parseInt(this.state.Num2);
        var Results = N1*N2;
        alert(Results);
    }

    Divide =() =>{
        var N1= parseInt(this.state.Num1);
        var N2= parseInt(this.state.Num2);
        var Results = N1/N2;
        alert(Results);
    }

    render() {
        return (
        <View>
            <TextInput style={{borderWidth:1,margin:10}} placeholder="Num1" onChangeText={Num1=>this.setState({Num1})}/>
            <TextInput style={{borderWidth:1,margin:10}} placeholder="Num2" onChangeText={Num2=>this.setState({Num2})}/>
            <Button title="Sum" onPress={this.Sum}/>
            <Button title="Subtract" onPress={this.Subtract}/>
            <Button title="Multiply" onPress={this.Multiply}/>
            <Button title="Divide" onPress={this.Divide}/>
        </View>
    );
  }
}
