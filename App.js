import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View } from 'react-native';

import List from './src/components/List';
import Button from './src/components/Button';

export default function App() {

  const data = [
    { id: 1, nome: 'clayton', idade: 29, cidade: 'São José dos Campos' },
    { id: 2, nome: 'ricardo', idade: 39, cidade: 'São José dos Campos' },
    { id: 3, nome: 'josé',    idade: 50, cidade: 'São José dos Campos' },
    { id: 4, nome: 'paulo',   idade: 20, cidade: 'São José dos Campos' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList 
        data={data}
        renderItem={List}
        keyExtractor={item => item.id}
      />

      <Button title="Enviar" bg="red" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
