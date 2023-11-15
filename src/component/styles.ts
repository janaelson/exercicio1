import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
viewroow:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
},
touchableOpacity:{
    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
flatimage: {
    tintColor: '#ec7000',
    width: 50,
    height: 50,
    marginLeft: 7,
    marginBottom: -10,
    marginTop: -10,
},
flatimage2: {
    tintColor: '#ec7000',
    width: 50,
    height: 50,
    marginLeft: 7,
    marginBottom: -5,
},
flattext: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 15,
    marginRight: 10,
},
viewtextmid: {
    color: 'white',
    backgroundColor: '#0a5e9a',
    justifyContent: 'center',
    textAlign: "right",
    marginLeft: 92,
    marginRight: 15,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    padding: 3,
    paddingRight: 9,
    borderRadius: 20,   
},
})