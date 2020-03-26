import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View``;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  flex: 1;
  margin: 0 10px 20px;
  align-items: center;
`;
export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 55px;
`;
export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
`;
