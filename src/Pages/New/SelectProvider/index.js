import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Background from '../../../components/Background';

// import { Container } from './styles';

export default function SelectProvider() {
  return (
    <Background>
      <View />
    </Background>
  );
}

SelectProvider.navigationOptions = {
  title: 'Com quem vc quer marcar',
};
