import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity,Text, ScrollView, Modal,  TextInput, ActivityIndicator} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import {  Button, Icon, Textarea, CheckBox} from 'native-base';
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import WebView from 'react-native-webview'
import PreviewModal from './PreviewModal';
import PrintSvg from '../../assets/svg/print.svg'
import CheckBoxItem from './extra/CheckBoxItem';



const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://www.free-ebooks.net/computer-sciences-textbooks/The-Dmmies-Guide-to-Compiler-Design/pdf?dl&preview?dl&preview',
};


 
const MaterialItem = () => {
    const [showModal , setShowModal] = useState(false)
    const [showViewModal , setShowViewModal] = useState(false)
    const [print, setPrint] = useState(false)
    return (
        <>
                    <TouchableOpacity style= {styles.materialItem} onPress={()=>setShowModal(true)}>
                            <LinearGradient style={styles.gradient} colors= {['#126FFE', '#0B4FB9']}>
                                <Text style={styles.courseCode}>Csc 131</Text>
                                <Text style={[styles.courseTitle, styles.courseTitleText]}>Introduction to math and physics </Text>
                                <Text style={styles.courseTitle}>First material </Text>
                                <Text style={styles.courseTitle}>Lectures: mr gay & mrs  bitch</Text>
                                <Text style={[styles.courseTitle, {fontSize:15}]}>Material Type : PDF</Text>
                                <Text style={[styles.courseTitle, {fontSize:15}]}>Posted on 1st of may</Text>
                            </LinearGradient>
                    </TouchableOpacity>
                    <Modal
                      animationType='slide'
                      transparent={true}  
                      visible={ showModal}
                     >
                    <View style={styles.modal}>
                        <View style={styles.modalView}>
                          <TouchableOpacity onPress={()=>setShowModal(false)}>
                             <LinearGradient style={styles.closeButton} colors={['#E82222', 'rgba(232, 34,34,0.71)']}>
                               <MaterialIcon name="close" size={40} color={Colors.white} style={styles.icon}/>
                             </LinearGradient>
                          </TouchableOpacity>
                           <ScrollView style={styles.content}>
                             <View style={styles.imageWrapper}>
                              <WebView
                                renderLoading={(
                                  <ActivityIndicator
                                    color="#009688"
                                    size="large"
                                    style={styles.ActivityIndicatorStyle}
                                 />
                                )}
                                bounces={false}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                useWebKit={true}
                                source={{ uri: 'https://www.free-ebooks.net/computer-sciences-textbooks/The-Dummies-Guide-to-Compiler-Design/pdf?dl&preview?dl&preview' }} />
                             </View>
                             <View style={styles.description}>
                                <Text style={styles.courseCode}>Csc 131</Text>
                                <Text style={[styles.courseTitle, styles.courseTitleTextModal]}>Introduction to math and physics </Text>
                                <Text style={[styles.courseTitle, styles.courseTitleText]}>First material </Text>
                                <Text style={[styles.courseTitle, styles.courseTitleText]}>Lectures: mr gay & mrs  bitch</Text>
                                <Text style={[styles.courseTitle, styles.courseTitleText]}>Material Type : PDF</Text>
                                <Text style={[styles.courseTitle, styles.courseTitleText]}>Pages: 100</Text>
                                <Text style={[styles.courseTitle, styles.courseTitleText]}>Posted on 1st of may</Text>
                                <Text style={[styles.courseTitle, styles.courseTitleText]}>150 copies printed and delivered</Text>
                             </View>
                             <View style={styles.action}>
                                <TouchableOpacity style={styles.actionIcon}>
                                    <MaterialIcon name="file-download" size={30} color={Colors.white} style={styles.icon}/>
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.actionIcon} onPress= {()=>{setShowViewModal(true)}}>
                                    <MaterialIcon name="remove-red-eye" size={30} color={Colors.white} style={styles.icon}/>  
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.actionIcon} onPress={()=>{
                                  setPrint(true)
                                  }}>
                                     <MaterialIcon name="local-printshop" size={30} color={Colors.white} style={styles.icon}/>    
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.actionIcon}>
                                     <MaterialIcon name="comment" size={30} color={Colors.white} style={styles.icon}/>
                                </TouchableOpacity>  
                             </View>
                           </ScrollView>
                           <PreviewModal showModal={showViewModal}  closeModal={()=>setShowViewModal(false)}/>
                           <Modal
                            animationType='slide'
                            transparent
                            visible={print}
                            >
                             <View style={styles.modal}>
                             <View style={styles.modalView}>
                                 <View style={styles.header}>
                                    <Button transparent onPress={()=>setPrint(false)}>
                                      <Icon name='arrow-back' style={styles.iconHeader} />
                                      <Text style={styles.backText}>Back</Text>
                                    </Button>
                                    <View style={styles.printIcon}>
                                        <PrintSvg/>
                                        <Text  style={[styles.courseTitle, styles.printText]}> Printing & Delivery settings</Text>
                                    </View>
                                 </View>
                                 <ScrollView style={styles.deliveryContent}>
                                     <View style={styles.contentItem}>
                                         <Text style={[styles.courseTitle]}> Delivery Time </Text>
                                     </View>
                                     <View style={[styles.contentItem,styles.flexRow]}>
                                         <Text style={[styles.courseTitle]}> Copies </Text>
                                         <View style={[styles.flexRow,styles.copiesNumberWrapper]}>
                                            <TouchableOpacity style={styles.plus}>
                                                  <Text style={styles.signText}> + </Text>
                                                </TouchableOpacity> 
                                                <TextInput keyboardType='numeric' defaultValue={'10'}   style={styles.copiesNumber}/>  
                                                <TouchableOpacity style={styles.minus}>
                                                  <Text style={styles.signText}> - </Text>
                                                </TouchableOpacity> 
                                         </View>
                                     </View>
                                     <View style={[styles.contentItem,styles.flexColumn]}>
                                         <Text style={styles.courseTitle}> Specific request </Text>
                                          <TextInput  multiline={true} defaultValue="I would like my name to written or type in the front and last page of the material as well as my matric number"  numberOfLines={7}  style={styles.textArea} />
                                     </View>
                                     <View  style={[styles.contentItem,styles.flexColumn]}>
                                         <Text style={[styles.courseTitle]}> Delivery Location </Text>
                                         <TextInput  multiline={true} placeholder="Where should it  be delivered" placeholderTextColor="#aeaeaa"  numberOfLines={1}  style={[styles.textArea, styles.textInput]} />
                                     </View>
                                     <View style={[styles.contentItem,styles.flexColumn]}>
                                         <Text style={[styles.courseTitle]}> Phone Numbers </Text>
                                          <View>
                                              <CheckBoxItem onCheck={()=>alert("hdwhd")} text="use my default phone number"/>
                                              <CheckBoxItem onCheck={()=>alert("hdwhd")} text="Use a different phone number"/>
                                          </View>
                                     </View>
                                     <TouchableOpacity style={[styles.button,styles.buttonWrapper]}>
                                        <LinearGradient style={styles.button} colors={['#0F9A47', '#027831']}>
                                           <Text style={[styles.courseTitle, styles.buttonText]}> Submit </Text>
                                        </LinearGradient>
                                     </TouchableOpacity>
                                 </ScrollView>
                             </View>
                                 
                             </View>
                          </Modal>
                        </View>
                    </View>
                     </Modal>
            </>
    );
}
const styles = EStyleSheet.create({
    content:{
      marginTop:"20rem"
    },
    materialItem:{
        width:'90%',
        height:"200rem",
        alignSelf: 'center',
        overflow: 'hidden',
        borderTopLeftRadius: '20rem',
        borderTopRightRadius: '20rem',
        borderBottomLeftRadius: '20rem',
        borderBottomRightRadius: '20rem',
        marginTop: '10rem',
    },
    gradient:{
        height:"200rem",
        padding: '10rem',
    },
    courseCode:{
        fontSize: '37rem',
        fontWeight: 'bold',
        color:"#fff",
    },
    courseTitle:{
        fontSize: '20rem',
        color:"#fff",
        fontFamily:"Itim",
        marginLeft: "2rem",
        lineHeight:"20rem",
        paddingTop: '4rem',

    },
     courseTitleText:{
        // fontSize: '25rem',
        paddingTop:'10rem'
    },
    courseTitleTextModal:{
        fontSize: '30rem',
        paddingTop:'10rem'
    },
      modal:{
        backgroundColor:'transparent',
        flex:1,
        justifyContent:'flex-end'
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
      closeButton:{
         width:'50rem',
         height:'50rem',
         alignSelf: 'center',
         marginTop: '20rem',
         borderRadius: '25rem',
         justifyContent: 'center',
         alignContent: 'center',
      },
      icon:{
        alignSelf:'center',
        justifyContent: 'center',
      },
      imageWrapper:{
        width:"340rem",
        height:"200rem",
        overflow: 'hidden',
        borderRadius:'10rem',
        justifyContent: 'center',
        alignSelf:"center"
      },
      image:{
          width:"340rem",
          height:"200rem",
      },
      description:{
          marginLeft:"24rem",
          marginTop: '30rem',
      },
      action:{
       marginLeft:"24rem",
       marginTop: '30rem',
       flexDirection: 'row',
       marginLeft: '30rem',
      },
      actionIcon:{
          width:"50rem",
          height:"50rem",
          backgroundColor:"#CF2154",
          borderRadius:"40rem",
          marginRight: '40rem',
          alignContent:"center",
          justifyContent: 'center',
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
      left: '-76rem',
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
    button:{
      width:"170rem",
      justifyContent: 'center',
      alignSelf: 'center',
      overflow: 'hidden',
      height:"36rem",
      borderRadius:"10rem",
    },
    buttonWrapper:{
      marginTop:"10rem"
    },
    buttonText:{
      justifyContent: 'center',
      alignSelf: 'center',
    },
    flexRow:{
      flexDirection:'row'
    },
    flexColumn:{
      flexDirection:'column'
    },
    textArea:{
      color:"#fff",
      borderWidth: '1rem',
      borderColor: "#fff",
      marginLeft: "10rem",
      marginRight: '10rem',
      marginTop: "6rem",
      borderRadius: '5rem',
      fontFamily:"Itim",
      padding:'0rem',
      height:"125rem",
      paddingTop:"5rem",
      paddingLeft: '10rem',
      paddingRight: '5rem',
    },
    textInput:{
      height:"30rem",
    } ,
    signText:{
      fontSize: '20rem',
      textAlign:"center",
      color:Colors.white
    },
    plus:{
     left:"-1rem",
     backgroundColor:"#514A4A",
     width:"40rem",
     height:"28rem",
     borderTopLeftRadius:'20rem',
     borderBottomLeftRadius:'20rem'
    },
    minus:{
      right:"-1rem",
      backgroundColor:"#514A4A",
      width:"40rem",
      height:"28rem",
      borderTopRightRadius:'20rem',
      borderBottomRightRadius:'20rem'
    },
    copiesNumber:{
      width:"130rem",
      height:"40rem",
      color:"#fff",
      backgroundColor:"#514A4A",
      textAlign:"center",
      top:"-7rem",
      borderRadius: '10rem',
    },
    copiesNumberWrapper:{
      marginLeft: "70rem",
    }
    
})
export default MaterialItem;