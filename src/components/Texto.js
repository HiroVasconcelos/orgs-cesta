import React from "react";
import { Text } from "react-native";

import TextoStyles from "../styles/TextoStyle";

export default function Texto({ children, style }) {
    let estilo = TextoStyles.texto;

    if (style?.fontWeight === "bold") {
        estilo = TextoStyles.textoNegrito;
    }
    
    return <Text style={[style, estilo]}>{ children }</Text>
}