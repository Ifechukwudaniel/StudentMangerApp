import React from 'react';
import {StyleSheet, Alert} from 'react-native'
import { Chip } from 'react-native-paper';
import Colors from '../../../constants/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet'

 
const ClipComponent = ({text, handleClipClick}) => {
    return (
        <Chip 
        onPress={()=>handleClipClick(text)} 
         style={styles.chipStyle} 
         textStyle={styles.textStyle} 
         mode='outlined' >{text}</Chip>
    );
}
 
const styles = EStyleSheet.create({
    chipStyle:{
         flexDirection:'column',
         borderRadius:'100rem',
         backgroundColor:Colors.white,
         justifyContent: 'center',
         marginRight: "10rem",
         marginRight: "10rem",
         marginTop: "20rem",
         height:'50rem'
    },
    textStyle:{
        flexDirection:'column',
        // padding:"17rem",
        color:'#666677',
        fontSize:'15rem',
        alignSelf: 'center',
        fontWeight: 'bold',
    }
})
export default ClipComponent;