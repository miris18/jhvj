import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import ReglasScreen from "./screens/Reglas";
import Reglas1Screen from "./screens/Reglas1";
import PosicionesScreen from "./screens/Posiciones";
import IngresarScreen from "./screens/ingresar";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ingresar" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Ingresar" component={IngresarScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reglas" component={ReglasScreen} />
        <Stack.Screen name="Reglas1" component={Reglas1Screen} />
        <Stack.Screen name="Posiciones" component={PosicionesScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;