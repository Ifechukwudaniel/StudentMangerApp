import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Modal} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header'
import { Text } from 'native-base';



 
const Material = ({navigation}) => {
    const [showModal , setShowModal] = useState(false)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                 <View>
                    <TouchableOpacity style= {styles.materialItem} onPress={()=>console.log("iwdjdijdwidjdidj2idj2jd2dj2id2jdi2ji2j2ji2j2ij2eij2iej2ei2e")}>
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
                    <Modal visible={showModal} presentationStyle='formSheet'   />
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
     marginTop:"100rem"
    },
    materialItem:{
        width:'80%',
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
})
export default Material;