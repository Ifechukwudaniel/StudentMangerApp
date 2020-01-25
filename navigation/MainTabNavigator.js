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

const config = Platform.select({
  default: {
  },
});

const LevelStack = createStackNavigator({
   Level: LevelScreen
},
{

})


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode:'screen'
  },
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
        backgroundColor:colors.darkMode
    }
  }
});

AppStack.path = '';

export default AppStack;
