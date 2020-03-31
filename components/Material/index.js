import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Modal, TouchableHighlight} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header'
import { Text } from 'native-base';
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


 
const Material = ({navigation}) => {
    const [showModal , setShowModal] = useState(false)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                 <View>
                    <TouchableOpacity style= {styles.materialItem} onPress={()=>setShowModal(true)}>
                            <LinearGradient style={styles.gradient} colors= {['#126FFE', '#0B4FB9']}>
                                <Text style={styles.courseCode}>Csc 131</Text>
                                <View style={styles.line}/>
                                <Text style={styles.courseTitle}>Introduction to math and physics </Text>
                                <Text style={styles.courseTitle}>First material </Text>
                                <Text style={styles.courseTitle}>Lectures: mr gay & mrs  bitch</Text>
                                <Text style={[styles.courseTitle, {fontSize:15}]}>Posted on 1st of may</Text>
                            </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style= {styles.materialItem}>
                            <LinearGradient style={styles.gradient}  colors= {['#126FFE', '#0B4FB9']}>
                                <Text style={styles.courseCode}>Csc 121</Text>
                                <View style={styles.line}/>
                                <Text style={styles.courseTitle}>Introduction to Quantum physis </Text>
                                <Text style={styles.courseTitle}>First material </Text>
                                <Text style={styles.courseTitle}>Lectures: mr gay & mrs  bitch</Text>
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
                               <MaterialIcon name="close" size={45} color={Colors.white} style={styles.icon}/>
                             </LinearGradient>
                          </TouchableOpacity>
                        </View>
                    </View>
                     </Modal>
                  </View>
            </ScrollView>
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    scrollView:{
     marginTop:"30%"
    },
    materialItem:{
        width:'90%',
        height:"190rem",
        alignSelf: 'center',
        overflow: 'hidden',
        borderTopLeftRadius: '20rem',
        borderTopRightRadius: '20rem',
        borderBottomLeftRadius: '20rem',
        borderBottomRightRadius: '20rem',
        marginTop: '10rem',
    },
    gradient:{
        height:"190rem",
        padding: '10rem',
    },
    courseCode:{
        fontSize: '40rem',
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
    line:{
        width:"100%",
        height:"2%",
        backgroundColor:"#fff",
        marginTop:'2rem'
      },
      modal:{
        backgroundColor:'transparent',
        flex:1,
        justifyContent:'flex-end'
      },
      modalView:{
        backgroundColor:Colors.black,
        height:'89%',
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
         width:'60rem',
         height:'60rem',
         alignSelf: 'center',
         marginTop: '30rem',
         borderRadius: '30rem',
      },
      icon:{
        alignSelf:'center',
        marginTop:'5rem'
      }
})
export default Material;