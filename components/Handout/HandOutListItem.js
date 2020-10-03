import React, {useState, useRef} from 'react';
import {TouchableOpacity, Text, View, Modal, Dimensions, TextInput, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { WebView } from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper'
import {showMessage} from 'react-native-flash-message'
import HandOutHeader from './HandOutHeader';
import RBSheet from 'react-native-raw-bottom-sheet';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import { Icon } from 'native-base'
import * as Progress from 'react-native-progress';
import NumericInput from 'react-native-numeric-input'
import BookSvg from '../../assets/svg/Book.svg'
import {LocalNotification} from '../../services/NotifService'
import { Platform } from 'react-native';
import { Card, CardItem, Body, }  from "native-base"

const HandOuListItem = (props) => {
  const [loading,setLoading] = useState(true)
  const [modal , setModal] = useState(false)
  const  RBSheetDownload  = useRef(null);
  const  RBSheetOrder = useRef(null)
  const openDownloads = ()=>{
    RBSheetDownload.current.open()
 }
 const closeDownloads = ()=>{
   RBSheetDownload.current.close()
}


 const openOrder = ()=>{
    RBSheetOrder.current.open()
 }

 const closeOrder = ()=>{
   RBSheetOrder.current.close()
}


  return (
    <TouchableOpacity  onPress= {()=>{
      if(Platform.OS="android"){
        // LocalNotification()
        //props.navigation.navigation("Material")
        props.navigation.navigate("Material",props)
      }
    }} style={styles.handOutItem}>
     <View style={styles.BookSvg}>
        <BookSvg width={130*rem} height={130*rem}/>
     </View>
      <Text style={[styles.textStyle,styles.courseCode]}> {props.courseCode}</Text>
      <Text numberOfLines={1} allowFontScaling  style={[styles.textStyle, styles.description]}>{props.title}</Text>
      <Text style={[styles.textStyle, styles.postedBy]}> By: {props.lecturer}</Text>
    </TouchableOpacity>
  );
}
 
const styles = EStyleSheet.create({
  handOutItem:{
    width:"170rem",
    height:"260rem",
    backgroundColor:"rgba(36,35,35,0.71)",
    borderRadius:'10rem',
    marginTop:'20rem',
    shadowColor: '#000000',
    elevation:10,
    borderWidth: '1rem',
    margin: '10rem',
    // borderColor:'rgba(66,89,133,0.29)'
  },
   textStyle:{
     alignSelf: 'center',
     color:'#fff',
   },
   courseCode:{
     fontFamily: 'Brother1816-Bold',
     fontSize: '17rem',
   },
   description:{
     fontSize: '12rem',
     padding: '5rem',
   },
   postedBy:{
    fontFamily: 'Brother1816-Bold',
    marginTop: '14rem',
   },
   BookSvg:{
     alignSelf:"center",
     margin: '17rem',
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
 },
 modalPdf :{
   backgroundColor:'#0C0C0E',
   flex: 1,
 },
 downloadButton:{
   width:'50%',
   height:'40rem',
   backgroundColor:'#FF912C',
   alignSelf: 'center',
   borderRadius: '5rem',
 },
 downloadButtonText:{
  color:'#FFF',
  textAlign:'center',
  lineHeight:'35rem',
  fontSize:'17rem',
  fontWeight:'bold'
 },
 mainError:{
    width:'100%',
    height:'100%',
    backgroundColor:'#fff',
 },
 mainLoading:{
  width:'100%',
  height:'100%',
  backgroundColor:'#fff',
  justifyContent: 'center',
 },
 downloader:{
   alignSelf: 'center',
   marginTop: '20rem',
   marginBottom: '20rem',
 },
 headerText:{
   textAlign:'center',
   color:"#FF912C",
   marginTop: '5rem',
   fontSize: '23rem',
   fontWeight: 'bold',
 },
 listItem:{
  marginTop: '20rem',
 },
 orderTextInput:{
  height:'20rem',
  backgroundColor: "#18181D",
  height:'60rem',
  borderRadius: '5rem',
  fontSize: '18rem',
  color:"#fff",
  paddingLeft: "20rem",
  width:'95%',
  alignSelf: 'center',
 },
 orderText:{
  color:'#B9B9B9',
  width:'30%',
  fontSize:'15rem',
  lineHeight:'60rem',
  fontWeight: 'bold',
  paddingLeft:'10rem',
  marginLeft:'70rem',
  marginRight:'30rem'
 },
 textDivider:{
   color:'#FF912C',
    fontWeight: 'normal',
    fontSize:'16rem',
    margin: '25rem',
    marginLeft: 0,
    marginRight: 0,
    textAlign:'center',
 },
 orderButton :{
  marginTop: '30rem',
 },
 addButton :{
   backgroundColor:'#18181D'
 },
 loader:{
  alignSelf: 'center',
 },
 errorHead:{
   width:'100%',
   height:'60rem',
   backgroundColor: '#d3d3d3',
   justifyContent: 'center',
 },
 textError:{
   alignSelf: 'center',
   fontWeight: 'bold',
   fontSize: '22rem',
   color:'red'
 },
 errorMessage:{
   textAlign:'center',
   fontSize:'20rem',
   color:'#FF912c',
   fontWeight: 'bold',
 }
})
 
export default HandOuListItem;