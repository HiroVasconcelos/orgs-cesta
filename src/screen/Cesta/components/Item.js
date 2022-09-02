import React from "react";
import { View, Image } from "react-native";

import Texto from "../../../components/Texto";

import CestaStyles from "../../../styles/CestaStyle";

export default function Item({item: { nome, imagem }}) { 
    return <View style={CestaStyles.item} >
        <Image source={imagem} style={CestaStyles.imagem} />
        <Texto style={CestaStyles.itemNome} >{nome}</Texto>
    </View>
}