import React, { useState } from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
const AttendanceItem = ({navigation}) => {
  const [view, setOpenView] = useState(false)
  return (
      <TouchableOpacity onPress={()=>navigation.push("Calender")} style={[styles.container]}>
         <View style={[styles.shadow, styles.flexRow]}>
            <View style={styles.courseGroup}>
              <Text style={styles.courseCode}>Csc 121 </Text>
              <Text style={styles.courseTitle}  ellipsizeMode='tail' numberOfLines={1} >introduction to maths and physic </Text>
            </View>
            <View style={styles.left}>
              <Text style={styles.leftNumber}>00</Text>
              <Text style={styles.leftText}>Left</Text>
            </View>
            <View style={styles.left}>
              <Text style={[styles.leftNumber, styles.presentText]}>07</Text>
              <Text style={[styles.leftText]}>Present</Text>
            </View>
            <View style={styles.left}>
              <Text style={[styles.leftNumber, styles.absentText]}>03</Text>
              <Text style={styles.leftText}>Absent</Text>
            </View>
         </View>
      </TouchableOpacity>
  );
}
const styles = EStyleSheet.create({
  container: {
    width:'350rem',
    height:'96rem',
    backgroundColor: "#252525",
    borderRadius:'10rem',
    shadowColor: "#3F4141",
    shadowOffset: {
          width: '0rem',
          height: '-4rem',
    },
    shadowOpacity: '1rem',
    shadowRadius: '3.84rem',
    elevation: 5,
    alignSelf: 'center',
    marginTop: '30rem',
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
        width: '10rem',
        height: '3rem',
  },
  shadowOpacity: 1,
  shadowRadius: '3.84rem',
  flex: 1,
  },
  flexRow:{
    flexDirection: 'row',
  },
  courseCode:{
    color:"#fff",
    fontFamily: 'Brother1816-Bold',
    fontSize: '24rem',
  },
  courseTitle:{
    color:"#fff",
    fontFamily: 'Itim',
    fontSize: '16rem',
    width:'150rem'
  },
  courseGroup:{
    marginLeft: '18rem',
    marginTop:'20rem'
  },
  left:{
   marginTop:"10rem",
   marginLeft:"7rem",
   width:"50rem"
  },
  leftNumber:{
    color:"#fff",
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
    fontSize: '33rem',
    width:'170rem'
  },
  leftText:{
    color:"#fff",
    fontFamily: 'Itim',
    marginTop:'5rem',
    textAlign:"center",
    width:"47rem",
  },
  presentText:{
    color:"#126AF3"
  },
  absentText:{
    color:"#EA3939"
  }
});
 
export default AttendanceItem;