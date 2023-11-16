import React  from 'react';
import {View ,Text, Image ,TouchableOpacity } from 'react-native';
import { styles } from './styles';

import limitesicon from '../assets/meuslimites-removebg-preview.png';
import boletosicon from '../assets/meusboletosicon-removebg-preview.png';
import trazericon from '../assets/trazericon-removebg-preview.png';
import detraicon from '../assets/detrasp-removebg-preview.png';
import recargaicon from '../assets/Sem_título-removebg-preview.png';
import cobraricon from '../assets/Doc-removebg-preview.png';
// import usericon from '../../assets/usericon.png';
// import sinoicon from '../../assets/bellicon-PhotoRoom.png-PhotoRoom.png';
// import loopaicon from '../../assets/loopaicon-PhotoRoom.png-PhotoRoom.png';

export default function BottonApp() {

    return(
        <View>
            <View style={styles.viewroow}>
                <TouchableOpacity style={styles.touchableOpacity} >
                    <View style={styles.top}>
                        <Text style={styles.viewtextmid}>novo</Text>
                        <Image source={limitesicon} style={styles.flatimage} />
                        <Text style={styles.flattext}>meus limites</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <View style={styles.top}>
                        <Image source={boletosicon} style={styles.flatimage2} />
                        <Text style={styles.flattext}>meus boletos DDA</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.viewroow} >
                <TouchableOpacity style={styles.touchableOpacity}>
                    <View style={styles.top}>
                        <Text style={styles.viewtextmid}>novo</Text>
                        <Image source={trazericon} style={styles.flatimage} />
                        <Text style={styles.flattext}>trazer dinheiro</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <View style={styles.top}>
                        <Image source={detraicon} style={styles.flatimage2} />
                        <Text style={styles.flattext}>detra.sp</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.viewroow}>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <View style={styles.top}>
                        <Image source={recargaicon} style={styles.flatimage2} />
                        <Text style={styles.flattext}>recarregar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <View style={styles.top}>
                        <Image source={cobraricon} style={styles.flatimage2} />
                        <Text style={styles.flattext}>cobrar alguém</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}