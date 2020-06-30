import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


// import TabBarIcon from '../components/TabBarIcon';
import DepartmentScreen from '../screens/DepartmentScreen';
import LevelScreen from '../screens/LevelScreen';
import colors from "../constants/Colors"
import CourseScreen from '../screens/CourseScreen';
import {fromRight, zoomIn } from 'react-navigation-transitions';


const config = Platform.select({
  default: {
  },
});


const LevelStack = createStackNavigator({
   Level: LevelScreen
},
{
  transitionConfig:()=>zoomIn()
}
)
LevelStack.path = '';


const CourseStack = createStackNavigator(
  {
    Course: CourseScreen ,
  },
  config
);


CourseStack.path = '';


const DepartmentStack = createStackNavigator(
  {
    Department: DepartmentScreen,
  },
  config
);

DepartmentStack.path = '';

const SetupStack = createStackNavigator({
  level:LevelStack,
  Department:DepartmentStack,
  Course:CourseStack,
},{
   initialRouteName:"Department",
   headerMode:'none',
});

SetupStack.path = '';

export default SetupStack;
