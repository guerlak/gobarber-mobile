import styled from 'styled-components/native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalIndicator: false,
})`
  align-self: stretch;
  margin-top: 30px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 10px 0 20px 0;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const LogoutBtn = styled.TouchableOpacity`
  margin-top: 20px;
  background: #f64c75;
  align-self: stretch;
  padding: 14px;
`;

export const LogoutText = styled.Text`
  font-weight: bold;
  color: #fff;
  justify-content: center;
  align-self: center;
`;

export const SubmitBtn = styled.TouchableOpacity`
  height: 46px;
  background: #3b9eff;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const SubmitText = styled.Text`
  font-weight: bold;
  color: #fff;
  justify-content: center;
  align-self: center;
`;
