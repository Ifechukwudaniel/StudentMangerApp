import React, {useState} from 'react';
import {View, Modal, ImageBackground, ScrollView, TouchableOpacity, Text} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../../../constants/Colors';
import HeaderComponent from '../../Header';
import { Icon } from 'native-base';
import moment from 'moment'

 
const BlogModal = ({showModal, closeModal, image, tag , date , title}) => {
    return (
     <>
        <Modal
          animationType='slide'
          
          visible={showModal} >
            <ScrollView style={styles.container}>
            <View style={styles.imageWrapper}>
                 <ImageBackground 
                    source= {{uri:`${image}`}}
                    style={styles.image}
                    resizeMode={'cover'} 
                    imageStyle={styles.imageStyle}
                 >
                 <TouchableOpacity onPress={()=>closeModal()}>
                    <Icon name='arrow-back' style={styles.backArrow}/>
                 </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.content}>
                  <View style={[styles.flexRow, styles.description]}>
                     <Text style={styles.tag}>{tag}</Text>
                     {/* <Icon style={styles.icon} name="time" />  */}
                     <Text style={styles.date}>{moment(date).format("MMM Do YYYY")}</Text>
                  </View>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.contentText}>
                      Pulvinar eget dictum sollicitudin ut dui quis. Curabitur congue quis ante odio odio tincidunt metus augue urna. Lorem cursus curabitur auctor elementum quam. Pulvinar sit vel auctor feugiat quis neque turpis facilisis. Mauris porta in adipiscing semper malesuada. Tincidunt erat ac feugiat bibendum elit sed risus pretium, ullamcorper. Purus in sed feugiat urna. Non in vitae suspendisse tellus lorem dignissim. Volutpat dignissim tellus, viverra aliquet imperdiet augue id odio. Tempus neque varius platea cursus.... 
                  </Text>
             </View>
            </ScrollView>
        </Modal>
     </>
    );
}
const styles = EStyleSheet.create({
      container:{
        flex:1,
        backgroundColor:Colors.black,
      },
      imageWrapper:{
        overflow: 'hidden',
        borderBottomRightRadius: '50rem',
        borderBottomLeftRadius: '50rem',
      },
      image:{
        width: "421rem",
        height:'320rem',
      },
      backArrow:{
       color:'#fff',
       marginTop: "30rem",
       marginLeft: '20rem',
      },
      content:{
        marginTop: "30rem",
      },
      flexRow:{
        flexDirection: 'row',
      },
      title:{
        fontSize:'18rem',
        fontFamily:"Brother1816-Bold",
        marginTop:'2rem',
        width:'360rem',
        color:"#fff",
        marginLeft:"10rem",
      },
      tag:{
        fontSize:'18rem',
        fontFamily:"Itim",
        width:'195rem',
        color:"#FFBE04",
        marginLeft:"15rem",
      },
      date:{
        fontSize:'18rem',
        fontFamily:"Itim",
        width:'138rem',
        color:"#fff",
        lineHeight:'22rem'
      },
      description:{
        marginTop:'15rem',
        marginBottom: '15rem',
      },
      contentText:{
        fontSize:'16rem',
        fontFamily:"Itim",
        marginTop:'2rem',
        width:'360rem',
        color:"#fff",
        marginLeft:"15rem",
        lineHeight:"28rem"
      },
      icon:{
        color:"#fff",
        height:'40rem',
        marginLeft:"50rem",
        left:"-10rem"
      }
})
export default BlogModal;