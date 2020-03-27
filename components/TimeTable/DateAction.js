import React from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import DateItem from './DateItem'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ripple from 'react-native-material-ripple';
import { Audio } from 'expo-av';
import Header from '../Header'
import { Container,  Button, Text,  } from 'native-base'


const playSound=  async ()=>{
    const soundObject = new Audio.Sound();
    try {
        await soundObject.loadAsync(require('../../assets/sounds/beep.mp3'));
        await soundObject.playAsync();
        } catch (error) {
    }
}
 
const DateAction = ({}) => {
    return (
            <View style={styles.action}>
                <LinearGradient style={styles.gradient} colors={['#0F9A47', '#027831']}>
                       <View>
                           <Text style={styles.timeText}> 2:00pm</Text>
                           <Text style={styles.timeText}> 4:00pm</Text>
                       </View>
                        <View style={styles.line}/>
                      <View>
                           <Text style={[styles.timeText, styles.classText]}>Csc 121</Text>
                           <Text style={[styles.timeText, styles.classPlace]}>Lecture room 3</Text>
                       </View>
                       <View>
                            <Button onPress={()=>playSound()} style={styles.iconNot} transparent>
                                <MaterialIcon  size={30} color="#fff" name='notifications-active'/>
                            </Button>
                       </View>
                </LinearGradient>
            </View>
    );
}
const styles = EStyleSheet.create({
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
export default DateAction;