import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import eu from './assets/eu.jpg';
import Card from './components/Card';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/rapha-rb');
        break;
      case 'facebook':
        Alert.alert('https://github.com/rapha-rb');
        break;
      case 'linkedin':
        Alert.alert(
          'Meu LinkeIn',
          'https://www.linkedin.com/in/raphaelabarros01/',
        );
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={eu} style={style.eu} />
          <Text style={style.nome}>RAPHAELA BARROS</Text>
          <Text style={style.funcao}>Desenvolvedora Frontend</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Objetivo">
          <Text style={style.card_content_text}>Estágio profissional</Text>
        </Card>
        <Card titulo="Formação acadêmica">
          <Text style={style.card_content_text}>
            Análise e desenvolvimento de sistemas - Estácio
          </Text>
          <Text style={style.card_content_text}>Web developer - DIO</Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  eu: {
    borderRadius: 50,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
