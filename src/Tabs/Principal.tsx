import { VStack, Text, Divider } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Botao, BotaoVermelho } from '../componentes/Botao';

type RootStackParamList = {
    Login: undefined;
    Perfil: undefined;
  };
  
  type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'Principal'>;

  const Perfil: React.FC<PrincipalProps> = ({ navigation }) => {
  
    return (
      <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
            <Botao onPress={() => navigation.navigate()}>Acesso ao site</Botao>
            <Botao onPress={() => navigation.navigate()}>Últimas consultas</Botao>
            <Botao onPress={() => navigation.navigate()}>Solicitação</Botao>
        </VStack>
    );
  };

  export default Principal;
