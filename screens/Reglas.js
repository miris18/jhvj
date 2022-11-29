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
    Image
} from "react-native";
export default class ReglasScreen extends Component {
  render() {

  return(
     <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/fondo.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Reglas</Text>
                    </View>
                    <TouchableOpacity style = {styles.button}
                    onPress = {() => this.props.navigation.navigate ("Home")}>
                    <Text style = {styles.buttonText}>atras</Text>
                    </TouchableOpacity>
                    <View>
                    <Text style = {styles.reglas}> 1º no puedes dejar de botar el balón y caminar</Text>
                    <Text style = {styles.reglas}> 2º no puedes estar más de 3 segundos dentro del area</Text>
                    <Text style = {styles.reglas}> 3º el balón puede lanzarse en cualquier dirección, no importa si es con una o dos manos.</Text>
                    <Text style = {styles.reglas}> 4º el balón se sostiene con las manos, no con los brazos, ni con alguna otra parte del cuerpo.</Text>
                    <Text style = {styles.reglas}> 5º Con tres faltas consecutivas de cualquier equipo, se cuenta una canasta a favor del rival.</Text>
                    
                    </View> 
                    <TouchableOpacity style = {styles.button1}
                    onPress = {() => this.props.navigation.navigate ("Reglas1")}>
                    <Text style = {styles.button1Text}>siguiente</Text>
                    </TouchableOpacity>
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
        marginTop: 35
        
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

    },
    button1: {
      backgroundColor: "white",
       height: 35,
       width: 70,
        marginLeft: 220,
        marginTop: 30,
      
      borderRadius: 30

    },
    button1Text: {
       fontSize: 15,
       color: "black",
       marginLeft: 5,
       
       fontFamily: "cursive"

    },

   
});











