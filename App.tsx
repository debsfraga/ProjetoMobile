import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Image source={require('./assets/logo2.png')} style={styles.logo} /*faz com que a imagem caiba exatamente no espço determinado*/ resizeMode='contain'/>
      <Text>
          {/* adicionar textinho dps */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4eccab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 550,
    height: 550,
  }
});
