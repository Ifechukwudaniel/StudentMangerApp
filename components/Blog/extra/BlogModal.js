import React, {useState} from 'react';
import {View, Modal, ImageBackground, ScrollView, TouchableOpacity, Text} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../../../constants/Colors';
import HeaderComponent from '../../Header';
import { Icon } from 'native-base';
import moment from 'moment'

 
const BlogModal = (props) => {
    return (
     <>
        <Modal
          animationType='slide'
          
          visible={props.showModal} >
            <ScrollView style={styles.container}>
            <View style={styles.imageWrapper}>
                 <ImageBackground 
                    source= {{uri:`${props.image}`}}
                    style={styles.image}
                    resizeMode={'cover'} 
                    imageStyle={styles.imageStyle}
                 >
                 <TouchableOpacity onPress={()=>props.closeModal()}>
                    <Icon name='arrow-back' style={styles.backArrow}/>
                 </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.content}>
                  <View style={[styles.flexRow, styles.description]}>
                     <Text style={styles.tag}>{props.tag}</Text>
                     {/* <Icon style={styles.icon} name="time" />  */}
                     <Text style={styles.date}>{ moment(props.date).toNow(true) +" Ago"}</Text>
                  </View>
                  <Text style={styles.title}>{props.title}</Text>
                  <Text style={styles.contentText}>{props.content}
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
        shadowColor: "#fff",
        shadowOffset: {
              width: '100rem',
              height: '100rem',
        },
        shadowOpacity: 1,
        shadowRadius: '0rem',
        elevation: 5,
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
        lineHeight:'22rem',
        marginLeft: '50rem',
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
        lineHeight:"36rem"
      },
      icon:{
        color:"#fff",
        height:'40rem',
        marginLeft:"50rem",
        left:"-10rem"
      }
})
export default BlogModal;