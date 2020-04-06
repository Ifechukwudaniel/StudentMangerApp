import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Modal,Platform, TouchableHighlight, Image, ActivityIndicator} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../../constants/Colors';
import WebView from 'react-native-webview'
import HeaderComponent from '../Header';



const AttendanceModal = ({showModal, closeModal}) => {
    const [viewLoad, setViewLoad] = useState(false)
    return (
     <>
        <Modal
          animationType='slide'
          visible={showModal} >
            <View style={styles.container}>
                 
                   </View>
                </Modal>
            </>
    );
}
const styles = EStyleSheet.create({
      container:{
        flex:1,
        backgroundColor:Colors.black,
      }
})
export default AttendanceModal;