import React, {useState} from 'react';
import {  Header, Left, Body, Right, Button, Title, Text, Icon, } from 'native-base'
import {Dimensions, View, TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import Plus from '../assets/svg/plus.svg'
import Modal from 'react-native-modal';
const PlusTabBarIcon = ({}) => {
  const [modal,openModal] = useState(false)
    return (
      <View>
       
         <TouchableOpacity onPress={()=>openModal(!modal)}>
           <Plus/>
         </TouchableOpacity>
      </View>
    );
}
const styles = EStyleSheet.create({
    header:{
       backgroundColor: "#0C0C0E",
       paddingTop: '48rem',
       paddingBottom: '20rem',
       paddingLeft: '20rem',
       height:"90rem",
       borderWidth:'0rem',
       borderColor:'#0c0c0e'
    },
    userImage:{
        height: '50rem',
        width:'50rem',
        borderRadius: '70rem',
        borderWidth: '2rem',
        borderColor: "#FF912C",
        alignSelf: 'center',
    },
    textStyle:{
        color:"#fff",
        alignSelf: 'center',
        paddingTop:0,
        justifyContent: 'center',
    }
})
export default PlusTabBarIcon;