import React from 'react';
import {Image} from 'react-native';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitBtn,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Senha secreta"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha secreta"
          />

          <SubmitBtn onPress={() => {}}>Entrar</SubmitBtn>
        </Form>
        <SignUpLink>
          <SignUpLinkText>Criar conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
