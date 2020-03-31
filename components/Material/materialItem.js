import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Modal, TouchableHighlight, Image, ActivityIndicator} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'native-base';
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import WebView from 'react-native-webview'


 
const MaterialItem = () => {
    const [showModal , setShowModal] = useState(false)
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
                           <View style={styles.content}>
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
                                <TouchableOpacity style={styles.actionIcon}>
                                    <MaterialIcon name="remove-red-eye" size={30} color={Colors.white} style={styles.icon}/>  
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.actionIcon}>
                                     <MaterialIcon name="local-printshop" size={30} color={Colors.white} style={styles.icon}/>    
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.actionIcon}>
                                     <MaterialIcon name="comment" size={30} color={Colors.white} style={styles.icon}/>
                                </TouchableOpacity>  
                             </View>
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
      ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
      },
})
export default MaterialItem;