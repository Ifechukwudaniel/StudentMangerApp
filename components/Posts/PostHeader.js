import React, {forwardRef,useImperativeHandle, useState, useEffect} from 'react';
import {  Header, Left, Body, Right, Button, Icon, Segment,  } from 'native-base'
import { Dimensions, Text, TouchableOpacity, Animated, Easing, StatusBar} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import HandBugger from '../../assets/svg/handBugger.svg' 
import Setting from '../../assets/svg/setting.svg'
import { Platform } from 'react-native';
import { View } from 'react-native';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight



const PostsHeader = forwardRef((props, ref)=> {
  const [animation, setAnimation] = useState(false)
  const [value] = useState(new Animated.Value(0))
 if(Platform.OS!=="ios"){
  return (
     <Animated.View>
       <View style={[{marginTop:statusBarHeight*rem},styles.header]}>
         <StatusBar hidden={false} backgroundColor="#0C0C0E" barStyle="light-content" />
         <View style={styles.Left}>
           <Button style={styles.HandBugger} onPress={()=>props.navigation.openDrawer()} transparent>
             <HandBugger width={30*rem} height={30*rem}/>
           </Button>
         </View>
          <View style={styles.center}>
            <Segment    style={{backgroundColor:"#0c0c0c", borderWidth:0}}>
              <TouchableOpacity style={styles.buttonStyle}>
                 <Text style={styles.buttonText}>Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>props.navigation.navigate('Chat')} style={styles.buttonStyleNotActive}>
                <Text style={styles.buttonText}>Messages</Text>
              </TouchableOpacity>
            </Segment>
          </View>
          <View style={styles.Right}>
          {
            !props.back ? 
            <Button style={styles.settingButton}  onPress={()=> 
                  props.navigation.navigate('Settings')
            }  transparent>
               <Setting style={{marginLeft:20*rem}} width={20*rem} height={25*rem}/>
            </Button>
            :
            <Button style={styles.settingButton} onPress={()=> props.navigation.navigate(props.backScreen)}  transparent>
            <Icon style={{color:'#FF912C',}} type="FontAwesome5"  name="arrow-left"/>  
            </Button>
          }
          </View>
       </View>
     </Animated.View>
  );
}
else{
   return (
    <Animated.View>
    <View transparent  style={styles.header}>
    <StatusBar hidden={false} backgroundColor="#0C0C0E" barStyle="light-content" />
        <Left>
          <Button onPress={()=>props.navigation.openDrawer()} transparent>
            <HandBugger width={30*rem} height={30*rem}/>
          </Button>
        </Left>
        <Body>
          <Segment    style={{backgroundColor:"#0c0c0c", borderWidth:0}}>
            <TouchableOpacity style={styles.buttonStyle}>
               <Text style={styles.buttonText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>props.navigation.navigate('Chat')} style={styles.buttonStyleNotActive}>
              <Text style={styles.buttonText}>Messages</Text>
            </TouchableOpacity>
          </Segment>
        </Body>
        <Right>
        {
          !props.back ? 
          <Button style={styles.settingButton} onPress={()=> 
                props.navigation.navigate('Settings')
          }  transparent>
             <Setting width={20*rem} height={25*rem}/>
          </Button>
          :
          <Button  onPress={()=> props.navigation.navigate(props.backScreen)}  transparent>
          <Icon style={{color:'#FF912C'}, styles.settingButton} type="FontAwesome5"  name="arrow-left"/>  
          </Button>
        }
        </Right>
     </View>
   </Animated.View>
   )
}

})

const styles = EStyleSheet.create(
  Platform.select({
    android:{
     userImage:{
       height: '35rem',
       width:'35rem',
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
     height:"50rem",
     borderWidth:'0rem',
     borderColor:'#0c0c0e',
     alignSelf: 'center',
     marginTop: '0rem',
   },
   left:{
     width:'15%',
   },

   settingButton:{
     marginRight: '20rem',
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
     marginRight:'70rem'
   },
   center:{
     width:'70%',
     marginLeft:'3rem',
     marginTop: '5rem',
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
  marginLeft: '20rem',
},
buttonText:{
  alignSelf:'center',
  color:'#fff',
  marginTop: '10rem',
  fontSize: '14rem',
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
   }
  })
)
export default PostsHeader;