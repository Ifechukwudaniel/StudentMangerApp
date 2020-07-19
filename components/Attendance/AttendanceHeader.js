import React, { useState } from 'react';
import {TouchableOpacity, View, Text, Dimensions} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import Check from '../../assets/svg/check.svg'
import Close from '../../assets/svg/close.svg'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380

const AttendanceHeader = ({title , courseCode}) => {
  return (
      <View  style={styles.container}>
        <View style={styles.left} >
            <Text style={styles.date}>  Course Code</Text>
        </View>
        <View style={styles.center}>
           <Text style={styles.contentText}> {`${title}(${courseCode})`}</Text>
        </View>
      </View>
  );
}
const styles = EStyleSheet.create({
  container:{
    width:'95%',
    height:'30rem',
    flexDirection:'row',
    alignSelf: 'center',
    marginBottom: '2rem',
    marginTop: '40rem',
  },
  left:{
    backgroundColor:'rgba(196, 196, 196, 0.04);',
    width:'30%'
  },
  center:{
   width:'70%',
   backgroundColor:'rgba(0, 0, 25, 0.43);'
  },
  date:{
     color:'#5DDA80',
     fontSize:'12rem',
     lineHeight:'20rem',
     textAlign:'center'
  },
  contentText:{
    color:'rgba(255, 251, 251, 0.63)',
    fontSize:'12rem',
    lineHeight:'20rem',
    textAlign:'center',
  }
});
 
export default AttendanceHeader;