import React, {forwardRef,useImperativeHandle, useState, useEffect} from 'react';
import {  Header, Left, Body, Right, Button, Icon, Segment,  } from 'native-base'
import {Image, StatusBar, Dimensions, Text, TouchableOpacity, Animated, Easing} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import HandBugger from '../../assets/svg/handBugger.svg' 
import Setting from '../../assets/svg/setting.svg'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380



const PostsHeader = forwardRef((props, ref)=> {
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

  return (
     <Animated.View style={{
       transform:[
         {
           translateY:height
         }
       ]
     }}>
      <Header hasSegment transparent  style={styles.header}>
        <StatusBar backgroundColor="transparent" hidden={false} barStyle="light-content"/>
          <Left>
            <Button onPress={()=>props.navigation.openDrawer()} transparent>
              <HandBugger width={30*rem} height={30*rem}/>
            </Button>
          </Left>
          <Body>
            <Segment    style={{backgroundColor:"#0c0c0c", borderWidth:0}}>
              <TouchableOpacity style={styles.buttonStyle}>
                 <Text style={styles.buttonText}>Posts</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>props.navigation.navigate('Chat')} style={styles.buttonStyleNotActive}>
                <Text style={styles.buttonText}>Messages</Text>
              </TouchableOpacity>
            </Segment>
          </Body>
          <Right>
          {
            !props.back ? 
            <Button onPress={()=> props.navigation.navigate('Settings')}  transparent>
               <Setting width={20*rem} height={25*rem}/>
            </Button>
            :
            <Button onPress={()=> props.navigation.navigate(props.backScreen)}  transparent>
            <Icon style={{color:'#FF912C'}} type="FontAwesome5"  name="arrow-left"/>  
            </Button>
          }
          </Right>
       </Header>
     </Animated.View>
  );
})


const styles = EStyleSheet.create({
    header:{
       backgroundColor: "#0C0C0E",
       paddingTop: '48rem',
       paddingBottom: '20rem',
       paddingLeft: '20rem',
       height:"90rem",
       borderWidth:'0rem',
       borderColor:'#0c0c0e'
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
    },
    buttonStyle:{
      backgroundColor:'#FF912c',
      borderColor:"transparent",
      borderRadius:'5rem',
      width:"90rem",
      color:"#fff",
      height:"40rem",
      marginLeft: '3rem',
    },
    buttonText:{
      alignSelf:'center',
      color:'#fff',
      marginTop: '10rem',
      fontSize: '15rem',
    },
    segmentStyle:{
      backgroundColor:"transparent", 
      borderWidth:0
 },
 buttonStyleNotActive:{
  backgroundColor:'#242426',
  borderColor:"transparent",
  borderRadius:'5rem',
  width:"90rem",
  color:"#fff",
  height:"40rem",
  marginLeft: '3rem',
 },
 buttonTextNotActive:{
  alignSelf:'center',
  color:'#7C7B7C',
  marginTop: '10rem',
  fontSize: '15rem',
},
})
export default PostsHeader;