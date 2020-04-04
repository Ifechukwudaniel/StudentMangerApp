import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BlogScreen from '../screens/BlogsScreen';
import AttendanceScreen from '../screens/Home/AttendanceScreen';
import ChatScreen from '../screens/Home/ChatScreen';
import EventScreen from '../screens/Home/EventScreen';
import TimeTableScreen from '../screens/Home/TimeTableScreen';
import PhoneSettingScreen from '../screens/PhoneSettingScreen';
import NotificationScreen from '../screens/Home/NotificationScreen';




const config = Platform.select({
  default: {
  },
});


const BlogStack = createStackNavigator({
   Blogs: BlogScreen,
},
)

BlogStack.navigationOptions = {
    headerShown:false
}

BlogStack.path = '';

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


 const NotificationsStack = createStackNavigator({
    Notification: NotificationScreen,
 },
 )
 
 NotificationsStack.navigationOptions = {
     headerShown:false
 }
 
 NotificationsStack.path = '';


 const PhoneSettingStack = createStackNavigator({
    PhoneSetting: PhoneSettingScreen,
 },
 )
 
 PhoneSettingStack.navigationOptions = {
     headerShown:false
 }
 
 PhoneSettingStack.path = '';



const AllStack = createStackNavigator({
  Blogs:BlogStack,
  attendance:AttendanceStack,
  chat: ChatStack,
  event:EventStack,
  timeTable:TimeTableStack,
  phoneSetting:PhoneSettingStack,
  notifications: NotificationsStack
},{
});

AllStack.path = '';

export default AllStack;
