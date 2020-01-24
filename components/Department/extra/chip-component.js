import React from 'react';
import {StyleSheet} from 'react-native'
import { Chip } from 'react-native-paper';
import Colors from '../../../constants/Colors';

 
const ClipComponent = ({text, handleClipClick}) => {
    return (
        <Chip onPress={()=>handleClipClick(text)} 
         style={styles.chipStyle} 
         textStyle={styles.textStyle}  
         mode='outlined' >{text}</Chip>
    );
}
 
const styles = StyleSheet.create({
    chipStyle:{
         flexDirection:'column',
         borderRadius:100,
         backgroundColor:Colors.white,
         marginRight:10,
         marginLeft:10,
         marginBottom:20
    },
    textStyle:{
        flexDirection:'column',
        padding:6,
        color:'#666677',
        fontSize:17
    }
})
export default ClipComponent;