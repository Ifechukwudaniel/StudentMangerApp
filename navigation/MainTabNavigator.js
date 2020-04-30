import React from 'react';
import { Platform , Dimensions} from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BlogsScreen from '../screens/BlogsScreen';
import MaterialScreen from '../screens/Home/MaterialScreen'
import LevelScreen from '../screens/LevelScreen';
import colors from "../constants/Colors"
import SettingsScreen from '../screens/SettingsScreen';
import FileScreen from '../screens/FileScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
const rem = Dimensions.get('window').width/380;
import Colors from '../constants/Colors';
import {fromRight, fromBottom} from 'react-navigation-transitions'
import AllNavigation from './AllNavigation'
import SetupNavigation from './SetupNavigator';
import AttendanceNavigation from './AttendanceNavigation'
import NotificationScreen from '../screens/Home/NotificationScreen';



 const HomeStack  = createStackNavigator({
  Home:HomeScreen,
  notifications: NotificationScreen,
 }, {
   transitionConfig:()=>fromBottom()
 })


HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }, props) => (
    <TabBarIcon
      focused={focused}
      name='home'
      screenName= "Home"
      {...props}
    />
  ),
};

HomeScreen.path = '';


MaterialScreen.navigationOptions = {
  tabBarLabel: 'Material',
  tabBarIcon: ({ focused }, props) => (
    <TabBarIcon focused={focused} {...props} name='book' screenName= "Material" />
  ),
};

MaterialScreen.path = '';


SettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }, props) => (
    <TabBarIcon focused={focused} {...props} name='settings-2' screenName= "Setting" />
  ),
};

SettingsScreen.path = '';


FileScreen.navigationOptions = {
  tabBarLabel: 'Downloads',
  tabBarIcon: ({ focused }, props) => (
    <MaterialIcon size={40*rem} color={focused ? Colors.tintColor :"#fff"} name="file-download"/>
  ),
};

FileScreen.path = '';

const AppStack = createBottomTabNavigator({
  Home:HomeStack,
  Material:MaterialScreen,
  Settings:SettingsScreen,
  Files:FileScreen
},
{
  tabBarOptions:{
    showLabel:false,
    animationEnabled:true,
    labelStyle:{
     color:colors.white,
     fontFamily:"itim",
     fontSize:14
    },
    style:{
        backgroundColor:'#000',
        fontFamily: 'Itim',
        borderColor: "#000",
        borderWidth: 0,  
        borderTopWidth:0
    },
  },
});

AppStack.path = '';


const MainAppStack = createStackNavigator({
   AppStack:AppStack,
   AllNavigation:AllNavigation,
   Setup:SetupNavigation,
   AttendanceDetail: AttendanceNavigation
}, {
  transitionConfig :()=>fromRight(700),
  headerMode:'none'
})

export default MainAppStack;
