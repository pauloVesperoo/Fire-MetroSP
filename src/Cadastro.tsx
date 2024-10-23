import { VStack, Image, Box } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <VStack flex={1} alignItems='center' justifyContent='center' p={5}>
      <Image source={Logo} alt='Logo Voll' alignSelf='center' />
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box>
        {secoes[numSecao]?.entradaTexto?.map(entrada => (
          <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
        ))}
      </Box>
      {numSecao > 0 && (
        <Botao onPress={voltarSecao} bg='gray.400'>
          Voltar
        </Botao>
      )}
      <Botao onPress={avancarSecao} mt={4} mb={15}>
        Cadastrar
      </Botao>
    </VStack>
  );
}
