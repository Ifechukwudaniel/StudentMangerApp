import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigation from './AuthNavigator';


export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Auth:AuthNavigation
  },
  {
    initialRouteName:"Auth"
  })
);
