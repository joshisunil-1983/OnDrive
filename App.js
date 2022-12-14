/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import objLocationUpdate from 'ondrive'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
  TextInput
} from 'react-native';
 import loc from  'ondrive'
 
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  runningstr = 'running';
  stoppedstr = 'stopped';
  state = {
    location: null,
    phone:'',
    time:0,
    running:false
  };
  
  handlePhone = (text) => {
    this.setState({ phone: text })
 }
 handleTime = (text) => {
  this.setState({ time: text })
}
handleAPIKey = (text) => {
  this.setState({ APIKey: text })
}
initvar = () =>
{
  this.state.running = false;
}
  consumeApi = () => {
    
    if(this.state.phone=='')
    {
      alert('enter phone contact info.');
      return;
    }
    if(this.state.time=='')
    {
      alert('enter update after.');
      return;
    }
    this.state.running = true;
    
    objLocationUpdate.APIKey = this.state.APIKey; //'FRwt0F9CAxucS1Shwl1+vUnpQ==';
    objLocationUpdate.contactInfo = this.state.phone;
    objLocationUpdate.updateAfterInSeconds = this.state.time;
    objLocationUpdate.start();
    

  }
  DismissApiCall = () => {
    
    if(this.state.running)
    {
    objLocationUpdate.stop();
    this.state.running = false;
    }
  }
  

render() {
  return (
    <View style={styles.container}>
        <TextInput onChangeText = {this.handleAPIKey} placeholder='API key'  style={{fontSize:15, color:'green',borderColor:'black',borderBottomWidth : 1.0}}></TextInput>
        <View style={styles.containerInputs}>
            
            <TextInput  keyboardType='phone-pad' style={styles.inputs} placeholder="phone" autoCapitalize = "none" onChangeText = {this.handlePhone}></TextInput>
            <TextInput  keyboardType='numeric' maxLength={2} style={styles.inputs} placeholder="seconds" autoCapitalize = "none" onChangeText = {this.handleTime}></TextInput>
        </View>
        <View   style={{
                    paddingHorizontal: 5,
                    paddingVertical: 15,
                    flexDirection: "column",
                }}>
        <TouchableOpacity >
            <Button onPress={this.consumeApi} title='Start' ></Button>
            <Text></Text>
            <Button title='Stop' onPress={this.DismissApiCall}></Button>
        </TouchableOpacity>
        
        </View>
    </View>
  );
}

}
  
const styles = StyleSheet.create({
  
  container: {
    paddingHorizontal: 5,
    flex: 1,
    flexDirection:'column',
     margin:10,
     backgroundColor: "#F5FCFF"
    
  },
  welcome: {
    fontSize: 20,
    textAlign: "left",
    borderColor:'black',
    borderBottomWidth : 1.0,
  },
  instructions: {
    
  },
  containerInputs:{
    marginBottom:20
  },
  inputs:
  {
    textAlign: "left",
    color: "#333333",
    borderColor:'black',
    borderBottomWidth : 1.0
  },
  containerButtons:{
    
    
    
    
  }
});