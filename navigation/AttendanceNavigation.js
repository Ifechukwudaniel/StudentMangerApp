import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import colors from "../constants/Colors"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constants/Colors';
import CalenderScreen from '../screens/CalenderScreen';
import GraphScreen from '../screens/GraphScreen';
const rem = Dimensions.get('window').width/380;

const config = Platform.select({
  default: {
  },
});

const CalenderStack = createStackNavigator(
  {
    Calender: CalenderScreen,
  },
  config
);

CalenderStack.navigationOptions = {
  tabBarLabel: 'Calender',
  tabBarIcon: ({ focused }, props) => (
    <MaterialCommunityIcon size={30*rem} color={focused ? Colors.tintColor :"#fff"} name="calendar-blank"/>
  ),
};

CalenderStack.path = '';

const GraphStack = createStackNavigator(
  {
    Graph: GraphScreen,
  },
  config
);

GraphStack.navigationOptions = {
  tabBarLabel: 'Graph',
  tabBarIcon: ({ focused }, props) => (
    <MaterialIcon size={30*rem} color={focused ? Colors.tintColor :"#fff"} name="show-chart"/>
  ),
};

GraphStack.path = '';

const AttendanceNav = createBottomTabNavigator({
   Calender:CalenderStack,
   Graph:GraphStack,
},
{
  tabBarOptions:{
    showLabel:true,
    activeTintColor:"#fff",
    labelStyle:{
     color:colors.white,
     fontFamily:"itim",
     fontSize:16
    },
    style:{
        backgroundColor:Colors.black,
        borderColor:Colors.black,
        borderWidth: 0,  
        borderTopWidth:0
    },

  },
});

AttendanceNav.path = '';

export default AttendanceNav;