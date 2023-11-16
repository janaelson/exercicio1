import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from "./styles";

import Cadeado from "./src/assets/images-removebg-preview.png";
import pix from "./src/assets/pix_icon-removebg-preview.png"
import token from "./src/assets/itokenicons-removebg-preview.png"
import ajuda from "./src/assets/ajuda-removebg-preview.png"
import ceta from "./src/assets/cetaimg-PhotoRoom.png-PhotoRoom.png"


export default function App() {
   return (
    <LinearGradient
      colors={['#f68a0e', '#f09511', '#e5a722']}
      style={{ flex: 1 }}
    >
      {/* <ImageBackground source={BgImage} style={styles.bgImage} imageStyle={{ position: "absolute", left: 0 }}> */}
      
      <View style={styles.container} >
        <TouchableOpacity style={styles.buttontop} activeOpacity={1}>
          <View style={styles.containerA} ></View>
          <Text style={styles.texticon}>JN</Text>
          <View>
            <Text style={styles.textonome}> Olá,Janaelson</Text>
            <Text style={styles.textinfo} > ag...  /con...</Text>
          </View>
          <Image source={ceta} style={styles.imgceta}/>
        </TouchableOpacity>
        <View style={styles.mainContent}>
          <Text style={styles.textentrar}> senha de acesso</Text>
          <View style={styles.viewbox}>
            <Image style={styles.imagbox} source={Cadeado} />
            <TextInput maxLength={8} secureTextEntry keyboardType="numeric" style={styles.textimput}/>
          </View>
          <TouchableOpacity style={styles.acessarbutton} activeOpacity={0.8}>
            <Text style={styles.acessartext}>acessar</Text>
          </TouchableOpacity>
        </View>  
        <View style={styles.bottonmenu}>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonmenu} >
              <Image source={pix} style={styles.pixbox}/>
              <Text style={styles.pixtext} > Pix</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonmenu} >
              <Image source={token} style={styles.pixitoken}/>
              <Text style={styles.pixtext} > iToken</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonmenu} >
              <Image source={ajuda} style={styles.pixbox}/>
              <Text style={styles.pixtext} > Ajuda</Text>
            </TouchableOpacity>
        </View>
      </View>
      {/* </ImageBackground> */}
    </LinearGradient>
   );
}