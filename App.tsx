import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Image source={require('./assets/picapau.jpg')} style={styles.logo} /*faz com que a imagem caiba exatamente no espço determinado*/ resizeMode='contain'/>
      <Text>Pica-Pau é um personagem da série estadunidense {'\n'}de mesmo nome, um pica-pau antropomórfico, que {'\n'}estrelou vários curta-metragens de animação produzidos{'\n'} pelo estúdio de Walter Lantz e distribuídos pela{'\n'} Universal Pictures.</Text>
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
  logo: {
    width: 250,
    height: 250,
  }
});
