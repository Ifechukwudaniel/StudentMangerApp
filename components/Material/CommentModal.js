import React, {useState} from 'react';
import {View,  Modal, Text,ScrollView, Image, TextInput, Dimensions} from 'react-native'
import Constants from 'expo-constants'
import EStyleSheet from 'react-native-extended-stylesheet'
import {  Button,Icon} from 'native-base';
import Colors from '../../constants/Colors';
import CommentSvg from '../../assets/svg/comment.svg'
import CommentItem from './extra/CommentItem';
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ripple from 'react-native-material-ripple'
const  rem = Dimensions.get('window').width/360

 
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
                                      <IoniconsIcon name='ios-arrow-back' size={30*rem} style={styles.iconHeader} />
                                      <Text style={styles.backText}>Back</Text>
                                    </Button>
                                    <View style={styles.printIcon}>
                                        <CommentSvg/>
                                        <Text  style={[styles.courseTitle, styles.printText]}> Comments</Text>
                                    </View>
                                 </View>
                                 <ScrollView style={styles.scrollView}>
                                  <CommentItem/>
                                    <CommentItem/>
                                    <CommentItem/>
                                 </ScrollView>
                                 <View style={[styles.flexRow,styles.typeComment]}>
                                    <View style={[styles.userIconWrapper, styles.flexRow]} >
                                      <Image style={styles.userIcon} resizeMode='cover' source={require("../../assets/images/img.png")}/>
                                      <TextInput numberOfLines={2} placeholderTextColor="#AEAEAE"  placeholder="Type your comment ...." style={styles.textInput}/>
                                      <Ripple style={styles.commentIcon}>
                                        <MaterialIcon  style={styles.commentIcon} size={30*rem}  name="comment" color="#fff"/>
                                      </Ripple>
                                    </View>
                                  <View>
                                  </View>
                                 </View>
                             </View>   
                             </View>
                          </Modal>
    </>
    );
}
const styles = EStyleSheet.create({
      scrollView:{
        paddingTop:'10rem'
      },
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
          marginBottom: '20rem',
        },
        backText:{
          fontSize: '20rem', 
          color:"#fff",
          fontFamily:"Itim",
          marginBottom: '5rem',
      },
      iconHeader:{
          color:"#fff",
          marginLeft:'15rem',
          marginRight:'5rem'
      },
      printIcon:{
        top: '-10rem',
        marginLeft: "80rem",
      },
      printText:{
        left: '-16rem',
        fontSize: '18rem', 
        marginTop: "10rem",
      },
      deliveryContent:{
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
      userIcon:{
        alignSelf: 'center',
        height:"40rem",
        borderRadius: '100rem',
        width:"40rem",
         marginBottom:'20rem'
      },
      userIconWrapper:{
        marginRight: "20rem",
        marginLeft: "20rem",
      },
      typeComment:{
        borderTopWidth:'3rem',
        borderColor: "#AEAEAE",
        width:"100%",
        height:'80rem'
      },
      textInput:{
        backgroundColor: "#000",
        alignSelf: 'center',
        height:"40rem",
        color:"#fff",
        fontFamily:'Itim',
        fontSize:'17rem',
        marginLeft : '10rem',
        width:"75%",
        marginBottom:'20rem'
      },
      commentIcon:{
        // marginTop: '5rem',
        // borderLeftWidth: '2rem',
        borderColor:"#fff",
        paddingTop:"10rem",
        paddingLeft: '3rem',
      }
})
export default CommentModal;