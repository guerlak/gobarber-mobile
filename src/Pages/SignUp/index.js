import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';
import {useDispatch} from 'react-redux';
import {signUpRequest} from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitBtn,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

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
            value={name}
            onChangeText={setName}
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
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
          />

          <SubmitBtn onPress={handleSubmit}>Cadastrar</SubmitBtn>
        </Form>
        <SignUpLink onPress={() => navigation.navigate('SignIn')}>
          <SignUpLinkText>Já tenho uma conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
