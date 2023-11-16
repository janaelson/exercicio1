import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerA: {
        backgroundColor: '#ABA9A855',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
    container: {
        flex:1,
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
        backgroundColor: '##edece8',
        marginLeft: 16,
        marginTop: 12,
        paddingTop: 4,
        width: 36,
        height: 36,
        color: '#f68a0e',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: '#dbdad8',
    },
    textonome:{
        color: '#f68a0e',
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
    imgceta:{
        width: 60,
        height: 55,
        marginTop: 5,
        marginLeft: 130
    },
    textentrar: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: '400',
        textAlign : 'center',
        marginTop: 20,
        
    },
    viewbox: {
        flexDirection: 'row',
        width: 235,
        height: 35,
        marginTop: 20,
        marginLeft: 57,
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
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
        color: '#f68a0e',
        fontSize: 17,
        fontWeight: '400'

    },
    bottonmenu:{
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between',

    },
    buttonmenu:{
        width:85,
        justifyContent: 'center',
        alignItems: 'center',
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
        height: 30,
        width:42,
    },
    pixtext:{
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 16,
    }
});