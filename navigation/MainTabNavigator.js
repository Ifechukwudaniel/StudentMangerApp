import React from 'react';
import { Platform } from 'react-native';
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

const MaterialsStack = createStackNavigator(
  {
    Materials: MaterialScreen,
  },
  {
    headerMode:'float'
  }
);

MaterialsStack.navigationOptions = {
  tabBarLabel: 'Material',
  tabBarIcon: ({ focused }, props) => (
    <TabBarIcon focused={focused} {...props} name='book' screenName= "Material" />
  ),
};

MaterialsStack.path = '';


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

FileStack.path = '';

const AppStack = createBottomTabNavigator({
  Home:HomeStack,
  Material:MaterialsStack,
  Settings:SettingsStack,
  Files:FileStack
},
{
  tabBarOptions:{
    showLabel:true,
    activeTintColor:"#fff",
    labelStyle:{
     color:colors.white
    },
    style:{
        backgroundColor:Colors.black,
        // marginTop:10     
    },

  },
});

AppStack.path = '';

export default AppStack;
