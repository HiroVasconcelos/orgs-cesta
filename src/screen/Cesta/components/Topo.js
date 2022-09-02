import React from "react";
import { Image } from "react-native";

import Texto from "../../../components/Texto";
import topo from "../../../../assets/topo.png"
import CestaStyles from "../../../styles/CestaStyle"

export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={CestaStyles.topo} />
        <Texto style={CestaStyles.titulo} >{ titulo }</Texto>
    </>
}