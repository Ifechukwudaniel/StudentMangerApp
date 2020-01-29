import React from 'react';
import {StyleSheet, Alert} from 'react-native'
import { Chip } from 'react-native-paper';
import Colors from '../../../constants/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 
const ClipComponent = ({text, handleClipClick}) => {
    return (
        <Chip 
        onPress={()=>handleClipClick(text)} 
         style={styles.chipStyle} 
         textStyle={styles.textStyle} 
         mode='outlined' >{text}</Chip>
    );
}
 
const styles = StyleSheet.create({
    chipStyle:{
         flexDirection:'column',
         borderRadius:wp("10%"),
         backgroundColor:Colors.white,
         marginRight:wp('4%'),
         marginLeft:wp('4%'),
         marginBottom:wp("4%")
    },
    textStyle:{
        flexDirection:'column',
        padding:wp("2%"),
        color:'#666677',
        fontSize:wp("5%")
    }
})
export default ClipComponent;