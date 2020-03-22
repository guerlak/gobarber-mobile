import React from 'react';
import {Text} from 'react-native';
import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>
      <Input
        style={{marginTop: 10}}
        placeholder="Digite seu nome"
        icon="call"
      />
      <Button style={{width: 100}}>Guerlak</Button>
    </Background>
  );
}
