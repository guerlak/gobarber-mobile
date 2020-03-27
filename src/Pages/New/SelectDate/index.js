import React, {useState, useEffect} from 'react';
import DateInput from '../../../components/DateInput/index.js';
import Background from '../../../components/Background';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../services/api';

import {Container, TimeList, Time, TimeText} from './styles';

export default function SelectDate({route, navigation}) {
  const [date, setDate] = useState(new Date());
  const provider = route.params.item;
  const {id} = provider;
  const [hours, setHours] = useState([]);

  useEffect(() => {
    async function loadDate() {
      try {
        const res = await api.get(`providers/${id}/available`, {
          params: {
            date: date.getTime(),
          },
        });
        setHours(res.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    loadDate();
  }, [date, id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      time,
      provider,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <TimeList
          data={hours}
          keyExtractor={hours => hours.time}
          renderItem={({item}) => (
            <Time
              enabled={item.available}
              onPress={() => {
                handleSelectHour(item.value);
              }}>
              <TimeText>{item.time}</TimeText>
            </Time>
          )}
        />
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
