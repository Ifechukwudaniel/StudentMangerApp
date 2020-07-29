import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import YouTube from 'react-native-youtube';

import History from  '../../../assets/svg/history.svg';
import UniCalender from '../../../assets/svg/uim_calender.svg'
import Support from '../../../assets/svg/Support.svg'
import Departments from '../../../assets/svg/departments.svg'
import Guidelines from '../../../assets/svg/guilelines.svg'
import Rules from '../../../assets/svg/rules.svg'
import Visit from '../../../assets/svg/visit.svg'
import GuestHeader from '../../../components/GuestHeader';

 
const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  video:{
    width:'95%',
    height:'209rem',
    alignSelf: 'center',
    marginTop: '20rem',
    borderRadius: '10rem',
    marginBottom: '20rem',
    // backgroundColor:'red'
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
    fontSize:'11rem'
  },
  imageSvg:{
    alignSelf: 'center',
  },
  dollar:{
    fontSize:'50rem',
    color:"#FFBCBC",
    fontWeight: 'bold',
  },
  bottomText:{
    fontSize: '13rem',
    marginTop: '30rem',
    marginLeft: '10rem',
    // textAlign:'center'
  }
});
 
class GuestHome  extends Component {
  render() { 
    return (
      <View style={styles.container}>
         <GuestHeader screenName="HOME"  {...this.props}  back={true} />
        <ScrollView style={styles.innerView}>
           <YouTube
             videoId="PdHo5DelsJQ" loop 
             style={styles.video}
             />
             <Text style={styles.text}>  What would you like to know  </Text>
            <View style = {styles.menuList}>
                <TouchableOpacity onPress= {()=>this.props.navigation.navigate('guestHistory')} style={styles.menuItem}>
                    <View style={styles.menuItemImage}>
                      <History style={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> History </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menuItem]}>
                <View style={[styles.menuItemImage,{backgroundColor:': rgba(255, 163, 163, 0.17)'}]}>
                  <Text style={[styles.imageSvg, styles.dollar]}> $ </Text>       
                </View>
                <Text style={styles.menuItemText}> tuition </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.menuItem}>
               <View style={[styles.menuItemImage, {backgroundColor:'rgba(255, 226, 188, 0.29)'}]}>
                      <UniCalender style={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> calender </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.menuItem}>
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
               <TouchableOpacity style={styles.menuItem}>
               <View style={[styles.menuItemImage, {backgroundColor:'#FF912C'}]}>
                       <Visit style ={styles.imageSvg}/>
                    </View>
                    <Text style={styles.menuItemText}> request visit</Text>
               </TouchableOpacity>
            </View>
            <Text style={[styles.text, styles.bottomText]}>QUICKLY VIEWS AROUND BEnson Idahosa university </Text>
            
        </ScrollView>
      </View>
    );
  }
}
 
export default GuestHome ;