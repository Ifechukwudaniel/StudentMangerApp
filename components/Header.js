import React,{useState, useEffect, useRef, useImperativeHandle, forwardRef} from 'react';
import {  Header, Left, Body, Right, Button, Title, Text, Icon,  } from 'native-base'
import {Image, StatusBar, Dimensions, Animated, Platform, Easing, SafeAreaView, View} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import HandBugger from '../assets/svg/handBugger.svg' 
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
const statusBarHeight = Constants.statusBarHeight


const HeaderComponent = forwardRef((props, ref)=> {
    const [animation, setAnimation] = useState(false)
    const [value] = useState(new Animated.Value(0))
   
    useEffect(()=>{
      Animated.timing(value, {
          toValue: animation? 1 : 0,
           easing:Easing.bounce,
          duration: Platform.select({
            ios:150,
            android:50 
          }),
          useNativeDriver:true
      }).start()
  }, [animation])
   
  const height = value.interpolate({
    inputRange: [0, 1],
    outputRange: [0*rem, -110*rem],  
  })
   
  useImperativeHandle(ref, () => {
     return {
      animateUp(){
        setAnimation(true)  
      },
      animateDown(){
        setAnimation(false)  
      }
     }
  });
   
  if (Platform.OS=="android") {
    return (
      <Animated.View style={Platform.select({
        android:{
          marginTop:statusBarHeight
        },
        ios:{
          marginTop:0
        }
      }),{
        transform:[
          {
            translateY:height,
          }
        ]
      }}>
      <View transparent  style={[styles.header]}>
       <StatusBar hidden={false} backgroundColor="#0C0C0E" barStyle="light-content" />
         <View style={styles.Left}>
           <Button style={styles.HandBugger} onPress={()=>props.navigation.openDrawer()} transparent>
             <HandBugger width={30*rem} height={30*rem}/>
           </Button>
         </View>
         <View  style={styles.center}>
           <Title style={styles.title}>{props.screenName}</Title>
         </View>
         <View style={styles.right}>
           { !props.back ?   
           <Button   onPress={()=>{
           props.navigation.navigate('Settings')
           }}   transparent>
             <Image resizeMode="cover" style={styles.userImage} source={require('../assets/images/image.jpeg')}/>
           </Button>
           : 
           <Button  onPress={()=>props.navigation.navigate(props.backScreen ? props.backScreen :'Home' )}   transparent>
              <Icon style={{color:'#FF912C'}} type="FontAwesome5"  name="arrow-left"/>
           </Button>
           }
         </View>
      </View>
      </Animated.View>
   );
  }
  else{
    return (
      <Animated.View style={{
        transform:[
          {
            translateY:height
          }
        ]
      }}>
      <Header transparent  style={[styles.header]}>
       <StatusBar backgroundColor="transparent" hidden={false} barStyle="light-content"/>
         <Left style={{flex:1}}>
           <Button onPress={()=>props.navigation.openDrawer()} transparent>
             <HandBugger width={30*rem} height={30*rem}/>
           </Button>
         </Left>
         <Body  style={{flex:1}}>
           <Title style={styles.textStyle}>{props.screenName}</Title>
         </Body>
         <Right style={{flex:1}}>
           { !props.back ?   
           <Button  onPress={()=>{
         //    setAnimation(true)
           props.navigation.navigate('Settings')
           }}   transparent>
             <Image resizeMode="cover" style={styles.userImage} source={require('../assets/images/image.jpeg')}/>
           </Button>
           : 
           <Button  onPress={()=>props.navigation.navigate(props.backScreen ? props.backScreen :'Home' )}   transparent>
              <Icon style={{color:'#FF912C'}} type="FontAwesome5"  name="arrow-left"/>
           </Button>
           }
         </Right>
      </Header>
      </Animated.View>
   );
  }
   
})


const styles = EStyleSheet.create(
   Platform.select({
     android:{
      userImage:{
        height: '45rem',
        width:'45rem',
        borderRadius: '45rem',
        borderWidth: '2rem',
        borderColor: "#FF912C",
        alignSelf: 'center',
        marginTop: '2rem',
    },
    textStyle:{
        color:"#fff",
        alignSelf: 'center',
        paddingTop:0,
        justifyContent: 'center',
    },
    header:{
      flexDirection: 'row',
      width:'100%',
      backgroundColor: "#0C0C0E",
      height:"65rem",
      borderWidth:'0rem',
      borderColor:'#0c0c0e',
      alignSelf: 'center',
    },
    left:{
      width:'15%',
    },
    HandBugger:{
      marginLeft:'20rem',
      marginTop: '5rem',
    },
    title:{
      marginTop: '17rem',
      color:"#fff",
      alignSelf: 'center',
      justifyContent: 'center',
     },
    right:{
      width:'15%',
      marginTop:'6rem',
      marginLeft:'5rem'
    },
    center:{
      width:'70%',
      marginLeft:'5rem'
    }
    },
    ios:{
      header:{
        backgroundColor: "#0C0C0E",
        paddingTop: '48rem',
        paddingBottom: '20rem',
        paddingLeft: '20rem',
        height:"90rem",
        borderWidth:'0rem',
        borderColor:'#0c0c0e',
     },
     userImage:{
         height: '50rem',
         width:'50rem',
         borderRadius: '70rem',
         borderWidth: '2rem',
         borderColor: "#FF912C",
         alignSelf: 'center',
     },
     textStyle:{
         color:"#fff",
         alignSelf: 'center',
         paddingTop:0,
         justifyContent: 'center',
     }
    }
   })
)
export default HeaderComponent;