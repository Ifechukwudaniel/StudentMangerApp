import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight, View, Image, ImageBackground } from 'react-native';
import {  Text, Button } from '@ui-kitten/components';
import Ripple from 'react-native-material-ripple';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import moment from 'moment'


export const BlogCard = ({ date, tag,title, img, onClick , ...cardProps}) => {

    return (
      <Ripple onPress={onClick}>
       <View>
          <ImageBackground style= {styles.image} 
           source= {{uri:`${img}`}}
           resizeMode={'cover'} 
           imageStyle= {{opacity:1}
           }
           >
          </ImageBackground>
          <View style={styles.overlay} />
          <View style= {styles.overlayContent}>
          <View style={{padding:hp("1%"), height:hp('40%'), marginTop:hp("15%"),}}>
          <View style= {styles.textContainer}>
             <Text style={styles.date}>{moment(date).format("MMM Do YYYY")}</Text>
              <Text style={styles.tag}> {tag}</Text>
          </View>
          <View style= {styles.titleContainer}>
                  <Text style= {styles.title} >{title}</Text>
              </View> 
          </View>
          </View>
       </View>
       </Ripple>
    );
}


const styles = StyleSheet.create({
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
      opacity:0.3
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
      fontSize:17,
      fontFamily:"Open Sans Bold",
      marginTop:hp("1%"),
      width:wp("90%")
    },
    date:{
      fontSize:15,
      fontFamily:"Open Sans Regular",
      fontWeight:'bold',
      padding:hp("0.3%"),
    },
    tag:{
      fontSize:15,
      fontFamily:"Open Sans Regular",
      textAlign:'right',
      marginLeft:wp("45%"),
      color:"#fff",
      padding:hp("0.2%"),
    },
    textContainer:{
      flexDirection:'row',
      width:wp("100%")
    },
    titleContainer:{
      flexDirection:'column',
      width:wp("100%"),
      justifyContent:'center',
      flexWrap:'wrap',
      //paddingBottom:hp("3%")
    }
  });