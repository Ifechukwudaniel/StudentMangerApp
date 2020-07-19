import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity, ScrollView,  Text, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../Header";
import { Calendar } from "react-native-calendars";
import moment  from "moment"
const rem = Dimensions.get('screen').width
import Tooltip from 'rn-tooltip';

const Calender = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <View style={[styles.attendanceItem, styles.calenderView]}>
           <Calendar 
            dayComponent={({date, state}) => {
            const day =  moment(date.dateString, "YYYY-MM-DD HH:mm:ss").format("dddd")
            return (
              <TouchableOpacity style={styles.dateItemTouch}>
                <Tooltip width="95%" overlayColor={"rgba(0,0,0,0.6)"} withPointer={true} containerStyle={styles.popover}  pointerColor={"#FFB26a"} backgroundColor="red" 
                  popover={
                    <View style={styles.timeTable}>
                      <View style= {styles.timeTableDay}>
                       <Text style={styles.date}> {day} </Text>
                    </View>
                    <View style= {styles.timeTableContent}>
                    <ScrollView pagingEnabled horizontal={true}  >
                    <View style={styles.timeTableItem}>
                            <Text style={styles.startTime}> 08:00 AM</Text>
                            <Text style={styles.courseCode}> CSC 122 </Text>
                        </View>
                        <View style={styles.timeTableItem}>
                            <Text style={styles.startTime}> 08:00 AM</Text>
                            <Text style={styles.courseCode}> CSC 122 </Text>
                        </View>
                        <View style={styles.timeTableItem}>
                            <Text style={styles.startTime}> 08:00 AM</Text>
                            <Text style={styles.courseCode}> CSC 122 </Text>
                        </View>
                        <View style={styles.timeTableItem}>
                            <Text style={styles.startTime}> 08:00 AM</Text>
                            <Text style={styles.courseCode}> CSC 122 </Text>
                        </View>

                    </ScrollView>
                    </View>
                    </View>
                  }  style={styles.dateItemTouch}>
                    <Text style={styles.dateItem}>
                       {date.day}
                    </Text>
                </Tooltip>
              </TouchableOpacity>
              );
             }}
              hideExtraDays
              monthFormat='MMM yyyy'
              theme={{
              backgroundColor: '#ffffff',
              calendarBackground:"rgba(0,0,0,0)",
              arrowColor: '#FFB26A',
              monthTextColor: 'rgba(255, 255, 255, 0.73)',
              dayTextColor:"#FFB26A",
              textDayHeaderFontSize:15,
              textDayHeaderFontWeight: 'bold',
              textMonthFontSize:18,
              textMonthFontWeight: 'bold',          
            }} 
            />
       </View>
       </View>
  );
};
const styles = EStyleSheet.create({
  container: {
    marginTop: '10rem',
  },
  attendanceItem:{
      width:'100%',
      height:'100%',
      backgroundColor: "rgba(0,0,0,0.2)",
      borderRadius:'10rem',
      shadowColor: "#000",
      shadowOffset: {
            width: '-1.5rem',
            height: '-1.5rem',
      },
      shadowOpacity: 1,
      shadowRadius: '3.84rem',
      elevation: '5rem'
  },
  attendanceItemGroup:{
   marginTop: "40rem",
  //  marginLeft:"10rem",
  //  marginRight:"10rem",
  },
  presentDescription:{
    color:'#fff',
    fontFamily:"Itim",
    alignSelf: 'center',
    fontSize:"17rem"
  },
 
  calenderView:{
    width:"100%",
    height:"100%",
    alignSelf:"center",
    marginTop:"20rem",
    shadowColor: "#000",
      shadowOffset: {
            width: '0rem',
            height: '-4rem',
      },
      shadowOpacity: 1,
      shadowRadius: '3.84rem',
      elevation: '5rem',
      // marginBottom: "100rem",
  },
  dateItem :{
    color: "#FFB26A",
    fontSize:'17rem',
    textAlign:'center',
    lineHeight:'40rem'
    
  },
  dateItemTouch:{
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width:'40rem',
    height:'40rem',
    borderRadius: '5rem',
  },
  popover:{
    width:'95%',
    height:'50rem',
    backgroundColor:'#FFB26A',
    alignSelf: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  timeTable:{
    flexDirection: 'row',
  },
  timeTableDay:{
     width:'15%'
  },
 timeTableContent:{
   flexDirection: 'row',
   width:'75%',
 },
 date:{
  fontSize:'14rem',
  fontWeight: 'bold',
  lineHeight:'45rem'
 },
 timeTableItem:{
   width:'30%',
   borderLeftWidth: '2rem',
   borderColor: " rgba(0, 0, 0, 0.5)",
   borderRightWidth: '2rem',
   backgroundColor:'#FFB26A',
   height:'50rem'
 },
 startTime:{
   fontSize:'12rem',
   textAlign:'center',
   marginTop:'5rem'
 },
 courseCode:{
   fontSize: '14rem',
   textAlign:'center',
   marginTop:'5rem',
   color:'#fff',
   fontWeight:'500'
 }
});
export default Calender;
