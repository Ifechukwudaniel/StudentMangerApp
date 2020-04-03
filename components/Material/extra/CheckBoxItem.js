import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import IconNB from 'react-native-vector-icons/Ionicons';
import Colors from '../../../constants/Colors';

const CheckBoxItem = ({text, onCheck, isChecked}) => {
    const [checked, setChecked] = useState(false)
    // console.warn(checked)
    return (
        <>
            <TouchableOpacity style={styles.flexRow}> 
                <View style={styles.iconWrapper}>
                   <IconNB
                   style={styles.icon}
                    name={
                        Platform.OS==='ios'
                        ? 'ios-checkmark'
                        : 'md-checkmark'}
                    size={30}
                    color={Colors.white}
                 />
                </View>
                <Text style={styles.checkBoxText}>{text}</Text>
            </TouchableOpacity>
       </>
    );
}
const styles = EStyleSheet.create({
    checkBoxText:{
        fontSize: '20rem',
        color:"#fff",
        fontFamily:"Itim",
        marginLeft: "2rem",
        lineHeight:"20rem",
        marginLeft:"13rem"
    },
    flexRow:{
      flexDirection:'row',
      marginTop: '10rem',
    },
    icon:{
        alignSelf: 'center',
        height:"30rem"
    },
    iconWrapper:{
       width:'25rem',
       height:"25rem",
       borderWidth: '1rem',
       borderColor:"#fff",
       borderRadius: '20rem',
       justifyContent: 'center',
       
    }
})
export default CheckBoxItem;