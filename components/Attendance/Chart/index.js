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
        name: 'Left',
        attendance: 80,
        color: '#fff',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Present',
        attendance: 10,
        color: '#126AF3',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Absent',
        attendance: 10,
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
             <View style={styles.pieChartWrapper}>
             <PieChart
                data={pieData}
                width={330*rem} 
                height={250*rem}
                chartConfig={{
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style:{
                      flex:1
                    }
                  }}
                hasLegend={false}
                accessor="attendance"
                paddingLeft="40"
                backgroundColor="#252525"
              />
             </View>
             <View style={styles.description}>
                <View style={[styles.flexRow]}> 
                    <View style={styles.present}/>
                    <Text style={styles.Text}> {pieData[1].attendance}% Present</Text>
                </View>
                <View style={[styles.flexRow]}>
                    <View style={styles.absent}/>
                    <Text style={styles.Text}> {pieData[2].attendance}%  Absent</Text>
                </View>
             </View>
             <View style={styles.description}>
                <View style={[styles.flexRow]}> 
                    <View style={[styles.present, {backgroundColor:"#fff"}]}/>
                    <Text style={styles.Text}> {pieData[0].attendance}% Left</Text>
                </View>
             </View>
             </View>
             <View style={styles.chartView}>
                <LineChart
                  data={line}
                  width={350*rem} 
                  height={330*rem}
                  chartConfig={{
                    backgroundColor: '#252525',
                    backgroundGradientFrom: '#252525',
                    backgroundGradientTo: '#252525',
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
    shadowColor: "#3F4141",
      shadowOffset: {
            width: '0rem',
            height: '-4rem',
      },
      shadowOpacity: 1,
      shadowRadius: '3.84rem',
      elevation: '5rem',
      backgroundColor: "#252525",
      overflow: 'hidden',
      borderRadius: '10rem',
  },
  scrollView:{
   marginBottom: '20rem',
  },
  graph:{
    height:"300rem",
    marginTop:"30rem",
    alignSelf:"center",
    marginRight: "30rem",
  },
  pieChartWrapper:{
    marginLeft:"50rem"
  },
  description:{
    flexDirection: 'row',
    marginTop: '10rem',
  },
  Text:{
     color:"#fff",
     fontFamily:"Itim",
     fontSize:"16rem"
  },
  present:{
    width:'20rem',
    backgroundColor:"#126AF3",
    height:"20rem",
  },
  absent:{
    width:'20rem',
    backgroundColor:'#EA3939',
    height:"20rem"
  },
  flexRow:{
    flexDirection:"row",
    marginLeft:"30rem"
  }
  
});
export default Chart;
