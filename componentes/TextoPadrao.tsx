import { Text, StyleSheet } from "react-native";

export default function TextoPadrao({children, estiloEspecifico}: any) {
    return <Text style={[estilos.padrao, estiloEspecifico]}>{children}</Text>
}

const estilos = StyleSheet.create({
  padrao: {
    fontFamily : 'MontserratAlternates',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 20,
  }
});