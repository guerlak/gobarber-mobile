import React, {useRef} from 'react';
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

export default function SignIn({navigation}) {
  function handleSubmit() {}

  const passwordRef = useRef();
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
            placeholder="Seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitBtn onPress={() => {}}>Entrar</SubmitBtn>
        </Form>
        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpLinkText>Criar conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
