// import { VStack, Text, Divider } from 'native-base'
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { Botao, BotaoVermelho } from '../componentes/Botao';

// type RootStackParamList = {
//     Login: undefined;
//     Perfil: undefined;
//   };
  
//   type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'Principal'>;

//   const Perfil: React.FC<PrincipalProps> = ({ navigation }) => {
  
//     return (
//       <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
//             <Botao onPress={() => navigation.navigate()}>Acesso ao site</Botao>
//             <Botao onPress={() => navigation.navigate()}>Últimas consultas</Botao>
//             <Botao onPress={() => navigation.navigate()}>Solicitação</Botao>
//         </VStack>
//     );
//   };

//   export default Principal;


import React from 'react';
import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Titulo } from '../componentes/Titulo';
import { Botao } from '../componentes/Botao';
import { BotaoVermelho } from '../componentes/Botao';

type RootStackParamList = {
  Login: undefined;
  Perfil: undefined;
};

type PerfilProps = NativeStackScreenProps<RootStackParamList, 'Perfil'>;

const Perfil: React.FC<PerfilProps> = ({ navigation }) => {
  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Titulo color="blue.500">Meu perfil</Titulo>
      <Avatar size="xl" source={{ uri: "https://github.com/pauloVesperoo.png" }} mt={5} />
      <Titulo color="blue.500">Informações pessoais</Titulo>
      <Titulo fontSize="lg" mb={1}>Paulo Vespero</Titulo>
      <Text>30/06/2004</Text>
      <Text>São Caetano do Sul</Text>
      
      <Divider my={5} />
      <BotaoVermelho onPress={handleLogout}>Logout</BotaoVermelho>
      </VStack>
  );
};

export default Perfil;
