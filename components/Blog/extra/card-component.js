import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight, View, Image, ImageBackground, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import moment from 'moment'
import BlogModal from './BlogModal';
import EStyleSheet from 'react-native-extended-stylesheet'


export const BlogCard = ({ date, tag,title, img, content}) => {
    const  [showModal , setShowModal] = useState(false)
    return (
      <Ripple onPress={()=>setShowModal(true)}>
       <View>
          <ImageBackground style= {styles.image} 
           source= {{uri:`${img}`}}
           resizeMode={'cover'} 
           imageStyle= {{opacity:1}}
           >
          </ImageBackground>
          <View style={styles.overlay} />
          <View style= {styles.overlayContent}>
          <View style={{padding:hp("1%"), height:hp('40%'), marginTop:hp("15%"),}}>
          <View style= {styles.textContainer}>
             <Text style={styles.date}>{moment(date).toNow(true) +" Ago"}</Text>
              <Text style={styles.tag}> {tag}</Text>
          </View>
          <View style= {styles.titleContainer}>
                  <Text style= {styles.title} >{title}</Text>
              </View> 
          </View>
          </View>
       </View>
         <BlogModal content={content} showModal={showModal} image={img} date={date} title={title} tag={tag} closeModal= {()=>setShowModal(false)}/>
       </Ripple>
    );
}


const styles = EStyleSheet.create({
    container: {
      width:wp("100%"),
      borderRadius:8,
    },
    image:{
      height:hp("30%"),
      width:wp("100%"),
    },
    overlay:{
      flexDirection:'column',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor:"#000",
      opacity:0.3,
      borderBottomWidth: "1rem",
      borderColor: "#fff",
    },
    overlayContent:{
      flexDirection:'column',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding:1
    },
    title:{
      fontSize:'17rem',
      fontFamily:"Brother1816-Bold",
      marginTop:hp("1%"),
      width:wp("90%"),
      color:"#fff"
    },
    date:{
      fontSize:'15rem',
      fontFamily:"Itim",
      // fontWeight:'bold',
      padding:hp("0.3%"),
      color:"#fff"
    },
    tag:{
      fontSize:'15rem',
      fontFamily:"Itim",
      marginLeft: '215rem',
      textAlign:'right',
      alignSelf:'flex-end',
      color:"#FFBE04",
      padding:hp("0.2%"),
    },
    textContainer:{
      flexDirection:'row',
      width:wp("100%"),
      color:"#fff"
    },
    titleContainer:{
      flexDirection:'column',
      width:wp("100%"),
      justifyContent:'center',
      flexWrap:'wrap',
    }
  });