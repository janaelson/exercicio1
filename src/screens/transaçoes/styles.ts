import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
container: {
    flex : 1,   
},
scrollContainer: {
    paddingTop: 90, 
},
header: {
    backgroundColor: '#3498db',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
},
headerbutton:{
    backgroundColor: '#ec7000',
    height: 90,
    position: 'absolute',
    zIndex: -100,
    top: 0,
    left: 0,
    right: 0,
},
headerview:{
    flexDirection: 'row',
    justifyContent: 'space-between',

},
headerview2:{
    flexDirection: 'row',
},
headerimg:{
    borderRadius: 100,
    height: 40,
    width: 40,
    marginTop: 32,
    marginLeft: 18,
},
headerimgloopa:{
    height: 28,
    width: 28,
    marginTop: 40,
    marginLeft: 18,
},
headerimgsino:{
    tintColor: '#fff',
    height: 50,
    width: 50,
    marginTop: 28,
    marginLeft: 18,
},
headertext:{
    fontSize: 20,
    marginTop: 44,
    marginLeft: 16,
    color: '#fff',
},
viewflat: {
    marginTop: 20,
    marginBottom: 5,
},
containerflat: {
    padding: 1,
    margin: 5,

},
top: {
    width: 159,
    height: 95,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
touchableOpacity:{
    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
},
flattext: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 15,
    marginRight: 10,
},
flatimage: {
    tintColor: '#ec7000',
    width: 50,
    height: 50,
    marginLeft: 7,
    marginBottom: -10
},
flatimage2: {
    tintColor: '#ec7000',
    width: 30,
    height: 30,
    marginLeft: 15,
},
viewbuttommid: {
    alignItems: 'center',
    marginTop: 10,
},
buttommid: {
    width: 335,
    height: 105,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
viewtextmid: {
    color: 'white',
    backgroundColor: '#0a5e9a',
    justifyContent: 'center',
    textAlign: "right",
    marginLeft: 270,
    marginRight: 15,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    padding: 3,
    paddingRight: 9,
    borderRadius: 20,   
},
viewtextmid2: {
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 10,  
},
viewtextmid3: {
    marginBottom: -8,
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 10,  
},
viewflat2: {
    marginTop: 8,
    marginBottom: 1,
},
imgbotton: {
    width: 335,
    height: 350,
    marginBottom: 15,
    borderRadius:6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,    
}
})