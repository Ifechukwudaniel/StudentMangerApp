import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity, ScrollView,Text, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../Header";
import {
  LineChart,
  PieChart
} from 'react-native-chart-kit'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth / 380;

const line = {
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          data: [2, 4,0 ],
          strokeWidth: 1, 
        },
      ],
    };

    const pieData = [
      {
        name: 'Present',
        attendance: 70,
        color: '#126AF3',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Absent',
        attendance: 30,
        color: '#EA3939',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      }
    ];

const Chart = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Header headerStyle={styles.headerStyle} onBackPress= {()=>navigation.push("attendance")}/>
        <ScrollView style={styles.scrollView}>
             <Text style={styles.headerAttendance} >Csc 122 Attendance</Text>
             <View style={styles.chartView}>
              <PieChart
                data={pieData}
                 width={320*rem} 
                height={330*rem}
                chartConfig={{
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  }}
                accessor="attendance"
                backgroundColor="transparent"

              />
             </View>
             <View style={styles.chartView}>
                <LineChart
                  data={line}
                  width={320*rem} 
                  height={330*rem}
                  chartConfig={{
                    backgroundColor: "red",
                    decimalPlaces:0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
                  }}
                  bezier
                  style={styles.graph}/>
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
    shadowColor: "#000",
      shadowOffset: {
            width: '0rem',
            height: '-4rem',
      },
      shadowOpacity: 1,
      shadowRadius: '3.84rem',
      elevation: '5rem',
      backgroundColor: "#000",
  },
  scrollView:{
   marginBottom: '20rem',
  },
  graph:{
    height:"300rem",
    borderRadius:"30rem",
  }

});
export default Chart;
