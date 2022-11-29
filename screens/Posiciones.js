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
export default class PosicionesScreen extends Component {
  render() {

  return(
     <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/fondo.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Posiciones</Text>
                    </View>
                    <TouchableOpacity style = {styles.button}
                    onPress = {() => this.props.navigation.navigate ("Home")}>
                    <Text style = {styles.buttonText}>atras</Text>
                    </TouchableOpacity>
                    <View>
                    <Text style = {styles.posiciones}>  Base </Text>
                    <Text style = {styles.posiciones}>  Escolta</Text>
                    <Text style = {styles.posiciones}>  Alero</Text>
                    <Text style = {styles.posiciones}>  Ala-Pivot</Text>
                    <Text style = {styles.posiciones}>  Pivot</Text>
                    </View> 
                    <Image source = {require('../assets/posicionesBasquet.jpeg')} style = {styles.image}/>
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
        height: 800,
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
        color: "red",
        fontFamily: "cursive",
        
    },
    posiciones: {

      color: "red",
      fontSize: 25,
      marginTop: 25,
      marginLeft: 120,
      
    },
    image: {
      position: "absolute", 
      height: 300, 
      width: 350, 
      resizeMode: "contain", 
      right: 25, 
      top: 450
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