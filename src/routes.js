import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './Pages/SignIn';
import SigUp from './Pages/SignUp';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen headerMode={'none'} name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SigUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
