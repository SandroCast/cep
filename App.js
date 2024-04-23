import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import { styles } from "./style.js";
import { useState } from 'react';

function App() {

  const [cep, setCep] = useState("");

  function ConsultarCep(){
    console.log(cep);
  }

  return <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.titulo}>Consulta CEP</Text>

    <View style={styles.form}>
      <TextInput placeholder="Digite o cep..." style={styles.TextInput} 
      onChangeText={texto => setCep(texto)}/>
      <Button title="Consulta" onPress={ConsultarCep}/>
    </View>

    <View style={styles.form}>
      <Text>{cep}</Text>
    </View>
  </SafeAreaView>
  
}

export default App;