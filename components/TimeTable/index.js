import React from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import DateItem from './DateItem'
import Header from '../Header'
import { Container,  Button, Text,  } from 'native-base';


 
const TimeTable = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Header  screenName="Time Table" onBackPress= {()=>navigation.push("Home")} />
         <View style={styles.content}>
           <Text style={styles.dayText}> Today </Text>
            <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
                <DateItem date={16} day={'Mon'} active/>
                <DateItem date={17} day={'Tue'} />
                <DateItem date={18} day={'Wen'} />
                <DateItem date={19} day={'Thu'} />
                <DateItem date={20} day={'Fri'} />
                <DateItem date={21} day={'Sat'} />
                <DateItem date={22} day={'Sun'} />
            </ScrollView>
           <ScrollView style={styles.eventList}>
               
           </ScrollView>
         </View>
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    header:{
        backgroundColor: "#252525" ,
        borderBottomWidth: "0rem",
    },
    title:{
        fontSize: '23rem', 
        color:"#fff",
        fontFamily:"Itim",
    },
    backText:{
        fontSize: '20rem', 
        color:"#fff",
        fontFamily:"Itim",
    },
    icon:{
        color:"#fff"
    },
    content:{
        marginTop: '10rem',
    },
    dayText:{
        fontSize: '30rem', 
        color:"#fff",
        fontFamily:"Itim", 
        marginLeft: '30rem',
    },
    scrollView:{
        marginLeft: '20rem',
        marginTop:"20rem",
        flexDirection: 'row',
    },
    action:{
        height:"100rem",
        width:"330rem",
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius:'10rem',
        borderBottomLeftRadius: '0rem',
        borderTopLeftRadius: '0rem',
        marginTop:'20rem'
    },
    gradient:{
        height:"100rem",
        width:"330rem",
        flexDirection:'row'
    },
    eventList:{
        marginTop:'50rem',  
    },
    line:{
      width:"4rem",
      height:"80%",
      backgroundColor:"#fff",
      marginTop:'10rem'
    },
    timeText:{
        fontSize: '24rem', 
        color:"#fff",
        fontFamily:"Itim", 
        padding: "8rem",
    },
    classText:{
        fontSize: '30rem', 
        padding:"5rem"
    },
    classPlace:{
        paddingLeft: '5rem',
    },
    iconNot:{
        marginTop:'20rem',
        marginLeft:'10rem'
    }
   
})
export default TimeTable;