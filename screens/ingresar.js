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
    KeyboardAvoidingView,
    TextInput
} from "react-native";
import firebase from "firebase"
export default class IngresarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }
  handleLogin = (email, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {this.props.navigation.navigate("Home")})
  }
  render() {
    const{email, password} = this.state;

  return(
     <KeyboardAvoidingView behavior = "padding" style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/fondo2.jpeg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Basquetbol</Text>
                    </View>
                    <View style = {styles.lowerContainer}>
                  
                    <TextInput style = {styles.textInput}
                    placeholder = {"email"}
                    placeholderTextColor = {"#FF00E0"}
                    
                    onChangeText = {text => this.setState({email: text})}autoFocus/>
                    <TextInput style = {styles.textInput}
                    placeholder = {"password"}
                    placeholderTextColor = {"#FF00E0"}
                    
                    onChangeText = {text => this.setState({password: text})}securedTextEntry/>
                    <TouchableOpacity style = {styles.button}
                    onPress = {() => this.props.navigation.navigate("Home")}>
                    <Text style = {styles.buttonText}>ingresar</Text>
                    </TouchableOpacity>
                  </View>
                    
                    </ImageBackground>

                   </KeyboardAvoidingView>

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
    
    button: {
      backgroundColor: "lightblue",
       height: 40,
       width: 100,
        marginLeft: 100,
      
      marginTop: 150,
      
      borderRadius: 30

    },
    buttonText: {
       fontSize: 20,
       color: "black",
       marginLeft: 15,
       marginTop: 3,
       
       fontFamily: "cursive"

    },
    lowerContainer: {
      flex: 0.3,
      allignItems: "center",

    },
    textInput: {
      width: "70%",
      height: 50,
      padding: 10,
      borderColor: "red",
      borderWidth: 4,
      borderRadius: 12,
      marginTop: 25,
      marginLeft: 50,
      color: "#FF00E0"

    }

   
});






















