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


const BlockHandOutItem = (props) => {
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
    <TouchableOpacity onPress= {()=>{
       if(Platform.OS="android"){
        // LocalNotification()
        props.navigation.navigate("Material",props)
      }
    }} style={styles.handOutItem}>
       <View style={styles.BookSvg}>
        <BookSvg width={100*rem} height={120*rem}/>
     </View>
      <Text style={[styles.textStyle,styles.courseCode]}>{props.courseCode}</Text>
      <Text style={styles.textStyle}> {props.title} </Text>
      <Text style={[styles.textStyle, styles.postedBy]}> By:{props.lecturer}</Text>
      {/* <Modal presentationStyle="fullScreen" animationType="slide" visible={modal}>
          <View style={styles.modalPdf}>
            <HandOutHeader openDownloads= {openDownloads} openOrders= {openOrder} courseCode={props.course.courseCode} closeModal= {()=>setModal(false)}/>
            <WebView
                  startInLoadingState
                  source={{ uri: `${props.file}` }}
                  style={{flex:1}}
                  renderLoading={
                  ()=>(
                    <View style={styles.mainLoading}>
                         <Progress.CircleSnail  color={'#FF912C'} style={styles.loader} size={100*rem} />
                    </View>
                  )
                  }
                  renderError={
                    (props)=>{
                  return ( <View style={styles.mainError}>
                            <View style={styles.errorHead}>
                              <Text style={styles.textError}> Please an error occured</Text>
                           </View> 
                           <View>
                               
                              <Text style={styles.errorMessage}> Please check your internet connection </Text>
                           </View>
                  </View>
                  )
                    }
                  }
              />
          </View>
          <RBSheet
          closeOnDragDown
               ref={ RBSheetDownload}
               height={200*rem}
              openDuration={250}
              customStyles={{
              container: {
                backgroundColor:'#0C0C0E'
              }
              }}>
              <View>
               <Progress.Circle animated showsText  color={'#FF912C'} style={styles.downloader} progress={0.4} size={60*rem} />
              <TouchableOpacity onPress={closeOrder} style={styles.downloadButton}>
                  <Text style={styles.downloadButtonText}> Cancel</Text>
              </TouchableOpacity>
              </View>
          </RBSheet>
          <RBSheet
          closeOnDragDown
               ref={RBSheetOrder}
               height={650*rem}
              openDuration={250}
              customStyles={{
              container: {
                backgroundColor:'#0C0C0E'
              }
              }}>
              <View>
                   <Text style={styles.headerText}> Order Hard Copy  </Text>
                   <View style={[styles.listItem, {flexDirection:'row', width:'80%', justifyContent:'center'}]}>
                    <Text style={styles.orderText}> COPIES: </Text>
                   <NumericInput 
                      onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                      totalWidth={240*rem} 
                      totalHeight={50*rem} 
                      iconSize={25*rem}
                      step={1}
                      valueType='decimal'
                      rounded 
                      inputStyle={styles.addButton}
                      textColor='#fff' 
                      borderColor="#18181D"
                      iconStyle={{ color: 'white' }} 
                      rightButtonBackgroundColor='#FF912c' 
                      leftButtonBackgroundColor='#ff912c'/>
                   </View>
                   <View style={styles.listItem}>
                       <TextInput placeholderTextColor="#fff" placeholder="Location"   style={ styles.orderTextInput}/>
                   </View>
                   <View style={styles.listItem}>
                       <TextInput placeholderTextColor="#fff"  placeholder="Phone Number" keyboardType="number-pad" style={ styles.orderTextInput}/>
                   </View>
                   <Text style={styles.textDivider}> ALTERNATIVE RECEIVER </Text>
                   <View style={styles.listItem}>
                       <TextInput  placeholderTextColor="#fff" placeholder="Location"  style={ styles.orderTextInput}/>
                   </View>
                   <View style={styles.listItem}>
                       <TextInput placeholderTextColor="#fff"  placeholder="Phone Number" style={ styles.orderTextInput}/>
                   </View>
                   <TouchableOpacity  onPress={closeDownloads} style={[styles.downloadButton, styles.orderButton]}>
                     <Text style={styles.downloadButtonText}>  PLACE ORDER </Text>
              </TouchableOpacity>
              </View>
          </RBSheet>
      </Modal> */}
    </TouchableOpacity>
  );
}
 
const styles = EStyleSheet.create({
  handOutItem:{
    width:"340rem",
    height:"250rem",
    backgroundColor:"rgba(36,35,35,0.71)",
    alignSelf: 'center',
    borderRadius:'10rem',
    marginTop:'20rem',
    shadowColor: '#000000',
    elevation:10,
    borderWidth: '1rem',
    borderColor:'rgba(66,89,133,0.29)'
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
 },
 mainLoading:{
  width:'100%',
  height:'100%'
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
  marginTop: '20rem',
 },
 addButton :{
   backgroundColor:'#18181D'
 },
 mainLoading:{
  width:'100%',
  height:'100%',
  backgroundColor:'#fff',
  justifyContent: 'center',
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
},
mainError:{
  width:'100%',
  height:'100%',
  backgroundColor:'#fff',
},
})
 
export default BlockHandOutItem;