import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    ListItem
} from "react-native";
export default class Reglas1Screen extends Component {
  render() {

  return(
     <View style={styles.container}>
     
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/fondo.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Reglas</Text>
                    </View>
                    <TouchableOpacity style = {styles.button}
                    onPress = {() => this.props.navigation.navigate ("Reglas")}>
                    <Text style = {styles.buttonText}>atras</Text>
                    </TouchableOpacity>
                    <View>
                    <Text style = {styles.reglas}> 6º el arbitro puede descalificar a los jugadores segun la regla 5</Text>
                    <Text style = {styles.reglas}> 7º El juego se divide en dos mitades de quince minutos, con un descanso de 5 minutos entre cada una.</Text>
                    <Text style = {styles.reglas}> 8º El equipo que obtenga más puntos dentro de 40min será considerado ganador.</Text>
                    <Text style = {styles.reglas}> 9º Si el balón se golpea con el puño se considera como falta.</Text>
                    <Text style = {styles.reglas}> 10º Se contará como canasta cuando el balón sea lanzado o golpeado desde el suelo hasta la cesta y se quede en ella.</Text>
                    </View> 
                    
                    </ImageBackground>
                   
            </View>

  )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        height: 1000,
        width: 400
    },
   
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
        
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        fontFamily: "cursive",
        marginTop: 35,
        
    },
    reglas: {
      fontWeight: "bold",
      color: "#A16E00" ,
      fontSize: 25,
      marginTop: 50,
      marginLeft: 5
    },
    button: {
      backgroundColor: "white",
       height: 35,
       width: 50,
        marginLeft: 5,
      marginRight: 50,
      marginTop: 10,
      
      borderRadius: 30

    },
    buttonText: {
       fontSize: 20,
       color: "black",
       marginLeft: 5,
       
       fontFamily: "cursive"

    }

   
});