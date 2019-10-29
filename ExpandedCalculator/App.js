import React, {useState} from 'react';
import {  StyleSheet, Text, TextInput, View, Button, Alert, FlatList  } from 'react-native';

export default function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [text, setText] = useState('');
  const [data, setData] = useState([])
  
  const PlusButton = () => {
    setResult(Number(input1) + Number(input2));
    setData([...data, {key: text}]);
    setText('');
  };

  const MinusButton = () => {
    setResult(Number(input1) - Number(input2));
    setData([...data, {key: text}]);
    setText('');
  };
  
  

  return (
    <View style={styles.container}>
        <Text>Result: {result}</Text>
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          value={input1}
          onChangeText={input1 => setInput1(input1)} />
          
       
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          value={input2}
          onChangeText={input2 => setInput2(input2)} />
          <FlatList
data={data}
renderItem={({item}) =>
<Text>{item.key}</Text>}
/>
       
        <View style={styles.grid}>
          <Button onPress={PlusButton} title="+"  />
          <Button onPress={MinusButton} title="-"  />
        </View>
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
   grid: {
    alignItems: "center",
    flexDirection: "row"
  }
});