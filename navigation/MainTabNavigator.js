import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BlogsScreen from '../screens/BlogsScreen';
import AuthScreen from '../screens/AuthScreen';
import colors from "../constants/Colors"
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  default: {
  },
});
const AuthStack = createStackNavigator(
  {
  Auth:AuthScreen
  }
)

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }, props) => (
    <TabBarIcon
      focused={focused}
      name='home-outline'
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
    <TabBarIcon focused={focused} {...props} name='book-outline' />
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
    <TabBarIcon focused={focused} {...props} name='settings-2-outline' />
  ),
};

SettingsStack.path = '';

const AppStack = createBottomTabNavigator({
  HomeStack,
  BlogsStack,
  SettingsStack
},
{
  tabBarOptions:{
    showLabel:false,
    activeTintColor:"#fff",
    labelStyle:{
     color:colors
    },
    style:{
        backgroundColor:colors.white
    }
  }
});

AppStack.path = '';

export default AppStack;
