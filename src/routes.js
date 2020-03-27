import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import SignIn from './Pages/SignIn';
import SigUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import SelectProvider from './Pages/New/SelectProvider';
import SelectDate from './Pages/New/SelectDate';
import Confirm from './Pages/New/Confirm';

import Profile from './Pages/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const {signed} = useSelector(state => state.auth);

  function New() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="SelectProvider"
          component={SelectProvider}
          options={SelectProvider.navigationOptions}
        />
        <Stack.Screen
          name="SelectDate"
          component={SelectDate}
          options={SelectDate.navigationOptions}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={Confirm.navigationOptions}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {!signed ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SigUp} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName="Dashboard"
          tabBarOptions={{
            activeTintColor: '#fff',
            keyboardHidesTabBar: true,
            inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
            style: {
              backgroundColor: '#8d41a8',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}>
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarLabel: 'Agendamentos',
              tabBarIcon: ({color, size}) => (
                <Icon name="event" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="New"
            component={New}
            options={{
              tabBarLabel: 'Agendar',
              tabBarIcon: ({color, size}) => (
                <Icon name="add-circle-outline" color={color} size={size} />
              ),
              tabBarVisible: false,
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: ({color, size}) => (
                <Icon name="person" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
