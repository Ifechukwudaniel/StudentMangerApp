import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigation from './AuthNavigator';
import SetupNavigation from './SetupNavigator';
import AllNavigation from './AllNavigation'
import AttendanceNavigation from './AttendanceNavigation';


export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Auth:AuthNavigation,
    Setup:SetupNavigation,
    Nav:AllNavigation,
    AttendanceDetail: AttendanceNavigation
  },
  {
    initialRouteName:"Auth"
  })
);
