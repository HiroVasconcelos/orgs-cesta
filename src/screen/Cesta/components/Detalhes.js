import React from "react";
import { View, Image } from "react-native";

import Texto from "../../../components/Texto";
import Botao from "../../../components/Botao";
import CestaStyles from "../../../styles/CestaStyle";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco }) {
    return <>
        <Texto style={CestaStyles.nome}>{ nome }</Texto>
        <View style={CestaStyles.fazenda}>
            <Image source={ logoFazenda } style={CestaStyles.logo} />
            <Texto style={CestaStyles.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={CestaStyles.descricao}>{ descricao }</Texto>
        <Texto style={CestaStyles.preco}>{ preco }</Texto>
        <Botao>
            Comprar
        </Botao>
    </>
}