import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
import Background from '../../components/Background';
import {Container, Title, List} from './styles.js';
import Appointment from '../../components/Appointment';
import api from '../../services/api';

export default function Dashboard() {
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
        Alert('verifique interet');
      }
      console.log(e.message);
    }
  }

  useEffect(() => {
    async function loadAppointments() {
      try {
        const {data} = await api.get('appointments');
        setAppointments(data);
      } catch (e) {
        console.tron.log(e.message);
      }
    }
    loadAppointments();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Dashboard</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}
