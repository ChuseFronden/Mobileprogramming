import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('Guess a number between 1-100');
  const [count, setCount] = useState(0);
  const randomNumber = Math.floor(Math.random() * 100) + 1;
 
  const buttonPressed = () => {
    if (Number(input) > randomNumber) {
      setResult(`Your guess ${input} is too high.`);
      setCount(count + 1);
    } else if (Number(input) < randomNumber) {
      setResult(`Your guess ${input} is too low.`);
      setCount(count + 1);
    } else {
      Alert.alert(`You guessed the number in ${count} guesses`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        value={input} 
        onChangeText={text => setInput(text)} />
        
        <Button onPress={buttonPressed} title="MAKE GUESS" />
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