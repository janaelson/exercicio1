import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bgImage:{
        position: "relative",
        flex: 1,
     },
    container: {
        flex:1,
        backgroundColor: '#ec7000',
        paddingTop: 0,
        
        
    },
    mainContent: {
        flex: 1,
      },
    buttontop: {
        backgroundColor: '#FFFFFF',
        height: 85,
        paddingTop: 20,
        
        flexDirection: 'row'

    },
    texticon:{
        backgroundColor: '#D2D7DD',
        marginLeft: 10,
        marginTop: 10,
        width: 40,
        height: 40,
        color: '#ec7000',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    textonome:{
        color: '#ec7000',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'justify',
        justifyContent: 'center',
        marginLeft: 15,
        marginTop: 9,
    },
    textinfo: {

        color: '#686866',
        fontSize: 15,
        marginLeft: 15,
        textAlign: 'justify',
        justifyContent: 'center',
        
    },
    textentrar: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign : 'center',
        marginTop: 20,
        
    },
    viewbox: {
        // backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        // justifyContent:'center',
        width: 235,
        height: 35,
        marginTop: 20,
        marginLeft: 57,
        borderBottomWidth: 2,  // Adiciona uma borda de largura 2
        borderBottomColor: '#FFFFFF',  // Adiciona uma borda de cor 
    },
    acessarbutton:{
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        height: 49,
        marginTop: 15,
        marginLeft: 40,
        borderRadius: 5,
    },
    acessartext:{
        color: '#ec7000',
        fontSize: 17,
        fontWeight: '400'

    },
    bottonmenu:{
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 45,
        justifyContent: 'space-between',
    },
    buttonmenu:{
        width:85,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagbox:{
        height: 20,
        width: 19,   
    },
    textimput:{
        fontWeight: '300',
        fontSize: 20,
        marginLeft:10 ,
        marginBottom: 12,
        color: '#FFFFFF',
        width: 220
    },
    pixbox:{
        height: 30,
        width:30,
    },
    pixitoken:{
        height: 25,
        width:42,
    },
    pixtext:{
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});