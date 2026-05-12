import { Card } from "react-native-paper";
<<<<<<< HEAD
import styles from "./EstilosProduto";
=======
>>>>>>> f0a22a510dad3f76215f6f6b06d5cf9ecb8c5c36

import TextoPadrao from "../../componentes/TextoPadrao";

export default function Produto({item:{id,nome,descricao,imagem}}:any) {
<<<<<<< HEAD
    return <Card mode="elevated" style={styles.card}>
                <Card.Content>
                    <TextoPadrao style={styles.nomeProduto}>{nome}</TextoPadrao>
                    <TextoPadrao style={styles.descProduto}>{descricao}</TextoPadrao>
                </Card.Content>
        <Card.Cover  source={imagem} style={styles.imagemModal} ></Card.Cover>     
        </Card>       
=======
    return <Card mode="elevated">
                <Card.Content>
                    <TextoPadrao>{nome}</TextoPadrao>
                    <TextoPadrao>{descricao}</TextoPadrao>
                </Card.Content>
                <Card.Cover source={imagem}></Card.Cover>
            
    </Card>
>>>>>>> f0a22a510dad3f76215f6f6b06d5cf9ecb8c5c36
}