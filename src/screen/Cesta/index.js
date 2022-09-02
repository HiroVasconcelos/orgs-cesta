import React from "react";
import { View, FlatList } from "react-native";

import CestaStyles from "../../styles/CestaStyle"

import Texto from "../../components/Texto";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data = {itens.lista}
            renderItem = {Item}
            keyExtractor = {({ nome }) => { nome }}
            ListHeaderComponent = {() => {
                return (
                    <>
                        <Topo {...topo} />
                        <View style={CestaStyles.cesta}>
                            <Detalhes {...detalhes} />
                            <Texto style={CestaStyles.itemTitulo}>{ itens.titulo }</Texto>
                        </View> 
                    </>
                )
            }}
        />
    </>
}