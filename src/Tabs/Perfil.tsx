import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil(){
    return(
        <VStack flex={1} alignItems='center' justifyContent='center' p={5}>
            <Titulo color={'blue.500'}>Meu perfil</Titulo>
            <Avatar size='xl' source={{uri: "https://github.com/pauloVesperoo.png"}} mt={5}/>
            <Titulo color={'blue.500'}>Informações pessoais</Titulo>
            <Titulo fontSize="lg" mb={1}>Paulo Vespero</Titulo>
            <Text>30/06/2004</Text>
            <Text>São Caetano do Sul</Text>
        </VStack>
    )
}