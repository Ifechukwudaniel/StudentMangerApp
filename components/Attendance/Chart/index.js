import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity, ScrollView,Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../Header";

const Chart = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Header headerStyle={styles.headerStyle} onBackPress= {()=>navigation.push("attendance")}/>
        <ScrollView style={styles.scrollView}>
             <Text style={styles.headerAttendance} >Csc 122 Attendance</Text>
             <View style={styles.chartView}>

             </View>
             <View style={styles.chartView}>

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
   headerAttendance:{
      color:"#fff",
      fontFamily: 'Brother1816-Bold',
      fontSize: "24rem",
      margin: '20rem',
   },
   chartView:{
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
      backgroundColor: "#252525",
  },
  scrollView:{
   marginBottom: '20rem',
  }

});
export default Chart;
