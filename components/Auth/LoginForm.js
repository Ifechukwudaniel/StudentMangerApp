import React, { Component } from 'react';
import {View, Text, TextInput, Modal,Image,Keyboard, Dimensions, Animated, Easing, Platform,TouchableOpacity, AsyncStorage} from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet'
import {Icon} from 'native-base'
import Drag from '../../assets/svg/drag.svg'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380;
import  { showMessage } from "react-native-flash-message";
import * as Animatable from 'react-native-animatable';
import Keys from '../../constants/Keys';
const styles = EStylesheet.create({
      wrapper:{
       flex:1,
      },
      logoImage:{
         alignSelf: 'center',
         position: "relative",
         marginTop:'100rem',
         height:'200rem',
         width:'280rem',
         marginBottom: '40rem',
      },
      '@media (min-height: 500) and (max-height: 700)': {
        logoImage:{
          marginTop:'80rem',
          height:'150rem',
          width:'150rem',
          alignSelf: 'center',
          position: "relative",
          marginBottom: '15rem',
       },
       loginText:{
        color:"#fff",
        fontSize: '35rem',
        fontWeight: 'bold',
        alignSelf:'center',
        marginBottom: '0rem',
       },
       userImage :{
        width:"230rem",
        height:"230rem",
        alignSelf: 'center',
        borderRadius: '20rem',
        borderWidth: "3rem",
        borderColor: "#FF912C",
        marginTop:'70rem'
      },
      },
      loginText:{
          color:"#fff",
          fontSize: '50rem',
          fontWeight: 'bold',
          alignSelf:'center',
          marginBottom: '0rem',
      },
      swipeText:{
        color:"#fff",
        fontSize: '13rem',
        fontWeight: 'bold',
        alignSelf:'center',
        marginBottom: '5rem',
      },
      form:{
       marginTop: '10rem',
      },
      textInput:{
        height:'20rem',
        backgroundColor: "#18181D",
        marginLeft: '15rem',
        marginRight: '15rem',
        marginTop:'23rem',
        height:'60rem',
        borderRadius: '5rem',
        fontSize: '18rem',
        color:"#fff",
        paddingLeft: "20rem",
      },
      forgotPassword:{
       alignSelf: 'center',
       color:'rgba(255,255,255,0.47)',
       marginTop:'25rem'
      },
      icon:{
        color:'rgba(255,255,255,0.47)',
        fontSize:'15rem'
      },
      drag:{
         position:"relative",
         flex: 1,
         alignSelf: 'center',
         justifyContent: 'flex-end',
         marginBottom: "15rem",
      },
      modal :{
        flex:1,
        backgroundColor:"#0F0F12"
      },
      welcomeTextView:{
         flex:20
      },
      userProfile:{
        flex:60
      },

      welcomeText:{
        color:"rgba(255,255,255,0.48)",
        alignSelf: 'center',
        fontSize: '18rem',
        fontWeight: 'bold',
        marginTop: '100rem',
      },
      userImage :{
        width:"270rem",
        height:"270rem",
        alignSelf: 'center',
        borderRadius: '20rem',
        borderWidth: "3rem",
        borderColor: "#FF912C",
        marginTop:'100rem'
      },
      loading:{
        flex:20,
          alignSelf: 'center',
         justifyContent: 'flex-end',
         marginBottom: "50rem",
      },
      loadingText:{
        color:"#ff9120",
        alignSelf: 'center',
        fontSize: '18rem',
        fontWeight: 'bold'
      },
      userName:{
        color:"#ffffff",
        alignSelf: 'center',
        fontSize: '20rem',
        fontWeight: 'bold',
        marginTop: '40rem',
        
      },
      viewOne:{
        flex: 50,
        height:'50%'
        
      },
      viewTwo:{
        flex: 30,
        height:'30%'
      },
      viewThree:{
        flex:20,
        height:'20%'
      }
});
 
class LoginForm extends Component {
    state={
        matricNumber:"",
        password:"",
        errors:[],
        scroll:false,
        loadingText:'Loading Content ',
        count:0,
        logoSize: new Animated.Value(0),
        parentYPosition:0
    }
    
    UNSAFE_componentWillMount () {
      this.keyboardWillShowSub = Keyboard.addListener("keyboardDidShow", this.keyboardWillShow);
      this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
    }
  
    UNSAFE_componentWillUnmount() {
      this.keyboardWillShowSub.remove();
      this.keyboardWillHideSub.remove();
    }
    keyboardWillShow = (event) => {
        Animated.timing(this.state.logoSize,{
          toValue:1,
          duration:Platform.OS==="ios"?  event.duration : 700,
          easing:Easing.ease,
          useNativeDriver:true
        }).start()
    };
  
    keyboardWillHide = (event) => {
      Animated.timing(this.state.logoSize,{
        toValue:0,
        duration:Platform.OS==="ios"?  event.duration : 700,
        easing:Easing.ease,
        useNativeDriver:true
      }).start()
    };


    handleMatricNumber = (value)=>{
       this.setState({matricNumber:value})
    }
   
    handlePassword = (value)=>{
        this.setState({password:value})
     }

     handleLoadingText= ()=>{
        let {count, loadingText} = this.state
       let interval=   setInterval(()=>{
           if(count<5){
            this.setState({count:++count,loadingText:loadingText.concat('.')},()=>{
            clearInterval(interval)
            }) 
           }
           else {
            this.setState({count:0, loadingText:'Loading Content '}, ()=>{
              clearInterval(interval)
            })
           }
        },500)
     }

     goHome= ()=>{
      AsyncStorage.setItem(Keys.department,JSON.stringify({_id:'5e8e31f8e1a20dca09a7fef4'}))
      .then(()=>{
        AsyncStorage.setItem(Keys.level,JSON.stringify({_id:"5e8e320de1a20dca09a7fef5"}))
        .then(()=>{
          this.props.goToHome()
        })
      })
    }

    handleSlidUp= ()=>{
     const {matricNumber, password}= this.state;
      if (matricNumber.length<5) {
          showMessage({
            type: "danger",backgroundColor:"#FF3051",icon:"danger", 
            message:"Matric Number is to short",
            titleStyle:{textAlign:"center"}, textStyle:{textAlign:"center"}
          }); 
          return
      }
      if (password.length===0) {
        showMessage({
          type: "danger",backgroundColor:"#FF3051", icon:"danger",
          message:"Password cannot be empty",
          titleStyle:{textAlign:"center"},
          textStyle:{textAlign:"center"},
        }); 
        return 
      }                                                                                                                                        
      this.setState({scroll:true})

    }



    render() { 
        return (
          <GestureRecognizer
          style={styles.wrapper}
          onSwipe={(gestures)=>{
            const {SWIPE_UP} =  swipeDirections;
              this.handleSlidUp()
          }}
        > 
              <View style={styles.wrapper}>
                {this.handleLoadingText()}
                      <Animated.View 
                          onLayout={event => {
                        }}
                       style={[styles.viewOne, {
                         ...Platform.select({
                           ios:{
                              transform: [
                              {
                                  scaleX: this.state.logoSize.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [1, 0.7]
                                  })
                              },
                              {
                                  scaleY: this.state.logoSize.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [1, 0.7]
                                  })
                              }
                          ],
                         },
                         android:{
                          opacity:this.state.logoSize.interpolate({
                              inputRange:[0,1],
                              outputRange:[1,0]
                           }),
                          transform: [
                              {
                                  scaleX: this.state.logoSize.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [1, 0.7]
                                  })
                              },
                              {
                                  scaleY: this.state.logoSize.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [1, 0.7]
                                  })
                              }
                          ],
                         }
                         })
                      }]}>
                      <Animated.Image  style={[styles.logoImage,{
                        }]} resizeMode="contain"  source={ require('../../assets/images/Logo/Logo.png')}/>
                          <Animated.Text style={[styles.loginText, 
                          {
                            opacity:this.state.logoSize.interpolate({
                              inputRange:[0,1],
                              outputRange:[1,0]
                            })
                          }
                        ]} >Login </Animated.Text>

                      </Animated.View>
                    <Animated.View   style={[styles.form, styles.viewTwo, {
                         transform: [
                            {
                                translateY: this.state.logoSize.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -100-this.state.parentYPosition]
                                })
                            }
                        ],
                          
                    }]}>
                          <TextInput onChangeText= {this.handleMatricNumber} placeholderTextColor="#fff" style={styles.textInput} placeholder='Matric No'/>
                          <TextInput onChangeText={this.handlePassword} secureTextEntry={true}  placeholderTextColor='#fff' style={styles.textInput} placeholder="Password"/>
                          <TouchableOpacity>
                                <Text  style={styles.forgotPassword}> Forget Password ? <Icon  style={styles.icon} type="FontAwesome5" name="hand-point-up" /></Text>
                          </TouchableOpacity>
                      </Animated.View>
                      {
                           Platform.OS==="ios"?
                            (
                              <View style={[styles.drag,styles.viewThree]} >
                                <Drag style={{alignSelf:"center"}}/>
                               <Text style={styles.swipeText}> Swipe up to Register</Text>
                             </View>
                            )
                            :(
                             <TouchableOpacity>
                              <Text> SignUp </Text>
                             </TouchableOpacity>

                            )
                        }
                      <Modal visible={this.state.scroll} presentationStyle="fullScreen" animationType="slide" >
                        <View  style={styles.modal}>
                            <View style={styles.welcomeTextView}>
                                <Text style={styles.welcomeText}>Welcome Back  <Icon  type="AntDesign" style={{color:"#46EC74", fontSize:20}} name="check"/> </Text>
                            </View>
                            <TouchableOpacity onPress={this.goHome} style={styles.userProfile}>
                                 <Image  style={styles.userImage} source={require('../../assets/images/image.jpeg')} resizeMode="cover"/>
                                 <Text style={styles.userName}> Ifechukwu Daniel </Text>
                            </TouchableOpacity>
                             <View style={styles.loading}>
                               <Text style={styles.loadingText}> {this.state.loadingText}</Text>
                             </View>
                        </View>
                      </Modal>
                  </View> 
                  </GestureRecognizer>
        );
    }
}
 
export default LoginForm;