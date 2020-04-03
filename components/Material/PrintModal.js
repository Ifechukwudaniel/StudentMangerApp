import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Modal, TouchableHighlight, Image, ActivityIndicator} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import { Text} from 'native-base';
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import WebView from 'react-native-webview'
import PDFView from 'react-native-view-pdf';
import HeaderComponent from '../Header';




const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://www.free-ebooks.net/computer-sciences-textbooks/The-Dmmies-Guide-to-Compiler-Design/pdf?dl&preview?dl&preview',
};


 
const PrintModal = ({showModal, closeModal}) => {
    const [viewLoad, setViewLoad] = useState(false)
    return (
     <>
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
                                 <View style={styles.deliveryContent}>
                                     <View style={styles.contentItem}>
                                         <Text style={[styles.courseTitle]}> Delivery Time </Text>
                                     </View>
                                     <View style={styles.contentItem}>
                                         <Text style={[styles.courseTitle]}> Copies </Text>
                                     </View>
                                     <View style={[styles.contentItem,styles.flexColumn]}>
                                         <Text style={styles.courseTitle}> Specific request </Text>
                                          <TextInput  multiline={true} defaultValue="I would like my name to written or type in the front and last page of the material as well as my matric number"  numberOfLines={7}  style={styles.textArea} />
                                     </View>
                                     <View  style={[styles.contentItem,styles.flexColumn]}>
                                         <Text style={[styles.courseTitle]}> Delivery Location </Text>
                                         <TextInput  multiline={true}  numberOfLines={1}  style={[styles.textArea, styles.textInput]} />
                                     </View>
                                     <View style={[styles.contentItem,styles.flexColumn]}>
                                         <Text style={[styles.courseTitle]}> Phone Numbers </Text>
                                          <View>
                                              <CheckBoxItem onCheck={()=>alert("hdwhd")} text="use my default phone number"/>
                                              <CheckBoxItem onCheck={()=>alert("hdwhd")} text="Use a different phone number"/>
                                          </View>
                                     </View>
                                     <TouchableOpacity style={styles.button}>
                                        <LinearGradient style={styles.button} colors={['#0F9A47', '#027831']}>
                                           <Text style={[styles.courseTitle, styles.buttonText]}> Submit </Text>
                                        </LinearGradient>
                                     </TouchableOpacity>
                                 </View>
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
          borderRadius:"10rem"
    
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
        } 
})
export default PrintModal;