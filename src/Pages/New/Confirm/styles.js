import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';
import Button from '../../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  font-size: 14px;
  margin-top: 15px;
  font-weight: bold;
  color: #fff;
`;
export const Time = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
`;
export const SubmitBtn = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
export const TextBtn = styled.Text`
  font-size: 16px;
  align-self: center;
`;
