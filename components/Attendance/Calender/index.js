import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity, ScrollView,  Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../Header";
import { Calendar } from "react-native-calendars";

const Calender = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <Header headerStyle={styles.headerStyle} onBackPress= {()=>navigation.push("attendance")}/>
       <ScrollView>
       <View>
          <Text style={styles.courseCode}>Csc 122</Text>
          <Text style={styles.courseTitle} numberOfLines={1} ellipsizeMode='tail'>Introduction to Maths and Biology</Text>
       </View>
       <View style={[styles.flexRow, styles.attendanceItemGroup]}>
          <View style={styles.attendanceItem}>
            <Text style={styles.presentText}>07</Text>
            <Text style={styles.presentDescription}>Present</Text>
          </View>
          <View style={styles.attendanceItem}>
             <Text style={[styles.presentText, styles.absentText]}>03</Text>
             <Text style={styles.presentDescription}>Absent</Text>
          </View>
          <View style={styles.attendanceItem}>
            <Text style={[styles.presentText, styles.totalText]}>10</Text>
            <Text style={styles.presentDescription}>Total Letures</Text>
          </View>
       </View>
       <Text style={[styles.presentDescription,styles.notify]}>Please note that the semester has not yet ended , and the total number of classes for the semester in   10 </Text>
       <View style={[styles.attendanceItem, styles.calenderView]}>
           <Calendar 
              hideExtraDays
              monthFormat='MMM yyyy'
              theme={{
              calendarBackground:"#252525",
              arrowColor: '#FFF',
              monthTextColor: '#fff',
              textMonthFontFamily: 'Itim',
              dayTextColor:"#fff",
              textDayFontFamily:"Itim",
              textDayHeaderFontFamily: 'Brother1816-Bold',
              textDayHeaderFontSize:17,
              textMonthFontSize:18,
              textSectionTitleColor: '#FFF',
              todayTextColor:"red"
              

            }} />
       </View>

       </ScrollView>
    </View>
  );
};
const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle :{
    backgroundColor: 'transparent',
  },
  courseCode:{
      color:"#fff",
      fontFamily: 'Brother1816-Bold',
      fontSize: '30rem',
      textAlign:'center',
      lineHeight:"30rem"
  },
  courseTitle:{
    color:"#fff",
    fontFamily: 'Itim',
    fontSize: '15rem',
    textAlign:'center',
    marginLeft: '20rem',
    marginRight: '20rem',
    lineHeight:"20rem"
  },
  flexRow:{
    flexDirection: 'row',
  },
  attendanceItem:{
      width:'100rem',
      height:'100rem',
      backgroundColor: "#252525",
      borderRadius:'10rem',
      shadowColor: "#3F4141",
      shadowOffset: {
            width: '-1.5rem',
            height: '-1.5rem',
      },
      shadowOpacity: 1,
      shadowRadius: '3.84rem',
      elevation: '5rem',
      marginLeft: '10rem',
      marginRight:'10rem'
  },
  attendanceItemGroup:{
   marginTop: "40rem",
   marginLeft:"10rem",
   marginRight:"10rem",
  },
  presentText:{
    color:"#126AF3",
    fontFamily: 'American TypeWriter',
    fontSize: '40rem',
    textAlign:'center',
    fontWeight: 'bold',
    marginTop: "17rem",
    marginRight:"15rem",
    marginLeft:"15rem"
  },
  absentText:{
   color:"#EA3939"
  },
  totalText:{
   color:"#fff"
  },
  presentDescription:{
    color:'#fff',
    fontFamily:"Itim",
    alignSelf: 'center',
    fontSize:"17rem"
  },
  notify:{
   width:"90%",
   fontSize:"14rem",
   marginTop: "20rem",
  },
  calenderView:{
    width:"320rem",
    height:"330rem",
    alignSelf:"center",
    marginTop:"20rem",
    shadowColor: "#3F4141",
      shadowOffset: {
            width: '0rem',
            height: '-4rem',
      },
      shadowOpacity: 1,
      shadowRadius: '3.84rem',
      elevation: '5rem',
      marginBottom: "100rem",
  }
});
export default Calender;
