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
    Days: {
      screen: Days,
      navigationOptions: {
        tabBarLabel: "Recipes",
        tabBarIcon: ({ tintColor }) => (
          <IconMaterialComunity name="food-variant" size={20} color={tintColor}/>
        )
      },
    },
    Shopping: {
      screen: Shopping,
      navigationOptions: {
        tabBarLabel: "Shopping",
        tabBarIcon: ({ tintColor }) => (
          <IconFA5 name="shopping-cart" size={18} color={tintColor}/>
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
    initialRouteName: "Profile",
    tabBarOptions: {
      headerVisible: false,
      activeTintColor: theme.MAIN,
      inactiveTintColor: theme.INACTIVE_ITEM,
      style: {
        backgroundColor: theme.WHITE,
      }
    },
  }
);

export default BottomTabNavigator;