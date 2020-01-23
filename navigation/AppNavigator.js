import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigation from './AuthNavigator';
import SetupNavigation from './SetupNavigator'


export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Auth:AuthNavigation,
    Setup:SetupNavigation
  },
  {
    initialRouteName:"Auth"
  })
);
