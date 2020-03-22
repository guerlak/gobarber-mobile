import {Platform} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 30px;
`;

export const SubmitBtn = styled(Button)`
  margin-top: 5px;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 5px;
`;
export const SignUpLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
