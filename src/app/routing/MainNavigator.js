import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';

import theme from '@theme';

import BottomTabNavigator from './BottomTabNavigator';
import RecipeDetail from '../pages/RecipeDetail';

const MainNavigator = createStackNavigator(
  {
    MainTabScreen: {
      screen: BottomTabNavigator,
      navigationOptions: {
        header: null,
        headerMode: 'none'
      },
    }, 
    // Recipe: { 
    //   screen: Recipe,
    // }
  }
);

export default MainNavigator