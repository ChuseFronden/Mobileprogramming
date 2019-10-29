import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const buttonPressed = () => {
    Alert.alert('Hello', 'Philip ' + text);
  }

  return (
    <View style={styles.container}>
      <TextInput
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      value={text}
      onChangeText={text => setText(text)}/>
      <Button onPress={buttonPressed} title= "Press me" />
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
