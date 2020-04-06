import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Modal,Platform, TouchableHighlight, Image, ActivityIndicator} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../../constants/Colors';
import WebView from 'react-native-webview'
import HeaderComponent from '../Header';




const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://www.free-ebooks.net/computer-sciences-textbooks/The-Dmmies-Guide-to-Compiler-Design/pdf?dl&preview?dl&preview',
};


 
const PreviewModal = ({showModal, closeModal}) => {
    const [viewLoad, setViewLoad] = useState(false)
    return (
     <>
        <Modal
          animationType='slide'
          visible={showModal} >
            <View style={styles.preview}>
                 <HeaderComponent style={styles.viewMaterialText} screenName="Read Materials" onBackPress={()=>closeModal()}/>
                     {
                     viewLoad ? (<View/>  ) : (
                          <ActivityIndicator style={styles.ActivityIndicatorStyle}  size="large"/>
                            )
                            }
                          <WebView
                          bounces={false}
                          javaScriptEnabled={true}
                          domStorageEnabled={true}
                          useWebKit={true}
                          style={{ flex: viewLoad ? 1 :0 }}
                          onLoadEnd={()=>setViewLoad(true)}
                          onError={()=>{
                            alert("Please an error occurred, please check your connection ")
                            setViewLoad(true)
                            }}
                          source={{ uri:'https://www.free-ebooks.net/computer-sciences-textbooks/The-Dmmies-Guide-to-Compiler-Design/pdf?dl&preview?dl&preview' }} />
                   </View>
                </Modal>
            </>
    );
}
const styles = EStyleSheet.create({
      ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
      },
      viewMaterialText:{
       width:"200rem"
      },
      preview:{
        flex:1,
        backgroundColor:Colors.black,
      }
})
export default PreviewModal;