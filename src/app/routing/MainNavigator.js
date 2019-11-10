import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

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
    RecipeDetail: {
      screen: RecipeDetail,
    }
  }
);

export default createAppContainer(MainNavigator)