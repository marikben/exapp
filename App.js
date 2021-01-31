import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const buttonPressed = () =>{
    Alert.alert('You typed:'+ text);
  }
  const styles = StyleSheet.create({
    alerttext:{
      fontSize:18,
      color:'red'
    },
    
  });
  return (
    <View style={styles.container}>
      <Image style={{ width:250, height:100 }}
      source={{uri: 'https://mb.cision.com/Public/336/9568944/a2cd1bab9cf6aef1_org.jpg'}} />
      <Text>Hello World!</Text>
      <Text style={styles.alerttext}>Red text</Text>
      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth:1}}
      onChangeText={text => setText(text)}value={text}/>
      <Button style={{width: 20}} onPress={buttonPressed} title="Press me"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
