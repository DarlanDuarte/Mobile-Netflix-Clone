import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/pages/Login/login';
import Home from './src/pages/Home/home';
import Filme from './src/pages/Filme/Filme';
import PaginaFake from './src/pages/PaginaFake/PaginaFake';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator activeColor={'#fff'} barStyle={{backgroundColor: '#141414'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="buscar"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="em breve"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({color}) => (
            <Icon name="play-speed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="download"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Download',
          tabBarIcon: ({color}) => (
            <Icon name="download" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="mais"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color}) => <Icon name="menu" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={MyTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Filme"
          component={Filme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
