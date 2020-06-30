import React from 'react';
import { Platform , Easing, Animated} from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AttendanceScreen from '../screens/Home/AttendanceScreen';
import EventScreen from '../screens/Home/EventScreen';
import TimeTableScreen from '../screens/Home/TimeTableScreen';
import PhoneSettingScreen from '../screens/PhoneSettingScreen';
import NotificationScreen from '../screens/Home/NotificationScreen';
import AttendanceNavigation from '../navigation/AttendanceNavigation'
import {fromBottom, fromRight} from 'react-navigation-transitions'

const AllStack = createStackNavigator({
  attendance:AttendanceScreen,
  event:EventScreen,
  timeTable:TimeTableScreen,
  phoneSetting:PhoneSettingScreen
},{
 
});

AllStack.path = '';

export default AllStack;
