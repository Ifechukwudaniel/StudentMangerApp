import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Modal,KeyboardAvoidingView,TextInput,TouchableHighlight, Image, ActivityIndicator} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Button, Icon} from 'native-base';
import Colors from '../../constants/Colors';
import PrintSvg from '../../assets/svg/print.svg'
import CheckBoxItem from './extra/CheckBoxItem';

 
const CommentModal = ({showModal, closeModal}) => {
    return (
     <>
      <Modal
                            animationType='slide'
                            transparent
                            visible={showModal}
                            >
                             <View  style={styles.modal}>
                             <View style={styles.modalView}>
                                 <View style={styles.header}>
                                    <Button transparent onPress={()=>closeModal()}>
                                      <Icon name='arrow-back' style={styles.iconHeader} />
                                      <Text style={styles.backText}>Back</Text>
                                    </Button>
                                    <View style={styles.printIcon}>
                                        <PrintSvg/>
                                        <Text  style={[styles.courseTitle, styles.printText]}> Comments</Text>
                                    </View>
                                 </View>

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
          backgroundColor:'rgba(360, 360, 360, 0.01)',
          flex:1,
          justifyContent:'flex-end',
        },
        modalView:{
          backgroundColor:Colors.black,
          height:'87%',
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
        left: '-16rem',
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
      }
})
export default CommentModal;