import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity, ScrollView, TextInput } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../Header";

const Chart = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Header headerStyle={styles.headerStyle} onBackPress= {()=>navigation.push("attendance")}/>
    </View>
  );
};
const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
   headerStyle :{
     backgroundColor: 'transparent',
   }
});
export default Chart;
