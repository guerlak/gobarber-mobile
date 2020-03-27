import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
import Background from '../../components/Background';
import {Container, Title, List} from './styles.js';
import Appointment from '../../components/Appointment';
import api from '../../services/api';
import {useIsFocused} from '@react-navigation/native';

function Dashboard() {
  const isFocused = useIsFocused();
  const [appointments, setAppointments] = useState([]);
  const token = useSelector(state => state.auth.token);

  api.defaults.headers.Authorization = `bearer ${token}`;

  async function handleCancel(id) {
    try {
      const res = await api.delete(`appointments/${id}`);
      setAppointments(
        appointments.map(a => {
          return a.id === id
            ? {
                ...a,
                canceled_at: res.data.canceled_at,
              }
            : a;
        }),
      );
    } catch (e) {
      if (e.message === 'Network Error') {
        Alert.alert('Ocorreu um erro', 'Verifique internet');
      }
      console.log(e.message);
    }
  }

  useEffect(() => {
    async function loadAppointments() {
      try {
        const {data} = await api.get('appointments');
        console.tron.log(data);
        setAppointments(data);
      } catch (e) {
        console.tron.log(e.message);
      }
    }
    loadAppointments();
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <Title>Seus agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) =>
            item.cancelable && (
              <Appointment data={item} onCancel={() => handleCancel(item.id)} />
            )
          }
        />
      </Container>
    </Background>
  );
}

export default Dashboard;
