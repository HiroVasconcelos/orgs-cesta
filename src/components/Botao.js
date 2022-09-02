import React from "react";
import { TouchableOpacity } from "react-native";

import BotaoStyles from "../styles/BotaoStyle";

import Texto from "./Texto";

export default function Botao({ children }) {
    return <TouchableOpacity style={BotaoStyles.botao}><Texto style={BotaoStyles.textoBotao}>{ children }</Texto></TouchableOpacity>
}