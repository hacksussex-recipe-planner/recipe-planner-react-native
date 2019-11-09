import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';

import theme from '@theme';

import BottomTabNavigator from './BottomTabNavigator';
import RecipesOfDay from '../pages/RecipesOfDay';

const MainNavigator = createStackNavigator(
  {
    MainTabScreen: {
      screen: BottomTabNavigator,
      navigationOptions: {
        header: null,
        headerMode: 'none'
      },
    }, 
    RecipesOfDay: { 
      screen: RecipesOfDay,
    }
  }
);

export default MainNavigator