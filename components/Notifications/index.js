import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header'
import { Text,  } from 'native-base';



 
const Notifications = ({navigation}) => {
    return (
        <View style={styles.container}>
             <Header style={styles.headerTextStyle}  screenName="Notifications" onBackPress= {()=>navigation.navigate("Home")} />
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    headerTextStyle:{
        width:"200rem"
    }
})
export default Notifications;