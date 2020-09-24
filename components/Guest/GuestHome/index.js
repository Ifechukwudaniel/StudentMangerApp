import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ActivityIndicator, TextInput, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import YouTube from 'react-native-youtube-iframe';

import History from  '../../../assets/svg/history.svg';
import UniCalender from '../../../assets/svg/uim_calender.svg'
import Support from '../../../assets/svg/Support.svg'
import Departments from '../../../assets/svg/departments.svg'
import Guidelines from '../../../assets/svg/guilelines.svg'
import Rules from '../../../assets/svg/rules.svg'
import Visit from '../../../assets/svg/visit.svg'
import Email from '../../../assets/svg/email.svg'
import Phone from '../../../assets/svg/phone.svg'
import GuestHeader from '../../../components/GuestHeader';
import { CarouselComponent } from '../../Carousel';
const {width } =Dimensions.get("window")
import RBSheet from "react-native-raw-bottom-sheet";
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import SendSMS from 'react-native-sms'
import { sendEmail } from '../../../util';


 
const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  video:{
    width:width,
    height:'209rem',
    alignSelf: 'center',
    borderRadius: '10rem',
    backgroundColor:'red'
  },
  videoWrapper:{
    marginBottom: '20rem',
    marginTop: '20rem',
  },
  text:{
   color:'#fff',
   marginLeft: '5rem',
   fontSize: '14rem',
   textTransform: 'uppercase',
   fontWeight: 'bold',
   textDecorationLine:'underline'
  },
  innerView:{
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingBottom:'40rem'
  },
  menuList :{
     width:'95%',
     height:'90rem',
    //  backgroundColor: 'red',
     alignSelf: 'center',
     marginTop: '20rem',
     flexDirection: 'row',
  }, 
  menuItem:{
    width:'25%',
    height:'90rem',
    // backgroundColor:'blue'
  },
  menuItemImage:{
    backgroundColor:' rgba(196, 201, 255, 0.35);',
    width:'70rem',
    height:'70rem',
    borderRadius: '20rem',
    alignSelf:'center',
    justifyContent: 'center',
  },
  menuItemText:{
    color:'#fff',
    textAlign:'center',
    // marginLeft: '4rem'
    marginTop: '5rem',
    textTransform:'uppercase',
    fontWeight:'bold',
    fontSize:'11.4rem'
  },
  imageSvg:{
    alignSelf: 'center',
  },
  dollar:{
    fontSize:'50rem',
    color:"#Fff",
    fontWeight: 'bold',
  },
  bottomText:{
    fontSize: '14rem',
    marginTop: '30rem',
    marginLeft: '10rem',
    // textAlign:'center'
  },
  textInput:{
   color:"rgba(255, 255, 255, 0.93)",
   fontSize:'16rem',
   marginTop:'15rem',
   fontWeight: 'bold',
  },
  inputGroup:{
    alignSelf: 'center',
    backgroundColor:' rgba(196, 196, 196, 0.4)',
    width:'90%',
    height:'55rem',
    marginTop:"20rem",
    borderRadius:'8rem',
    paddingLeft:'10rem',
  },
  buttonList:{
     flexDirection: 'row',
     height:'100rem',
     width:'90%',
     justifyContent: 'space-between',
    marginTop: '20rem',
    alignSelf: 'center',
  },
  button:{
     width:'150rem',
     height:'50rem',
     backgroundColor:'#FF912C',
     borderRadius: '10rem',
     justifyContent: 'center',
  },
  buttonText:{
    alignSelf: 'center',
    color:"rgba(255, 255, 255, 0.93)",
    fontSize:'16rem',
    fontWeight: 'bold',
    textTransform:'capitalize'
  }
});
 
class GuestHome  extends Component {
  state={
    email:'',
    phone:'',
    visitPurpose:''
  }

 sendSms=()=>{
    SendSMS.send({
      body: 'Please follow https://aboutreact.com',
      recipients: ['0123456789'],
      successTypes: ['sent', 'queued'],
  }).then((data)=>{
     console.log(data)
  })
  .catch((e)=>{
     console.log(e)
  });
  } 

  sendEmailMain=()=>{
    sendEmail(
      'test@gmail.com',
      'Greeting!',
      'I think you are fucked up how many letters you get.'
    ).then(() => {
        console.log('Our email successful provided to device mail ');
    })
    .catch((err)=>console.log(err))
  }

  render() { 
    return (
      <View style={styles.container}>
        <GuestHeader screenName="HOME"  {...this.props}  back={true} />
        <ScrollView style={styles.innerView}>
        <View style={styles.videoWrapper}>
        <View style={styles.video}>
           <YouTube
                videoId={"PdHo5DelsJQ"} 
                loop 
                height={300}
                width={400}
               style={styles.video}
             />
        </View>
        </View>
             <Text style={styles.text}>What would you like to know  </Text>
            <View style = {styles.menuList}>
                <TouchableOpacity onPress= {()=>this.props.navigation.navigate('guestHistory')} style={styles.menuItem}>
                    <View style={styles.menuItemImage}>
                      <History style={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> History </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress= {()=>this.props.navigation.navigate('guestTuition')} style={[styles.menuItem]}>
                <View style={[styles.menuItemImage,{backgroundColor:': rgba(255, 163, 163, 0.17)'}]}>
                  <Text style={[styles.imageSvg, styles.dollar]}> $ </Text>       
                </View>
                <Text style={styles.menuItemText}> Tuition </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>{
               }} style={styles.menuItem}>
               <View style={[styles.menuItemImage, {backgroundColor:'rgba(255, 226, 188, 0.29)'}]}>
                      <UniCalender style={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> calender </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>this.RBSheetSupport.open()} style={styles.menuItem}>
               <View style={[styles.menuItemImage, {backgroundColor:'rgba(170, 237, 189, 0.35)'}]}>
                      <Support style={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> support </Text>
               </TouchableOpacity>
            </View>
            <View style = {styles.menuList}>
            <TouchableOpacity onPress= {()=>this.props.navigation.navigate('guestDepartments')}  style={styles.menuItem}>
                    <View style={[styles.menuItemImage,  {backgroundColor:' rgba(254, 255, 196, 0.35)'}]}>
                        <Departments style= {styles.imageSvg}/>
                    </View>
                    <Text style={[styles.menuItemText]}>Departments</Text>
                </TouchableOpacity>
                <TouchableOpacity   onPress= {()=>this.props.navigation.navigate('guestGuidelines')}  style={styles.menuItem}>
                   <View style={[styles.menuItemImage,{backgroundColor:'rgba(255, 123, 250, 0.17);'}]}>
                         <Guidelines style={styles.imageSvg}/>
                        </View>
                        <Text style={styles.menuItemText}> guidelines</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress= {()=>this.props.navigation.navigate('guestRules')} style={styles.menuItem}>
                    <View style={[styles.menuItemImage, {backgroundColor:' rgba(188, 255, 251, 0.29);'}]}>
                       <Rules style={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> rules </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>this.RBSheet.open()} style={styles.menuItem}>
               <View style={[styles.menuItemImage, {backgroundColor:'#FF912C'}]}>
                       <Visit style ={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> request visit</Text>
               </TouchableOpacity>
            </View>
            <Text style={[styles.text, styles.bottomText]}>QUICKLY VIEWS AROUND BEnson Idahosa university </Text>
            <CarouselComponent/>
            <CarouselComponent/>
            <RBSheet
            closeOnDragDown
               ref={ref => {
                  this.RBSheet = ref;
                }}
               height={350*rem}
              openDuration={250}
              customStyles={{
              container: {
                backgroundColor:'#1E1E1E'
              }
              }}
            >
            <View style={styles.inputGroup}>
              <TextInput placeholder="Your Mail Address" title="" placeholderTextColor=" rgba(255, 255, 255, 0.73)" style={styles.textInput}/>
            </View>
            <View style={styles.inputGroup}>
             <TextInput placeholder="Phone Number" placeholderTextColor=" rgba(255, 255, 255, 0.73)" style={styles.textInput}/>
             </View>
             <View style={styles.inputGroup}>
             <TextInput multiline placeholder="Purpose Of Visit" placeholderTextColor=" rgba(255, 255, 255, 0.73)" style={styles.textInput}/>
            </View>
           <View style={styles.buttonList}>
              <TouchableOpacity onPress={()=>{
                   this.sendSms()  
              }} style={styles.button}>
                  <Text style={styles.buttonText}> SEnd AS SMS  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={()=>this.sendEmailMain()}
               style={styles.button}>
                  <Text style={styles.buttonText}> SEND as EmAIL  </Text>
              </TouchableOpacity>
           </View>
        </RBSheet>  
        <RBSheet
            closeOnDragDown
               ref={ref => {
                  this.RBSheetSupport = ref;
                }}
               height={170*rem}
              openDuration={250}
              customStyles={{
              container: {
                backgroundColor:'#1E1E1E'
              }
              }}
            >
             <View style = {[styles.menuList, {justifyContent:'space-around'}]}>
             <TouchableOpacity onPress= {()=>{}} style={styles.menuItem}>
                    <View style={[styles.menuItemImage, {backgroundColor:'#268237'}]}>
                      <Email style={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> SEND A MAIL  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress= {()=>{}} style={[styles.menuItem]}>
                    <View style={[styles.menuItemImage, {backgroundColor:' rgba(93, 218, 128, 0.32)'}]}>
                      <Phone style={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> call </Text>
                </TouchableOpacity>
             </View>
        </RBSheet>  
        </ScrollView>
      </View>
    );
  }
}
 
export default GuestHome ;