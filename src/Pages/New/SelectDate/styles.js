import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const TimeList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;
export const Time = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  opacity: ${props => (props.enabled ? 1 : 0.5)};
  align-items: center;
  margin: 0 10px 20px;
`;
export const TimeText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
