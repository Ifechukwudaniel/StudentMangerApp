import React, {useState} from 'react';
import {View, Modal, ImageBackground, ScrollView} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../../../constants/Colors';
import HeaderComponent from '../../Header';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


 
const BlogModal = ({showModal, closeModal, image}) => {
    return (
     <>
        <Modal
          animationType='slide'
          
          visible={showModal} >
            <ScrollView style={styles.container}>
            <View style={styles.imageWrapper}>
                 <ImageBackground 
                    source= {{uri:`${image}`}}
                    style={styles.image}
                    resizeMode={'cover'} 
                    imageStyle={styles.imageStyle}
                 >
                 <TouchableOpacity onPress={()=>closeModal()}>
                    <Icon name='arrow-back' style={styles.backArrow}/>
                 </TouchableOpacity>
                </ImageBackground>
              </View>
            </ScrollView>
        </Modal>
     </>
    );
}
const styles = EStyleSheet.create({
      container:{
        flex:1,
        backgroundColor:Colors.black,
      },
      imageWrapper:{
        overflow: 'hidden',
        borderBottomRightRadius: '50rem',
        borderBottomLeftRadius: '50rem',
      },
      image:{
        width: "421rem",
        height:'320rem',
      },
      backArrow:{
       color:'#fff',
       marginTop: "30rem",
       marginLeft: '20rem',
      }
})
export default BlogModal;