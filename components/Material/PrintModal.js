import React, {useState} from 'react';
import {View, StatusBar,Text,  TouchableOpacity, ScrollView, Modal,KeyboardAvoidingView,TextInput,TouchableHighlight, Image, ActivityIndicator} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import { Button} from 'native-base';
import Colors from '../../constants/Colors';
import PrintSvg from '../../assets/svg/print.svg'
import CheckBoxItem from './extra/CheckBoxItem';
import Icon from 'react-native-vector-icons/Ionicons';

 
const PrintModal = ({showModal, closeModal}) => {
  const [copies , setCopies]  = useState(1)
    return (
     <>
      <Modal
                            animationType='slide'
                            transparent
                            visible={showModal}
                            >
                             <View  style={styles.modal}>
                             <View style={styles.modalView}>
                                 <View style={styles.header}>
                                    <Button transparent onPress={()=>closeModal()}>
                                      <Icon size={30} name='ios-arrow-back' style={styles.iconHeader} />
                                      <Text style={styles.backText}>Back</Text>
                                    </Button>
                                    <View style={styles.printIcon}>
                                        <PrintSvg/>
                                        <Text  style={[styles.courseTitle, styles.printText]}> Printing & Delivery settings</Text>
                                    </View>
                                 </View>
                                  <ScrollView>
                                 <KeyboardAvoidingView style={styles.deliveryContent}>
                                     <View style={styles.contentItem}>
                                         <Text style={[styles.courseTitle]}> Delivery Time </Text>
                                          <TextInput keyboardType="numeric" style={[styles.textArea,styles.textInput]}/>
                                            
                                     </View>
                                     <View style={[styles.contentItem,styles.flexRow]}>
                                         <Text style={[styles.courseTitle]}> Copies </Text>
                                         <View style={[styles.flexRow,styles.copiesNumberWrapper]}>
                                            <TouchableOpacity onPress={()=>setCopies( Number.parseInt(copies+1))} style={styles.plus}>
                                                  <Text style={styles.signText}> + </Text>
                                                </TouchableOpacity> 
                                                <TextInput onChangeText={value=>setCopies(value)} keyboardType='numeric'  value={copies.toString()}   style={styles.copiesNumber}/>  
                                                <TouchableOpacity  onPress={()=> copies>=1? setCopies(Number.parseInt(copies-1)) : setCopies(0)} style={styles.minus}>
                                                  <Text style={styles.signText}> - </Text>
                                                </TouchableOpacity> 
                                         </View>
                                     </View>
                                     <View style={[styles.contentItem,styles.flexColumn]}>
                                         <Text style={styles.courseTitle}> Specific request </Text>
                                          <TextInput  multiline={true} defaultValue="I would like my name to written or type in the front and last page of the material as well as my matric number"  numberOfLines={7}  style={styles.textArea} />
                                     </View>
                                     <KeyboardAvoidingView  style={[styles.contentItem,styles.flexColumn]}>
                                         <Text style={[styles.courseTitle]}> Delivery Location </Text>
                                         <TextInput  multiline={true} placeholder="Where should it  be delivered" placeholderTextColor="#aeaeaa"  numberOfLines={1}  style={[styles.textArea, styles.textInput]} />
                                     </KeyboardAvoidingView>
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
                                 </KeyboardAvoidingView>
                                 </ScrollView>
                             </View>   
                             </View>
                          </Modal>
       
    </>
    );
}
const styles = EStyleSheet.create({
      courseTitle:{
          fontSize: '20rem',
          color:"#fff",
          fontFamily:"Itim",
          marginLeft: "2rem",
          lineHeight:"20rem",
          paddingTop: '4rem',
      },
        modal:{
          backgroundColor:'rgba(360, 360, 360, 0.002)',
          flex:1,
          justifyContent:'flex-end',
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
        imageWrapper:{
          width:"340rem",
          height:"200rem",
          overflow: 'hidden',
          borderRadius:'10rem',
          justifyContent: 'center',
          alignSelf:"center"
        },
        description:{
            marginLeft:"24rem",
            marginTop: '30rem',
        },
        header:{
          marginTop:"52rem",
          flexDirection: 'row',
        },
        backText:{
          fontSize: '20rem', 
          color:"#fff",
          fontFamily:"Itim",
          // padding:"2rem"
          marginBottom: '5rem',
      },
      iconHeader:{
          color:"#fff",
          marginLeft:'15rem',
          marginRight:'5rem'
      },
      printIcon:{
        top: '-10rem',
        marginLeft: "80rem",
      },
      printText:{
        left: '-80rem',
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
        marginTop:"10rem",
        // marginBottom: "300rem",
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
        textAlignVertical: 'top'
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
export default PrintModal;