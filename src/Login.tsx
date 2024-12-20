import React from 'react';
import { VStack, Image, Text, Box, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from '../assets/Metro_logo.png';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Tabs: undefined;
};

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <VStack flex={1} alignItems='center' justifyContent='center' p={5}>
      <Image source={Logo} alt='Logo Metro' alignSelf='center' width={500} height={150} resizeMode='contain'/>
      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <EntradaTexto label='Email' placeholder='Insira seu endereço de e-mail' />
        <EntradaTexto label='Senha' placeholder='Insira sua senha' secureTextEntry={true} />
      </Box>
      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>
      <Link href='' mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color='blue.500' ml={1}>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

export default Login;
