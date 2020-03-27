import React, {useMemo} from 'react';
import Background from '../../../components/Background';
import {TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../../services/api';

import {Container, Avatar, Name, Time, SubmitBtn, TextBtn} from './styles';
function Confirm({route, navigation}) {
  console.tron.log(route);

  const {time, provider} = route.params;

  const formatedDate = useMemo(
    () => formatRelative(parseISO(time), new Date(), {locale: pt}),
    [time],
  );

  async function handleSubmit() {
    try {
      await api.post('appointments', {
        provider_id: provider.id,
        date: time,
      });

      Alert.alert(
        'Tudo certo',
        'Seu agendamento está feito',
        [{text: 'OK', onPress: () => navigation.navigate('Dashboard')}],
        {cancelable: false},
      );
    } catch (e) {
      Alert.alert('Oh não', 'Algo errado, tente de novo.');
    }
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/106/abott@adorable.png',
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{formatedDate}</Time>

        <SubmitBtn onPress={handleSubmit}>
          <TextBtn>Confirmar</TextBtn>
        </SubmitBtn>
      </Container>
    </Background>
  );
}

export default Confirm;

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={24} color="#fff" />
    </TouchableOpacity>
  ),
});
