import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(0);

  //Função para gerar numero aleatórios
  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 100);
    setNumero(novo_numero);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{numero}</Text>
      <TouchableOpacity style={styles.botao} onPress={handleNumero}>
        <Text>Gerar Número Aleatório</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Pega o espaço total disponível da tela
    backgroundColor: '#25d366', //Cor de fundo
    alignItems: 'center', //Centraliza na vertical
    justifyContent: 'center', //Centraliza na horizontal
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  botao: {
    backgroundColor: '#34b7f1',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
});
