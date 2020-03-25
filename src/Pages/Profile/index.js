import React, {useRef, useState} from 'react';

import Background from '../../components/Background';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfileRequest} from '../../store/modules/user/actions';
import {logout} from '../../store/modules/auth/actions';
import {
  Container,
  Form,
  FormInput,
  Separator,
  Avatar,
  LogoutBtn,
  SubmitBtn,
  LogoutText,
  SubmitText,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [name, setName] = useState(user.profile.name);
  const [email, setEmail] = useState(user.profile.email);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSubmit() {
    console.log('submit');
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );
  }
  function handleLogout() {
    console.log('out');
    dispatch(logout());
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/106/abott@adorable.png',
          }}
        />
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
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            returnKeyType="next"
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            value={oldPassword}
            onChangeText={setOldPassword}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Nova senha"
            ref={passwordRef}
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme a nova secreta"
            ref={confirmPasswordRef}
            returnKeyType="send"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <SubmitBtn onPress={handleSubmit}>
            <SubmitText>Atualizar</SubmitText>
          </SubmitBtn>

          <LogoutBtn onPress={handleLogout}>
            <LogoutText>Sair</LogoutText>
          </LogoutBtn>
        </Form>
      </Container>
    </Background>
  );
}
