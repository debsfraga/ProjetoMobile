import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { use } from 'react';

export default function Sobre() {

  //Configuração do vídeo
  const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player=>{ player.loop=true; player.play();});
   
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="inverted" />
      <Image source={require('../assets/logo2.png')} style={styles.logo} /*faz com que a imagem caiba exatamente no espço determinado*/ resizeMode='contain'/>
      <Text>
          Um espaço feito para guardar histórias,{'\n'} marcar momentos e acompanhar cada{'\n'} página da sua jornada de leitura.{'\n'}{'\n'}
      </Text>
      <Image source={require('../assets/livros.jpg')} style={styles.img1} resizeMode='contain'/>
      <VideoView player={player} style={styles.video} allowsPictureInPicture/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9cddcc'
  },
  logo: {
    width: 550,
    height: 550,
    alignSelf: 'center',
  },
  img1: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  video: {
    width: 350,
    height: 275,
    alignSelf: 'center',
  }
});
