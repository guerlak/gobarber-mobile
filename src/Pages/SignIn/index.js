import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';
import {useDispatch} from 'react-redux';
import {signInRequest} from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitBtn,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

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
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitBtn onPress={handleSubmit}>Entrar</SubmitBtn>
        </Form>
        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpLinkText>Criar conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
