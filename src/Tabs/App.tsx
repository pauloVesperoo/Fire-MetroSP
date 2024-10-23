<<<<<<< HEAD:src/Tabs/App.tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import Cadastro from './src/Cadastro';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your</Text>
      <StatusBar style="auto" />
    </View>
=======
import Cadastro from './src/Cadastro';
import Login from './src/Login';

import {NativeBaseProvider, StatusBar} from 'native-base'

import { TEMAS } from './src/estilos/temas'; 
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      {/* <StatusBar backgroundColor={TEMAS.colors.blue[800]}></StatusBar> */}
        <Rotas/>
    </NativeBaseProvider>
>>>>>>> 7378c226f698def138f4b278ba69600b3936bb02:App.tsx
  );
}