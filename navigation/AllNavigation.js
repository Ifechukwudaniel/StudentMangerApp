import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MaterialScreen from '../screens/Home/MaterialScreen';
import AttendanceScreen from '../screens/Home/AttendanceScreen';
import ChatScreen from '../screens/Home/ChatScreen';
import EventScreen from '../screens/Home/EventScreen';
import TimeTableScreen from '../screens/Home/TimeTableScreen';


const config = Platform.select({
  default: {
  },
});


const MaterialStack = createStackNavigator({
   Material: MaterialScreen,
},
)

MaterialStack.navigationOptions = {
    headerShown:false
}

MaterialStack.path = '';

const AttendanceStack = createStackNavigator({
    Attendance: AttendanceScreen,
 },
 )
 
 AttendanceStack.navigationOptions = {
     headerShown:false
 }
 
 AttendanceStack.path = '';


 const ChatStack = createStackNavigator({
    Chat: ChatScreen,
 },
 )
 
 ChatStack.navigationOptions = {
     headerShown:false
 }
 
 ChatStack.path = '';

 const EventStack = createStackNavigator({
    Event: EventScreen,
 },
 )
 
 EventStack.navigationOptions = {
     headerShown:false
 }
 
 EventStack.path = '';

 const TimeTableStack = createStackNavigator({
    TimeTable: TimeTableScreen,
 },
 )
 
 TimeTableStack.navigationOptions = {
     headerShown:false
 }
 
 TimeTableStack.path = '';



const AllStack = createStackNavigator({
  materials:MaterialStack,
  attendance:AttendanceStack,
  chat: ChatStack,
  event:EventStack,
  timeTable:TimeTableStack
},{
});

AllStack.path = '';

export default AllStack;
