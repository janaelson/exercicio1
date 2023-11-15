import React ,{ useRef , useState} from 'react';
import {View ,Text, Image, FlatList ,TouchableOpacity , ScrollView, Animated} from 'react-native';
import { styles } from './styles';
import BottonApp from '../../component';

import cdbarras from '../../assets/codBarra-removebg-preview.png';
import fazert from '../../assets/fazericon-removebg-preview.png';
import debtoicon from '../../assets/debitoicon-removebg-preview.png';
import pixicon from '../../assets/pix-520x520.png';
import calendicon from '../../assets/calendar-icon.png';
import limitesicon from '../../assets/meuslimites-removebg-preview.png';
import boletosicon from '../../assets/meusboletosicon-removebg-preview.png';
import trazericon from '../../assets/trazericon-removebg-preview.png';
import detraicon from '../../assets/detrasp-removebg-preview.png';
import recargaicon from '../../assets/Sem_título-removebg-preview.png';
import cobraricon from '../../assets/Doc-removebg-preview.png';
import usericon from '../../assets/usericon.png'
import sinoicon from '../../assets/bellicon-PhotoRoom.png-PhotoRoom.png'
import loopaicon from '../../assets/loopaicon-PhotoRoom.png-PhotoRoom.png'

import imgbotton from '../../assets/imagBotton.jpeg'


interface opcoes {
    name: string;
    novo: string;
    image: any;
}

export default function Transacoes() {
    const scrollY = useRef(new Animated.Value(0)).current;

    const headerHeight = 0; // Altura do cabeçalho

    const translateY = scrollY.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [0, -headerHeight],
        extrapolate: 'clamp',
      });

    const [painel, setpainel] = useState<opcoes[]>([
        { name: 'pagar', novo: '', image: cdbarras },
        { name: 'fazer transferência', novo: '', image: fazert },
        { name: 'débito automático', novo: '', image: debtoicon },
        { name: 'Pix', novo: '', image: pixicon },
    ]);
    const [painelinferior, setPainelInferor] = useState<opcoes[]>([
        { name: 'meus limites', novo: 'novo', image: limitesicon },
        { name: 'meus boletos - DDA', novo: '', image: boletosicon },
        { name: 'trazer dinheiro', novo: 'novo', image: trazericon },
        { name: 'detran.sp', novo: '', image: detraicon },
        { name: 'recarregar', novo: '', image: recargaicon },
        { name: 'cobrar alguém', novo: '', image: cobraricon },
    ]);

    return(
        <View>

            <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
            <TouchableOpacity style={styles.headerbutton}>
                <View style={styles.headerview } >
                    <View style={styles.headerview2 } >
                        <Image source={usericon} style={styles.headerimg} />
                        <Text style={styles.headertext}>Janaelson</Text>
                    </View>
                    <View style={styles.headerview2 } >
                        <Image source={loopaicon} style={styles.headerimgloopa} />
                        <Image source={sinoicon} style={styles.headerimgsino} />
                    </View>
                </View>
            </TouchableOpacity>
            </Animated.View>
        <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        >
        <View >
            <View style={styles.viewflat}>
                <FlatList
                    data={painel}
                    keyExtractor={(item) => item.name}
                    numColumns={2}
                    columnWrapperStyle={styles.containerflat}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.touchableOpacity}>
                        <View style={styles.top}>
                            <Text style={styles.viewtextmid3}>{item.novo}</Text>
                            <Image source={item.image} style={styles.flatimage} />
                            <Text style={styles.flattext}>{item.name}</Text>
                        </View>
                        </TouchableOpacity>
                    )}
                />
            </View>    
            <View style={styles.viewbuttommid} >
                <TouchableOpacity style={styles.buttommid} >
                    <Text style={styles.viewtextmid} >novo</Text>
                    <Image source={calendicon} style={styles.flatimage2} />
                    <Text style={styles.viewtextmid2}>meus pagamentos</Text>
                </TouchableOpacity>
            </View>

            <BottonApp />
            {/* <View style={styles.viewflat2}>
                <FlatList
                        data={painelinferior}
                        keyExtractor={(item) => item.name}
                        numColumns={2}
                        columnWrapperStyle={styles.containerflat}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.touchableOpacity}>
                            <View style={styles.top}>
                                <Text style={styles.viewtextmid3}>{item.novo}</Text>
                                <Image source={item.image} style={styles.flatimage} />
                                <Text style={styles.flattext}>{item.name}</Text>
                            </View>
                            </TouchableOpacity>
                        )}
                    />
            </View> */}
            <View style={styles.viewbuttommid}>
                <TouchableOpacity>
                    <Image  source={imgbotton} style={styles.imgbotton  } />
                </TouchableOpacity>
            </View>    
        </View>
    </ScrollView> 
    </View>
    )

}