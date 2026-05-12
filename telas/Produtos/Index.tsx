import { FlatList, View } from "react-native";
<<<<<<< HEAD
import styles from "./EstilosProduto";
=======
>>>>>>> f0a22a510dad3f76215f6f6b06d5cf9ecb8c5c36

import TextoPadrao from "../../componentes/TextoPadrao";
import CadaProduto from "../Produtos/Produto"

export default function Index({itens}:any) {
<<<<<<< HEAD
   return <View  style={styles.corFundo}>
            <TextoPadrao style={styles.titulo}>{itens.titulo}
            </TextoPadrao>
        
=======
    return <View>
        <TextoPadrao>{itens.titulo}</TextoPadrao>
>>>>>>> f0a22a510dad3f76215f6f6b06d5cf9ecb8c5c36
        <FlatList
            data={itens.lista}
            renderItem={({item})=> <CadaProduto item={item} />}
            keyExtractor={itens.lista.id} /*como se fosse um laço de repetição*/
        />

    </View>
}