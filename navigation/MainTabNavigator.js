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
      {...props}
    />
  ),
};

HomeStack.path = '';

const BlogsStack = createStackNavigator(
  {
    Blogs: BlogsScreen,
  },
  config
);

BlogsStack.navigationOptions = {
  tabBarLabel: 'Blog',
  tabBarIcon: ({ focused }, props) => (
    <TabBarIcon focused={focused} {...props} name='book' />
  ),
};

BlogsStack.path = '';


const SettingsStack = createStackNavigator(
  {
    Blogs: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }, props) => (
    <TabBarIcon focused={focused} {...props} name='settings-2' />
  ),
};

SettingsStack.path = '';

const AppStack = createBottomTabNavigator({
  Home:HomeStack,
  Blogs:BlogsStack,
  Settings:SettingsStack
},
{
  tabBarOptions:{
    showLabel:false,
    activeTintColor:"#fff",
    labelStyle:{
     color:colors
    },
    style:{
        backgroundColor:"#10131D",
        borderColor:Colors.black,
        borderTopColor:colors.black
    },

  },
});

AppStack.path = '';

export default AppStack;
