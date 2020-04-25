import React from 'react';
import { Text} from 'native-base'
import {TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';

const days= ["Sun",'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'] 

const DateItem = ({active, _id,  date, day, onClick}) => {
    return (
    <TouchableOpacity onPress = { ()=>onClick(_id)} style={styles.day}>
        <LinearGradient style={styles.day} colors={active? ['#EA3939', '#971313'] :['#126FFE', '#0B316C']}>
           <Text style={styles.dayDate}> {date} </Text>
           <Text  style={styles.dayMonth}> {days[day]} </Text>
        </LinearGradient>
    </TouchableOpacity>
    );
}
 
const styles = EStyleSheet.create({
    day:{
        width:"80rem",
        height:"80rem",
        borderRadius: '10rem',
        marginRight: '20rem',
        alignContent: 'center',
    },
   
    dayDate:{
        fontSize: '25rem', 
        color:"#fff",
        fontFamily:"Itim", 
        marginLeft:'20rem',
        paddingTop: '10rem',
    },
    dayMonth:{
        fontSize: '20rem', 
        color:"#fff",
        fontFamily:"Itim",  
        marginLeft:'18rem'
    }
})
export default DateItem;