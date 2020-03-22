import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
export const Container = styled(RectButton)`
  height: 46px;
  background: #3b9eff;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
