import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from '../../../services/api';
import {updateProfileSuccess, updateProfileFailure} from './actions';
import {Alert} from 'react-native';

export function* updateProfile({payload}) {
  const {name, email, avatar_id, ...rest} = payload.data;

  //This to concacanate 2 objs , if requisition brings passwords to init proccess to modify
  const profile = Object.assign(
    {name, email, avatar_id},
    rest.oldPassword ? {...rest} : {},
  );

  try {
    const res = yield call(api.put, 'users', {
      profile,
    });

    yield put(updateProfileSuccess(res.data));
    Alert.alert('Sucesso:', 'Usuário atualizado');
  } catch (e) {
    Alert.alert('Erro ao atualizar', 'Verifique seus dados');
    yield put(updateProfileFailure());
  }
  return;
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
