import React, {useState, useRef} from 'react';
import {  Header, Left, Body, Right, Button, Title, Text, Icon, } from 'native-base'
import {Dimensions, View, TouchableOpacity, AsyncStorage} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import Plus from '../assets/svg/plus.svg'
import Modal from 'react-native-modal';
import RBSheet from 'react-native-raw-bottom-sheet';
import firebase from '../firebase'
import Keys from '../constants/Keys';


const PlusTabBarIcon = ({}) => {
  const  RBSheetAdd = useRef(null)
    return (
      <View>
         <TouchableOpacity onPress={()=>RBSheetAdd.current.open()}>
           <Plus/>
         </TouchableOpacity>
         <RBSheet
             closeOnDragDown
               ref={RBSheetAdd}
               height={300*rem}
              openDuration={250}
              customStyles={{
              container: {
                backgroundColor:'#1E1E1E'
              }
              }}>
            <TouchableOpacity onPress= { ()=>{
              AsyncStorage.getItem(Keys.department)
              .then(value=>{
                 firebase.database().ref().child('groups').push({
                   name: "HOW the World Works",
                   image : "https://cdn.pixabay.com/photo/2016/07/27/01/36/basketball-1544370__480.jpg",
                   description:'hwswhswhs jwdjwjdwjds dwdhwdhwd',
                   department:JSON.parse(value)._id
             })
             .then(()=>{
                alert("creatred a new group")
             })
             .catch((err)=>{
               console.log(err)
             })
              })
              .catch(err=>{
                console.log(err)
              })
            }
            } style={styles.addGroup}>
                <Text> Add group</Text>
            </TouchableOpacity>
         </RBSheet>
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
    },
    addGroup:{
       alignSelf:'center',
       width:'100rem',
       backgroundColor:'red',
       height:'30rem'
    }
})
export default PlusTabBarIcon;