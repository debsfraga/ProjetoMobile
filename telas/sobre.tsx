import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

//Componente de Texto Padrão
import TextoPadrao from '../componentes/TextoPadrao';

export default function Sobre() {

  //Configuração do vídeo
const player = useVideoPlayer(require('../assets/video_livro.mp4'), (player) => {player.loop = true; player.play()});

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="inverted" />
      <Image source={require('../assets/logo2.png')} style={styles.logo} /*faz com que a imagem caiba exatamente no espço determinado*/ resizeMode='contain' />
      <TextoPadrao estiloEspecifico={styles.texto}>
        Muito mais que uma lista de livros: aqui, cada história ganha seu espaço.{'\n'}
        {'\n'}
        Organize suas leituras, salve seus favoritos e acompanhe sua jornada literária do seu jeito. Descubra novos títulos, relembre histórias marcantes e transforme cada leitura em um momento especial.{'\n'}
        {'\n'}
        Sua estante, suas escolhas, sua história.{'\n'}
        Um espaço feito para guardar histórias,{'\n'} marcar momentos e acompanhar cada{'\n'} página da sua jornada de leitura.{'\n'}{'\n'}
      </TextoPadrao>
      <Image source={require('../assets/livro.jpg')} style={styles.img1} resizeMode='contain' />
      <VideoView player={player} style={styles.video} allowsPictureInPicture />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9cddcc',
    paddingHorizontal: 16,
  },
  texto: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  logo: {
    width: 550,
    height: 550,
    alignSelf: 'center',
  },
  img1: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    borderRadius: 50,
  },
  video: {
    width: 350,
    height: 275,
    alignSelf: 'center',
  }
});
