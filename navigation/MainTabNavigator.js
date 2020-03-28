import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BlogsScreen from '../screens/BlogsScreen';
import LevelScreen from '../screens/LevelScreen';
import colors from "../constants/Colors"
import SettingsScreen from '../screens/SettingsScreen';
import FileScreen from '../screens/FileScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../constants/Colors';

const config = Platform.select({
  default: {
  },
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
   {
     headerMode:'float'
   }
);

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

HomeStack.path = '';

const BlogsStack = createStackNavigator(
  {
    Blogs: BlogsScreen,
  },
  {
    headerMode:'float'
  }
);

BlogsStack.navigationOptions = {
  tabBarLabel: 'Blog',
  tabBarIcon: ({ focused }, props) => (
    <TabBarIcon focused={focused} {...props} name='book' screenName= "Blog" />
  ),
};

BlogsStack.path = '';


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }, props) => (
    <TabBarIcon focused={focused} {...props} name='settings-2' screenName= "Setting" />
  ),
};

SettingsStack.path = '';

const FileStack = createStackNavigator(
  {
    Files: FileScreen,
  },
  config
);

FileStack.navigationOptions = {
  tabBarLabel: 'Downloads',
  tabBarIcon: ({ focused }, props) => (
    <MaterialIcon size={36} color={focused ? Colors.tintColor :"#fff"} name="file-download"/>
  ),
};

SettingsStack.path = '';

const AppStack = createBottomTabNavigator({
  Home:HomeStack,
  Blogs:BlogsStack,
  Settings:SettingsStack,
  Files:FileStack
},
{
  tabBarOptions:{
    showLabel:false,
    activeTintColor:"#fff",
    labelStyle:{
     color:colors
    },
    style:{
        backgroundColor:Colors.black,
        borderTopColor:"gray",
        borderTopWidth:1
    },

  },
});

AppStack.path = '';

export default AppStack;
