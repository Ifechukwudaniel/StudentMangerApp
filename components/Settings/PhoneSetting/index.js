import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Header from '../../Header'
import Colors from '../../../constants/Colors'
import {LinearGradient} from 'expo-linear-gradient'

 
const PhoneSetting = ({navigation}) => {
    return (
        <View style={styles.container}>
             <Header  style={styles.headerTextStyle} screenName="Phone Number" onBackPress= {()=>navigation.push("Settings")} />
             <View style={styles.contentItem}>
                     <Text style={[styles.courseTitle]}> Personal phone number </Text>
                      <TextInput keyboardType="numeric" style={[styles.textArea,styles.textInput]}/>     
                 </View> 
                 <View style={styles.contentItem}>
                     <Text style={[styles.courseTitle]}> Parent phone number </Text>
                      <TextInput placeholder="optional" placeholderTextColor="#fff" keyboardType="numeric" style={[styles.textArea,styles.textInput]}/>     
                 </View> 
                 <View style={styles.contentItem}>
                     <Text style={[styles.courseTitle]}> Guardian  phone number </Text>
                      <TextInput placeholder="optional" placeholderTextColor="#fff" keyboardType="numeric" style={[styles.textArea,styles.textInput]}/>     
                 </View> 
                 <View style={styles.contentItem}>
                     <Text style={[styles.courseTitle]}> Next Of Kin  phone number </Text>
                      <TextInput placeholder="optional" placeholderTextColor="#fff" keyboardType="numeric" style={[styles.textArea,styles.textInput]}/>     
                 </View>
                 <TouchableOpacity style={[styles.button,styles.buttonWrapper]}>
                          <LinearGradient style={styles.button} colors={['#0F9A47', '#027831']}>
                               <Text style={[styles.courseTitle, styles.buttonText]}> Submit </Text>
                      </LinearGradient>
                 </TouchableOpacity>
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    headerTextStyle:{
        width:'200rem'
    },
    courseTitle:{
        fontSize: '20rem',
        color:"#fff",
        fontFamily:"Itim",
        marginLeft: "2rem",
        lineHeight:"20rem",
        paddingTop: '4rem',
    },
    contentItem:{
      marginTop: '40rem',
    },
    button:{
      width:"170rem",
      justifyContent: 'center',
      alignSelf: 'center',
      overflow: 'hidden',
      height:"36rem",
      borderRadius:"10rem",
    },
    buttonWrapper:{
      marginTop:"30rem",
    //   marginBottom: "300rem",
    },
    buttonText:{
      justifyContent: 'center',
      alignSelf: 'center',
    },
    textArea:{
      color:"#fff",
      borderWidth: '1rem',
      borderColor: "#fff",
      marginLeft: "10rem",
      marginRight: '10rem',
      marginTop: "6rem",
      borderRadius: '5rem',
      fontFamily:"Itim",
      padding:'0rem',
      height:"125rem",
      paddingTop:"5rem",
      paddingLeft: '10rem',
      paddingRight: '5rem',
    },
    textInput:{
      height:"30rem",
    } ,
})
export default PhoneSetting;