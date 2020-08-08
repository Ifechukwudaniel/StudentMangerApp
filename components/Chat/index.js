import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Image} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header'
import { Text,  } from 'native-base';
import GroupItem from './GroupItem';



 
const Chat = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.previousChat}>
                <View style={styles.messageView}>
                <GroupItem/>
                <GroupItem/>
                <GroupItem/>
                <GroupItem/>
                </View>
            </View>
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    people:{
    flex: 20,
    },
    previousChat:{
      flex: 80,
    },
    text:{
      color:'rgba(255, 255, 255, 0.57)',
      fontSize:'16rem',
      marginLeft: '20rem',
      marginTop: '20rem',
    }
,
userImageGroup:{
     flexDirection: 'row',
     height:'70rem',
     width:'100%',
     marginLeft:'30rem'
},
userImage:{
    height:'70rem',
    width:'70rem',
    borderRadius: '100rem',
    marginRight: '30rem',
    marginTop: '6rem',
},
messageView:{
    width:'100%',
    height:'100%',
    backgroundColor: 'rgba(255,255,255,0.07);',
    marginTop: '4rem',
},
})
export default Chat;