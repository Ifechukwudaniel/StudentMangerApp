import React from 'react';
import { Text} from 'native-base'
import {TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';


const ClassFilterItem = ({active, text}) => {
    return (
    <TouchableOpacity style={styles.filterItem}>
        <LinearGradient style={styles.filterItem} colors={active? ['#0F9A47', '#027831'] :['#126FFE', '#0B316C']}>
            <Text style= {styles.text}> {text}</Text>
        </LinearGradient>
    </TouchableOpacity>
    );
}
 
const styles = EStyleSheet.create({
   filterItem:{
        width:'180rem',
        height:"100rem",
        borderRadius: '10rem',
        marginRight: '10rem',
        alignContent: 'center',
        justifyContent: 'center',
    },
    text:{
      color:"#fff",
      alignSelf: 'center',
      fontSize: '24rem',
      fontFamily: 'Itim',
    }
})
export default ClassFilterItem;