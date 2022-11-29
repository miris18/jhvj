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

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/fondo.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Lo que Necesitas</Text>
                        <Text style={styles.titleText}>saber del Basquetbol</Text>
                    </View>
                    <TouchableOpacity style = {styles.reglas}

                    onPress = {() => this.props.navigation.navigate ("Reglas")}>
                    <Text style={styles.reglasText}>Reglas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.reglas}

                    onPress = {() => this.props.navigation.navigate ("Posiciones")}>
                    <Text style={styles.reglasText}>Posiciones</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
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
        marginTop: 90
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "red",
        fontFamily: "cursive",
        

    },
    reglasText: {
       
       fontSize: 35,
       color: "black",
       marginTop: 10,
       paddingLeft: 50,
       fontFamily: "cursive"

    },
    reglas: {
      flex: 0.20, 
      marginLeft: 50,
      marginRight: 50,
      marginTop: 150,
      backgroundColor: "white",
      borderRadius: 30

    }

   
});

















