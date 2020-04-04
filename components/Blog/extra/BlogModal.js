import React, {useState} from 'react';
import {View, Modal} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../../../constants/Colors';
import HeaderComponent from '../../Header';


 
const BlogModal = ({showModal, closeModal}) => {
    return (
     <>
        <Modal
          animationType='slide'
          visible={showModal} >
            <View style={styles.preview}>
                 <HeaderComponent style={styles.viewMaterialText} screenName="Read Blog" onBackPress={()=>closeModal()}/>
            </View>
        </Modal>
     </>
    );
}
const styles = EStyleSheet.create({
      preview:{
        flex:1,
        backgroundColor:Colors.black,
      }
})
export default BlogModal;