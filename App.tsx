import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello World! No APP</Text>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1fd1d16b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 32,
    fontFamily: 'cursive',
  }
});
