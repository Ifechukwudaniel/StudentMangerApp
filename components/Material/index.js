import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Modal, TouchableHighlight} from 'react-native'
import { Input} from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'
import MaterialItem from './materialItem';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ripple from 'react-native-material-ripple';
 
const Material = () => {
    return (
        <View style={styles.container}>
           <StatusBar hidden/>
          <View style={styles.filterView}>
            <TouchableOpacity style={styles.icon}>
                 <MaterialIcon  name="filter-list" size={40} color="#fff"/>
            </TouchableOpacity>
          <View style={styles.searchView}>
              <Input style={styles.textBox} placeholder="Search for ..." placeholderTextColor="#AEAEAE"/>
              <Ripple style={styles.searchIcon}>
                 <MaterialIcon   name="search" size={30} color="#fff"/>
              </Ripple>
          </View>
          </View>
            <ScrollView style={styles.scrollView}>
               <MaterialItem/>
               <MaterialItem/>
               <MaterialItem/>
               <MaterialItem/>
               <MaterialItem/>
               <MaterialItem/>
            </ScrollView>
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    filterView:{
      marginTop:'47rem',
      flexDirection: 'row',
      alignContent: 'center',
    },
    scrollView:{
     marginTop:"16%"
    },
    textBox:{
      width:"60%",
      height:'40rem',
      backgroundColor: "#121212",
      borderWidth: '1rem',
      borderColor: "#fff",
      color:"#fff",
      fontFamily:"Itim",
      alignSelf: 'flex-end',
      borderRadius: '5rem',
      marginLeft:"70rem",
      borderRightWidth: '0rem',
    },
    icon:{
      marginLeft: '30rem',
      alignSelf: 'center',
    //   justifySelf: 'center',
    },
    searchView:{
       width:"100%",
       flexDirection:'row'
    },
    searchIcon:{
        left:"-5rem",
        width:"50rem",
        height:"40rem",
        marginRight:"80rem",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '1rem',
        borderColor: "#fff",
        borderTopRightRadius: '5rem',
        borderBottomRightRadius: '5rem',
    }
})
export default Material;