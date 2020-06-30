import React from 'react';
import {  Dimensions, Text, View} from 'react-native';
import { createStackNavigator ,} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
const rem = Dimensions.get('window').width/380;
import AllNavigation from './AllNavigation'
import SetupNavigation from './SetupNavigator';
import AttendanceNavigation from './AttendanceNavigation'
import Speedometer from '../assets/svg/speedometer.svg';
import People from '../assets/svg/people.svg';
import Productivity from '../assets/svg/productivity.svg';
import Register from '../assets/svg/register.svg';
import TimeSketchScreen from '../screens/TimeSketchScreen';
import RecordScreen from '../screens/RecordScreen';
import AddDocumentScreen from '../screens/AddDocumentScreen';
import PlusTabBarIcon from '../components/PlusTabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';
import PostsScreen from '../screens/PostsScreen';
import { createSwitchNavigator, } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


 const HomeStack  = createStackNavigator({
  Home:HomeScreen,
  Settings:SettingsScreen
 }, {
  //  transitionConfig:()=>fromBottom()
 })


HomeStack.navigationOptions = {
  tabBarLabel:({focused, })=>(
    <Text style={{
     color: focused?"#FF912C":"transparent",
     fontSize:11,
     fontWeight:'bold',
     textAlign:"center",
     paddingTop:5
    }}> LOCAL</Text>
  ),
  tabBarIcon: ({ focused }, props) => (
    <Speedometer width={45*rem} height={40*rem}/>
  ),
};

HomeScreen.path = '';


TimeSketchScreen.navigationOptions = {
  tabBarLabel:({focused, })=>(
    <Text style={{
     color: focused?"#FF912C":"transparent",
     fontSize:11,
     fontWeight:'bold',
     textAlign:"center",
     paddingTop:5
    }}> Time Sketch</Text>
  ),
  tabBarIcon: ({ focused }, props) => (
    <Productivity  width={35*rem} height={35*rem}/>
  ),
};

TimeSketchScreen.path = '';


const ConversationStack  = createSwitchNavigator({
  Post:PostsScreen,
  Chat:ChatScreen,
 }, {
  
 })


ConversationStack.navigationOptions = {
  tabBarLabel:({focused, })=>(
    <Text style={{
     color: focused?"#FF912C":"transparent",
     fontSize:11,
     fontWeight:'bold',
     textAlign:"center",
     paddingTop:5
    }}> Conversation</Text>
  ),
  tabBarIcon: ({ focused }, props) => (
   <People  width={35*rem} height={35*rem} style={{marginTop:10*rem}}/>
  ),
};

ConversationStack.path = '';


RecordScreen.navigationOptions = {
  tabBarLabel:({focused, })=>(
    <Text style={{
     color: focused?"#FF912C":"transparent",
     fontSize:11,
     fontWeight:'bold',
     textAlign:"center",
     paddingTop:5
    }}> Records</Text>
  ),
  tabBarIcon: ({ focused }, props) => (
   <Register  width={35*rem} height={35*rem}/>
  ),
};

RecordScreen.path = '';

AddDocumentScreen.navigationOptions = {
  tabBarOnPress:(e)=>{
    console.log(e)
  },
  tabBarLabel:({focused, })=>(
    <Text style={{
     color: focused?"#FF912C":"transparent",
     fontSize:10,
     fontWeight:'bold',
     textAlign:"center",
     paddingTop:5
    }}> </Text>
  ),
  tabBarIcon: ({ focused }, props) => (
     <PlusTabBarIcon/>
  ),
};

AddDocumentScreen.path = '';

const AppStack = 
createBottomTabNavigator({
  Home:HomeStack,
  TimeSketch:TimeSketchScreen,
  AddDocument:AddDocumentScreen,
  Conversation:ConversationStack,
  Record:RecordScreen
},
{
  tabBarOptions:{
    lazy: false,
    showLabel:true,
    animationEnabled:true,
    labelStyle:{
     color:"#FF912C",
     fontSize:14,
     fontWeight:"bold"
    },
    style:{
        backgroundColor:'#0C0C0E',
        fontFamily: 'Itim',
        borderColor: "#000",
        borderWidth: 0,  
        borderTopWidth:1,
        borderTopColor:"#0C0C0E",
        zIndex:1,
        elevation:2,
        paddingTop:10,
        // height:60*rem
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
 headerMode:'none'
})


const  MainDrawer = createDrawerNavigator({
   mainStack: MainAppStack
}, {

})

export default MainDrawer;
