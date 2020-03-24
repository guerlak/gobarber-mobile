import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Background from '../../components/Background';
import {Container, Title, List} from './styles.js';
import Appointment from '../../components/Appointment';
import api from '../../services/api';

export default function Dashboard() {
  const token = useSelector(state => state.auth.token);

  api.defaults.headers.Authorization = `bearer ${token}`;

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const {data} = await api.get('/appointments');
        setAppointments(data);
      } catch (e) {
        console.tron.log(e.message);
      }
    }
    loadAppointments();
  });

  return (
    <Background>
      <Container>
        <Title>Dashboard</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}
