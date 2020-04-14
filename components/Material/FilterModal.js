import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Modal, ActivityIndicator} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Button, Icon} from 'native-base';
import Colors from '../../constants/Colors';
import PrintSvg from '../../assets/svg/print.svg'
import CheckBoxItem from './extra/CheckBoxItem';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FilterItem from './extra/FilterItem';
import ClassFilterItem from './extra/ClassFilterItem';

 
const FilterModal = ({showModal, closeModal}) => {
    return (
     <>
      <Modal
        animationType='slide'
        transparent
        visible={showModal}
      >
        <View  style={styles.modal}>
           <View style={styles.modalView}>
           <TouchableOpacity onPress={()=>closeModal(false)}>
                <LinearGradient style={styles.closeButton} colors={['#E82222', 'rgba(232, 34,34,0.71)']}>
                   <MaterialIcon name="close" size={40} color={Colors.white} style={styles.icon}/>
               </LinearGradient>
           </TouchableOpacity>
           <ScrollView>
             <View>
                <Text style={styles.filterText}>  Sort by level </Text>
                <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
                      <FilterItem active text="100"/>
                      <FilterItem text="200"/>
                      <FilterItem text="300"/>
                      <FilterItem text="400"/>
                </ScrollView>
              </View>
            <View style={styles.filterType}>
            <Text style={[styles.filterText]}>  Sort by file Type </Text>
             <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
                  <FilterItem  text="PNG"/>
                  <FilterItem text="PDF"/>
                  <FilterItem text="DOC"/>
                  <FilterItem text="PPT"/>
            </ScrollView>
            </View>
            <View style={styles.filterType}>
            <Text style={[styles.filterText]}>  Sort by file Type </Text>
             <ScrollView style={[styles.scrollView, styles.scrollViewClass]} horizontal={true} showsHorizontalScrollIndicator={false} >
                  <ClassFilterItem active text="Study Material"/>
                  <ClassFilterItem text="Past Questions"/>
            </ScrollView>
            </View>
            </ScrollView> 
            </View>
           </View>
      </Modal>
       
    </>
    );
}
const styles = EStyleSheet.create({
      courseTitle:{
          fontSize: '20rem',
          color:"#fff",
          fontFamily:"Itim",
          marginLeft: "2rem",
          lineHeight:"20rem",
          paddingTop: '4rem',
      },
        modal:{
           backgroundColor:'rgba(360, 360, 360, 0.1)',
          flex:1,
          justifyContent:'flex-end',
        },
        modalView:{
          backgroundColor:Colors.black,
          height:'84%',
          borderTopLeftRadius: "100rem",
          borderTopRightRadius: "100rem",
          shadowColor: "#3F4141",
          shadowOffset: {
                width: -2.5,
                height: -2.5,
          },
          shadowOpacity: 1,
          shadowRadius: 4,
          elevation: 5,
        },
        header:{
          marginTop:"52rem",
          flexDirection: 'row',
        },
        backText:{
          fontSize: '20rem', 
          color:"#fff",
          fontFamily:"Itim",
          padding:"2rem"
      },
      iconHeader:{
          color:"#fff",
          margin: '0rem',
      },
      printIcon:{
        top: '-10rem',
        marginLeft: "65rem",
      },
      printText:{
        left: '-76rem',
        fontSize: '18rem', 
        marginTop: "10rem",
      },
      deliveryContent:{
      //  marginTop:"20rem",
       padding: '10rem',
      },
      contentItem:{
        marginTop: '20rem',
      },
      flexRow:{
        flexDirection:'row'
      },
      flexColumn:{
        flexDirection:'column'
      },
      closeButton:{
        width:'50rem',
        height:'50rem',
        alignSelf: 'center',
        marginTop: '20rem',
        borderRadius: '25rem',
        justifyContent: 'center',
        alignContent: 'center',
     },
     icon:{
       alignSelf:'center',
       justifyContent: 'center',
     },
     filterText:{
       fontFamily: 'Itim',
       color:"#fff",
       marginTop: '40rem',
       fontSize:"25rem"
     },
     scrollView:{
       padding:'20rem',
       paddingBottom: 0,
     },
     scrollViewClass:{
      
     },
     filterType:{
    
     },
     filterLevel:{

     },
     filterClass:{

     }
})
export default FilterModal;