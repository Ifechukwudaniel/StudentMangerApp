import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigation from './AuthNavigator';
import SetupNavigation from './SetupNavigator';
import AllNavigation from './AllNavigation';
import AttendanceNavigation from './AttendanceNavigation';
import AuthScreen from '../screens/AuthScreen'


export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Auth:AuthScreen,
    AttendanceDetail: AttendanceNavigation
  },
  {
    initialRouteName:"Auth",
    
  })
);
