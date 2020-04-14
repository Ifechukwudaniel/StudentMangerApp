import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView,Platform, Dimensions} from 'react-native'
import { Input} from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'
import MaterialItem from './materialItem';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ripple from 'react-native-material-ripple';
import Constants from 'expo-constants'
import FilterModal from './FilterModal';
const  rem = Dimensions.get('window').width/360
 
const Material = ({loading}) => {
    const [openFilter, setOpenFilter]= useState(false)
    return (
        <View style={styles.container}>
           <StatusBar hidden/>
          <View style={styles.filterView}>
            <TouchableOpacity style={styles.icon} onPress={()=>setOpenFilter(true)}>
                 <MaterialIcon  name="filter-list" size={40*rem} color={ !openFilter? "#fff":"rgba(232, 34,34,0.71)"}/>
            </TouchableOpacity>
          <View style={styles.searchView}>
              <Input style={styles.textBox} placeholder="Search for ..." placeholderTextColor="#AEAEAE"/>
              <Ripple style={styles.searchIcon}>
                 <MaterialIcon   name="search" size={30*rem} color="#fff"/>
              </Ripple>
          </View>
          </View>
            <FilterModal showModal= {openFilter} closeModal= {()=>setOpenFilter(false)}/>
            <ScrollView indicatorStyle={'white'} style={styles.scrollView}>
               <MaterialItem 
               courseCode='Csc 131' 
               courseTitle="Intro to maths and physics"
               url="https://www.free-ebooks.net/computer-sciences-textbooks/The-Dummies-Guide-to-Compiler-Design/pdf?dl&preview?dl&preview"
               lecture="mr gay & mrs  bitch"
               materialType="PDF"
               pages="100"
               description="Fist material"
               date="2020-01-30T23:19:56.577Z"
               open={true}
               printed={10}
               />
                  <MaterialItem 
               courseCode='Csc 131' 
               courseTitle="Intro to maths and physics"
               url="https://www.free-ebooks.net/computer-sciences-textbooks/The-Dummies-Guide-to-Compiler-Design/pdf?dl&preview?dl&preview"
               lecture="mr gay & mrs  bitch"
               materialType="PDF"
               pages="100"
               description="Fist material"
               date="2020-01-30T23:19:56.577Z"
               printed={10}
               />
            </ScrollView>
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    filterView:{
      marginTop:'40rem',
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
      fontSize: '15rem',
      paddingLeft: '5rem',
      color:"#fff",
      ...Platform.select({
        ios:{
          fontFamily:"Itim",
        },
        android:{
          fontFamily:"itim",
        }

      }),
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
        top:'3rem' ,
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