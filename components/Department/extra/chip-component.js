import React from 'react';
import {StyleSheet} from 'react-native'
import { Chip } from 'react-native-paper';

 
const ClipComponent = () => {
    return (
        <Chip style={styles.chipStyle} textStyle={styles.textStyle} >Example Chip</Chip>
    );
}
 
const styles = StyleSheet.create({
    chipStyle:{
         flexDirection:'column'
    },
    textStyle:{
        flexDirection:'column'
    }
})
export default ClipComponent;