import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity, ScrollView, TextInput } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Header";
import Ripple from "react-native-material-ripple";
import { Icon } from "native-base";
import AttendanceItem from "./AttendanceItem";

const Attendance = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        screenName="Attendance"
        onBackPress={() => navigation.navigate("Home")}
      />
      <View>
          <View style={styles.searchWrapper} >
            <TextInput   placeholder="Search for...." placeholderTextColor="#AEAEAE" style={styles.searchText}/>
            <Ripple style={styles.iconWrapper}>
                <Icon style={styles.icon} name="search"/>
            </Ripple>
          </View>
          <ScrollView style={styles.scrollView}>
            <AttendanceItem navigation={navigation}/>
            <AttendanceItem navigation={navigation}/>
            <AttendanceItem navigation={navigation}/>
            <AttendanceItem navigation={navigation}/>
            <AttendanceItem navigation={navigation}/>
            <AttendanceItem navigation={navigation}/>
            <AttendanceItem navigation={navigation}/>
            <AttendanceItem navigation={navigation}/>
            <AttendanceItem navigation={navigation}/>
          </ScrollView>
      </View>
    </View>
  );
};
const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  searchText:{
     color:"#fff",
     borderWidth: '1rem',
     borderColor:"#fff",
     height:"50rem",
     borderRightWidth: '0rem',
     borderRadius: '5rem',
     fontSize: "18rem",
     padding: "10rem",
     width:"274.56rem",
     fontFamily: 'Itim',
  },
  searchWrapper:{
    marginLeft: '30rem',
    marginRight: "30rem",
    marginTop:"20rem",
    flexDirection: 'row',
  },
  icon:{
    color:"#fff",
    alignSelf: 'center',
  },
  iconWrapper:{
    borderColor:"#fff",
    borderWidth: '1rem',
    width:"50rem",
    justifyContent: 'center',
    left:"-5rem",
    borderRadius: '5rem',
    borderBottomLeftRadius: '0rem',
    borderTopLeftRadius: '0rem'
  },
  scrollView:{
    marginTop: '30rem',
    paddingBottom: "200rem",
    height:"75%"
  }
});
export default Attendance;
