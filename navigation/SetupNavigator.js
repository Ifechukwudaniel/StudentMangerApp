import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


// import TabBarIcon from '../components/TabBarIcon';
import DepartmentScreen from '../screens/DepartmentScreen';
import colors from "../constants/Colors"
import IntroScreen from '../screens/IntroScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GuestHomeScreen from '../screens/Guest/GuestHome';
import GuestHistoryScreen from '../screens/Guest/GuestHistory';
import GuestTuitionScreen from '../screens/Guest/GuestTuition';
import GuestRulesScreen from '../screens/Guest/GuestRules';
import GuestGuidelinesScreen from '../screens/Guest/GuestGuildlines';
import GuestCalenderScreen from '../screens/Guest/GuestCalender';
import GuestDepartmentScreen from '../screens/Guest/GuestDepartment';


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
  guestHome: GuestHomeScreen,
  guestHistory: GuestHistoryScreen,
  guestTuition: GuestTuitionScreen,
  guestRules : GuestRulesScreen,
  guestGuidelines:GuestGuidelinesScreen,
  guestCalender : GuestCalenderScreen,
  guestDepartments: GuestDepartmentScreen
},{
   initialRouteName:"intro",
   headerMode:'none',
});

SetupStack.path = '';

export default SetupStack;
