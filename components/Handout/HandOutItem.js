import React, {useState, useRef} from 'react';
import {TouchableOpacity, Text, View, Modal, Dimensions, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { WebView } from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper'
import {showMessage} from 'react-native-flash-message'
import HandOutHeader from './HandOutHeader';
import RBSheet from 'react-native-raw-bottom-sheet';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import * as Progress from 'react-native-progress';
import NumericInput from 'react-native-numeric-input'
import BookSvg from '../../assets/svg/Book.svg'
import {LocalNotification} from '../../services/NotifService'
import { Platform } from 'react-native';
import PDF from '../../assets/svg/fileIcons/pdf.svg'


const HandOutItem = (props) => {
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
  // let svg =  FileIcon({extension:'zip',...defaultStyles.zip})
  // console.log(svg)
  return (
    <TouchableOpacity onPress= {()=>{ }} style={styles.handOutItem}>
       <View style={{marginTop:14, marginLeft:10}}>
             <PDF width={35} height={35}/>
       </View>  
       <View style={{marginTop:14, marginLeft:2}}>
              <Text style={styles.description} >  GEC227 Lecture Note: Module II lecture IFile  </Text>
       </View>  
    </TouchableOpacity>
  );
}
 
const styles = EStyleSheet.create({
  handOutItem:{
    width:"95%",
    height:"70rem",
    backgroundColor:"rgba(36,35,35,1)",
    alignSelf: 'center',
    borderRadius:'5rem',
    marginTop:'20rem',
    shadowColor: '#000000',
    elevation:10,
    flexDirection: 'row',
  },
  description:{
    color:'rgba(255,255,255,0.8)',
    alignSelf: 'center',
    fontSize: '15rem',
    marginTop:'5rem'
  }
})
 
export default HandOutItem;