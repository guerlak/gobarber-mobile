import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Background from '../../../components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../services/api';
import Provider2 from '../../../components/Provider';
import {Container, ProvidersList, Provider, Avatar, Name} from './styles.js';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      try {
        const res = await api.get('providers');

        setProviders(res.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({item}) => (
            <Provider onPress={() => navigation.navigate('SelectDate', {item})}>
              <Avatar
                source={{
                  uri: 'https://api.adorable.io/avatars/106/abott@adorable.png',
                }}
              />
              <Name>{item.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Com quem vc quer marcar?',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={24} color="#fff" />
    </TouchableOpacity>
  ),
});
