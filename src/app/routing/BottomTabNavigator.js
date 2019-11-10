import React from 'react';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconFeather from 'react-native-vector-icons/Feather';

import theme from '@theme';

import Shopping from '../pages/Shopping';
import Days from '../pages/Days';
import Profile from '../pages/Profile';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Shopping: {
      screen: Shopping,
      navigationOptions: {
        tabBarLabel: "Shopping",
        tabBarIcon: ({ tintColor }) => (
          <IconFA5 name="shopping-cart" size={18} color={tintColor}/>
        )
      },
    },
    Days: {
      screen: Days,
      navigationOptions: {
        tabBarLabel: "Recipes",
        tabBarIcon: ({ tintColor }) => (
          <IconMaterialComunity name="food-variant" size={20} color={tintColor}/>
        )
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Me",
        tabBarIcon: ({ tintColor }) => (
          <IconMaterial name="person" size={24} color={tintColor}/>
        )
      },
    },
  },
  {
    initialRouteName: "Shopping",
    tabBarOptions: {
      headerVisible: false,
      activeTintColor: theme.colors.main,
      inactiveTintColor: theme.colors.inactive_item,
      style: {
        backgroundColor: theme.colors.white,
      }
    },
  }
);

export default BottomTabNavigator;