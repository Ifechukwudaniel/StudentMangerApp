import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


// import TabBarIcon from '../components/TabBarIcon';
import DepartmentScreen from '../screens/DepartmentScreen';
import colors from "../constants/Colors"
import IntroScreen from '../screens/IntroScreen';


const config = Platform.select({
  default: {
  },
});


const IntroStack = createStackNavigator({
   Intro:IntroScreen
},
{
}
)
IntroStack.path = '';


const SetupStack = createStackNavigator({
  intro:IntroStack,
},{
   initialRouteName:"intro",
   headerMode:'none',
});

SetupStack.path = '';

export default SetupStack;
