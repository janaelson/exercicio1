import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import BgImage from "./assets/Screenshot_8.jpg";
import Cadeado from "./assets/images-removebg-preview.png";
import pix from "./assets/pix_icon-removebg-preview.png"
import token from "./assets/itokenicons-removebg-preview.png"
import ajuda from "./assets/ajuda-removebg-preview.png"


export default function App() {
   return (
    <ImageBackground source={BgImage} style={styles.bgImage} imageStyle={{ position: "absolute", left: 0 }}>

    <View style={styles.container} >
      <TouchableOpacity style={styles.buttontop}>
        <Text style={styles.texticon}>..</Text>
        <View>
          <Text style={styles.textonome}> Olá,Janaelson</Text>
          <Text style={styles.textinfo} > ag...  /con...</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.mainContent}>
        <Text style={styles.textentrar}> senha de acesso</Text>
        <View style={styles.viewbox}>
          <Image style={styles.imagbox} source={Cadeado} />
          <TextInput maxLength={8} secureTextEntry keyboardType="numeric" style={styles.textimput}/>
        </View>
        <TouchableOpacity style={styles.acessarbutton}>
          <Text style={styles.acessartext}>acessar</Text>
        </TouchableOpacity>
      </View>  
      <View style={styles.bottonmenu}>
          <TouchableOpacity activeOpacity={0.1} style={styles.buttonmenu} >
            <Image source={pix} style={styles.pixbox}/>
            <Text style={styles.pixtext} > Pix</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.1} style={styles.buttonmenu} >
            <Image source={token} style={styles.pixitoken}/>
            <Text style={styles.pixtext} > iToken</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.1} style={styles.buttonmenu} >
            <Image source={ajuda} style={styles.pixbox}/>
            <Text style={styles.pixtext} > Ajuda</Text>
          </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
   );
}