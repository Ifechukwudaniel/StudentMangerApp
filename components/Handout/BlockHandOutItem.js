import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { WebView } from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper'
import {showMessage} from 'react-native-flash-message'
const BlockHandOutItem = (props) => {
  const [loading,setLoading] = useState(true)
  console.log( props)
  return (
    <TouchableOpacity style={styles.handOutItem}>
      <WebView
      source={{ uri: `${props.file}` }}
      style={[styles.pdfViewStyle, {}]}
      startInLoadingState={true}
      domStorageEnabled={true}
      javaScriptEnabled={true}
      renderLoading={
        ()=>(
               <ActivityIndicator style={[styles.spinner]} color="#C4C4C4" size="large"/>
        )
      }
      onError={
        ()=>{
           showMessage({
             icon:'warning',
             backgroundColor:"#FF912C",
             message:"Your network is slow"
           })
        }
      }  

      renderError={
        ()=>(
          <View style={styles.WebViewError}>
             <View style={styles.spinner}>
                 
            </View> 
          </View>
        )
      }
      />
      <Text style={[styles.textStyle,styles.courseCode]}>{props.course.courseCode}</Text>
      <Text style={styles.textStyle}> {props.course.title} </Text>
      <Text style={[styles.textStyle, styles.postedBy]}> By:{props.lecturer}</Text>
    </TouchableOpacity>
  );
}
 
const styles = EStyleSheet.create({
  handOutItem:{
    width:"360rem",
    height:"300rem",
    backgroundColor:"rgba(66,89,133,0.07)",
    alignSelf: 'center',
    borderRadius:'10rem',
    marginTop:'20rem',
    shadowColor: '#000000',
    elevation:10,
    borderWidth: '1rem',
    borderColor:'rgba(66,89,133,0.29)'
  },
   pdfViewStyle:{
    width:"340rem",
    height:"50rem",
    alignSelf: 'center',
    borderRadius:'6rem',
    margin:'15rem',
    // marginBottom: '80rem',
   },
   textStyle:{
     alignSelf: 'center',
     color:'#fff',
   },
   courseCode:{
     fontFamily: 'Brother1816-Bold',
     paddingBottom:'0rem'
   },
   description:{
     paddingTop: '4rem',
     paddingBottom:'4rem'
   },
   postedBy:{
    fontFamily: 'Brother1816-Bold',
    paddingBottom: '4rem',
    paddingTop:'7rem'
   },
   spinner:{
    width:"60rem",
    height:'60rem',
    alignSelf: 'center',
    top:'-100rem',
    backgroundColor:"#FF912C",
    borderRadius:"50rem"
 },
 WebViewError:{
   backgroundColor:"#fff",
   top: '-100rem',
   flex: 1,
 }
})
 
export default BlockHandOutItem;