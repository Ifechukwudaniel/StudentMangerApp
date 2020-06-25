import React, { useState } from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
const AttendanceListItem = ({present , absent ,courseCode}) => {
  return (
      <TouchableOpacity  style={styles.container}>
       <View style={styles.courseCodeView}>
         <Text style={styles.courseCode}>   {courseCode} </Text>
       </View> 
       <View style={styles.barsWrapperAll}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.presentText}> Attendented: {present} </Text>
          <Text style={styles.absentText}> Missed:{absent} </Text>
        </View>
          <View style={styles.barsWrapper}>
              <View style={[styles.presentBar,{width:`${present*100/(present+absent)}%`}]}>
              </View>
              <View style={[styles.absentBar, {width:`${absent*100/(present+absent)}%`}]}>
              </View>
          </View> 
       </View>
      </TouchableOpacity>
  );
}
const styles = EStyleSheet.create({
    container:{
      width:'100%',
      backgroundColor: " rgba(255, 255, 255, 0.1)",
      height:'80rem',
      flexDirection:'row'
    },
    courseCodeView:{
      width:'30%',
      height:'100%',
      justifyContent: 'center',
    },
    courseCode:{
      alignSelf: 'center',
      fontSize: "23rem",
      color:'#fff',
      fontWeight:'500'
    },
    presentBar:{
      height:'50rem',
      backgroundColor:"#5DDA80"
    },
    absentBar:{
      height:'50rem',
      backgroundColor:'#FF7B79'
    },
    barsWrapper:{
       width:'100%',
       flexDirection:'row'
    },
    barsWrapperAll:{
        width:'70%',
       flexDirection: 'column',
    },
    presentText:{
      color:'#5dda80',
      marginTop: '10rem',
    },
    absentText:{
      color:'#ff7b79',
      marginTop: '10rem',
      marginLeft: '80rem',
    }
});
 
export default AttendanceListItem;