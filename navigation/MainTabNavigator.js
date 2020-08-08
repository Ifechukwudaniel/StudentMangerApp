import React from 'react';
import {  Dimensions, Text, View, Image,ScrollView, ImageBackground, Animated, Easing, TouchableOpacity} from 'react-native';
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
import PurchaseScreen from '../screens/PurchaseScreen';
import PostsItemScreen from '../screens/PostsItemScreen';
import { createSwitchNavigator, } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import RecordItemScreen from '../screens/RecordItemScreen';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from 'native-base';
import Home from '../assets/svg/HomeTabbar.svg'
import Person from '../assets/svg/person.svg'
import Files from '../assets/svg/FilesTab.svg'
import Shop from '../assets/svg/shop.svg'
import Settings from '../assets/svg/settingTab.svg'
import TimeTable from '../assets/svg/Clock.svg'
import TimeTableScreen from '../screens/Home/TimeTableScreen';
import Transition from 'react-navigation-transitions'

 const HomeStack  = createSwitchNavigator({
  Home:HomeScreen,
  Settings:SettingsScreen,
  Purchase:PurchaseScreen
 }, {
  transitionConfig : () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
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


const PostStack  = createStackNavigator({
  Post:PostsScreen,
  PostItem:PostsItemScreen,
 }, {
  transitionConfig : () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
 })
 PostStack.navigationOptions = {
  header:null,
  tabBarVisible: false,
};

 PostStack.path = '';

const ConversationStack  = createStackNavigator({
  Post:PostStack,
  Chat:ChatScreen,
 }, {
  transitionConfig : () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
  
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


const RecordStack  = createStackNavigator({
  Record:RecordScreen,
  RecordItem: RecordItemScreen,
  TimeTable:TimeTableScreen
 }, {
  transitionConfig : () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
  
 })

RecordStack.navigationOptions = {
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

RecordStack.path = '';

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
  Record:RecordStack
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
        height:60*rem
    },
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      if (
        navigation.state.routeName === "Conversation" ||
        navigation.state.routeName === "Third"
      ) {
        defaultHandler()
      }
      defaultHandler();
    }})
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
  overlayColor:' rgba(255, 255, 255, 0.24)',
  contentComponent :(props)=>{
    return (
    <View style={styles.tab}>
      <View style={styles.imageTop}>
        <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,1)', '#0C0C0E']}>
           <ImageBackground style={styles.image} resizeMode="cover" source={require('../assets/images/drawerimage.png')}>
            <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0.1)', '#0C0C0E']}>
                <Image style={styles.logo} resizeMode='contain' source={require('../assets/images/Logo/Logo.png')}/>
            </LinearGradient>
           </ImageBackground>
        </LinearGradient>
      </View>
      <View style= {styles.tabContent}>
         <ScrollView>
         <TouchableOpacity onPress={()=>{
           props.navigation.navigate("Home")
           props.navigation.closeDrawer()
           }} style={styles.tabItem}>
            <Home style={styles.svg}/> 
            <Text style={styles.text}> Home</Text>
        </TouchableOpacity>
        <TouchableOpacity   onPress={()=>{
          props.navigation.navigate("Conversation")
          props.navigation.closeDrawer()
          }} style={styles.tabItem}>
           <Person/>
           <Text style={styles.text}> Conversation </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
            <Files/>
            <Text style={styles.text}> Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          props.navigation.navigate("Purchase")
          props.navigation.closeDrawer()
          }}

         style={styles.tabItem}>
            <Shop/>
            <Text style={styles.text}> Purchase</Text>
        </TouchableOpacity>
        <TouchableOpacity   onPress={()=>{
          props.navigation.navigate("Settings")
          props.navigation.closeDrawer()
          }}  style={styles.tabItem}>
           <Settings/>
           <Text style={styles.text}> Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate("TimeTable")
          props.navigation.closeDrawer()
          }} style={styles.tabItem}>
          <TimeTable/>
          <Text style={styles.text}> TimeTable</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate("Record")
          props.navigation.closeDrawer()
          }} style={styles.tabItem}>
          <Register  width={35*rem} height={35*rem}/>
          <Text style={styles.text}> Records</Text>
        </TouchableOpacity>
         </ScrollView>
      </View>
    </View>
    )
  }
})

const styles = EStyleSheet.create({
  tab:{
    backgroundColor:'#0C0C0E',
    flex: 1,
  },
  image:{
   width:'100%',
   height:'100%'
  },
  gradient:{
   flex:1,
   justifyContent: 'center',
  },
  imageTop:{
    flex: 30,
  },
  tabContent:{
     flex: 70,
  },
  logo:{
     width:'170rem',
     height:'170rem',
     alignSelf: 'center',
  },
  motto:{
    color:"#fff",
    fontSize: '14rem',
    textAlign:'center',
    fontWeight:'bold',
    marginTop: '10rem',
  },
  tabItem:{
    backgroundColor:'rgba(0,0,0,0.1)',
    paddingLeft: '20rem',
    height:'70rem',
    flexDirection: 'row',
    width:'100%',
    marginTop: '10rem',
  },
  text:{
    color: 'rgba(252, 252, 252, 0.61)',
    textAlign:'right',
    fontFamily: 'Montserrat',
    fontWeight:'bold',
    fontSize: '16rem',
    lineHeight:'30rem',
    paddingLeft:'10rem'
  }
})

export default MainDrawer;
