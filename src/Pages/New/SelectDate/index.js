import React, {useState} from 'react';
import DateInput from '../../../components/DateInput/index.js';
import Background from '../../../components/Background';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

export default function SelectDate() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

SelectDate.navigationOptions = ({navigation}) => ({
  title: 'Selecione o dia',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={24} color="#fff" />
    </TouchableOpacity>
  ),
});
