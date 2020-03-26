import React from 'react';
import {View} from 'react-native';
import Background from '../../../components/Background';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Confirm() {
  return (
    <Background>
      <View />
    </Background>
  );
}

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirme',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={24} color="#fff" />
    </TouchableOpacity>
  ),
});
