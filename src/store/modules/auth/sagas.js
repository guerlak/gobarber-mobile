import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from '../../../services/api';
import {signInSuccess, signFailure} from './actions';
// import history from '~/services/history';
import {Alert} from 'react-native';

export function* signIn({payload}) {
  const {email, password} = payload;

  try {
    const res = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const {token, user} = res.data;

    if (user.provider !== false) {
      Alert.alert(
        'Erro no login',
        'Usuário não pode ser prestador de serviços',
      );
      return;
    }

    api.defaults.headers.Authorization = `bearer ${token}`;
    yield put(signInSuccess(token, user));

    // api.defaults.headers.Authorization = `bearer ${sessionStorage.getItem(
    //   'token',
    // )}`;
  } catch (e) {
    Alert.alert('Erro no login', 'Verifique seus dados ou a conexão');
    yield put(signFailure());
  }
  //   history.push('dashboard');
  return;
}

export function* signUp({payload}) {
  const {name, email, password} = payload;

  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
  } catch (err) {
    Alert.alert('Erro no cadastro', 'Verifique seus dados');
    yield put(signFailure());
  }
  return;
}

// export function setAuthToken() {
//   const token = sessionStorage.getItem('token');
//   if (!token) {
//     return;
//   }
//   api.defaults.headers.Authorization = `bearer ${token}`;
//   return;
// }

export function logout() {
  //   history.push('/');
}

export default all([
  takeLatest('@auth/SIGNIN_REQUEST', signIn),
  takeLatest('@auth/SIGNUP_REQUEST', signUp),
  takeLatest('@auth/LOGOUT', logout),
  //   takeLatest('persist/REHYDRATE', setAuthToken),
]);
