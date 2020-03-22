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

export default function SignUp({navigation}) {
  function handleSubmit() {}

  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu email"
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyType="next"
            ref={emailRef}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha secreta"
            ref={passwordRef}
            returnKeyType="send"
          />

          <SubmitBtn
            onPress={() => {
              handleSubmit;
            }}>
            Cadastrar
          </SubmitBtn>
        </Form>
        <SignUpLink onPress={() => navigation.navigate('SignIn')}>
          <SignUpLinkText>Já tenho uma conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
