import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AuthScreen from '../screens/AuthScreen';

const config = Platform.select({
  default: {},
});
const AuthStack = createStackNavigator(
  {
  Auth:AuthScreen
  }
)

export default AuthStack;
