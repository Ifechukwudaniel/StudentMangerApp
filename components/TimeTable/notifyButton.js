import React, {useState} from 'react';
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
 
const NotifyButton = ({notify, onNotifyPress}) => {
    const [active, setActive] = useState(notify) 
    return (
        <Button onPress={()=>{
            playSound()
            setActive(!active)
            onNotifyPress()
            }
            } style={styles.iconNot} transparent>
             <MaterialIcon  size={30} color="#fff" name={active?'notifications-active':'notifications-off'}/>
         </Button>

    );
}
const styles = EStyleSheet.create({
    iconNot:{
        marginTop:'20rem',
        marginLeft:'10rem'
    }
   
})
export default NotifyButton;