import React from 'react';
import {View} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import NotifyButton from './notifyButton'
import {  Text,  } from 'native-base'
 
const DateAction = ({active, notify, onNotifyPress,course,location, startTime, endTime }) => {
    return (
            <View style={styles.action}>
                <LinearGradient style={styles.gradient} colors={['#0F9A47', '#027831']}>
                       <View>
                           <Text style={styles.timeText}>{startTime}</Text>
                           <Text style={styles.timeText}>{endTime}</Text>
                       </View>
                        <View style={styles.line}/>
                      <View>
                           <Text style={[styles.timeText, styles.classText]}>{course}</Text>
                           <Text style={[styles.timeText, styles.classPlace]}>{location}</Text>
                       </View>
                       <View>
                           <NotifyButton notify={notify} onNotifyPress={onNotifyPress}/>
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
   
})
export default DateAction;