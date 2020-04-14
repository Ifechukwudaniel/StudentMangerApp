import React, {useState} from 'react';
import {View, Text,StatusBar, TouchableOpacity, Dimensions,TouchableHighlight, TouchableNativeFeedback} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Icon } from 'native-base';
import PreviewModal from './PreviewModal';
const entireScreenWidth = Dimensions.get('window').width;

const DownloadItem = ({last}) => {
  const [viewLoad, setViewLoad] = useState(false)
    return (
      <View>
          <TouchableHighlight onPress={()=>setViewLoad(true)} style={[styles.downloadItem, last? styles.last: {}]}>
          <>
            <Text style={styles.courseCode}>Csc 121</Text>
            <Text ellipsizeMode='tail' numberOfLines={1} style={styles.courseTitle}>introduction to mamatics and   physics </Text>
            <Text style={styles.courseTitle}>Second material</Text>
            <Text style={styles.courseTitle}>Pdf</Text>
            </>
        </TouchableHighlight>
        <View style={[styles.flexRow, {alignSelf:"flex-end"}, styles.iconGroup]}>
           <TouchableOpacity style={styles.deleteIcon}>
              <Icon style={styles.icon} name="trash"/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.folderIcon}>
              <Icon style={styles.icon} name="folder"/>
           </TouchableOpacity>
           <PreviewModal showModal={viewLoad} closeModal={()=>setViewLoad(false)} />
        </View>
      </View>
    );
}
const styles = EStyleSheet.create({
    downloadItem:{
     height:"110rem",
     width:"100%",
     backgroundColor: "#126AF3",
     marginTop: '10rem',
    },
    flexRow:{
     flexDirection: 'row',
    },
    courseCode:{
       fontSize:'24rem',
       color:"#fff",
       fontFamily:"Brother1816-Bold",
       marginTop:'10rem',
       marginLeft: '13rem',
       lineHeight:'28rem',
    },
    courseTitle:{
      fontSize:'18rem',
      color:"#fff",
      fontFamily:"Itim",
      marginLeft: '13rem',
      top: '-10rem',
      width:'250rem',
      flexWrap: 'wrap',
      // wordWrap: 'break-word'
   },
   icon:{
    color:"#fff",
    alignSelf: 'center',
    
   },
   deleteIcon:{
     backgroundColor: "#D80404",
     height:'45rem',
     width:"45rem",
     justifyContent: 'center',
     borderRadius: '100rem',
     marginRight: '10rem',
   },
   folderIcon:{
    backgroundColor: "#D6771F",
    height:'45rem',
    width:"45rem",
    justifyContent: 'center',
    borderRadius: '100rem',
    marginRight:"10rem"
   },
   iconGroup:{
    top:"45rem",
    height: "50rem",
    // backgroundColor:"red",
    position: 'absolute',
   },
   last:{
     marginBottom: '100rem',
   }
})
export default DownloadItem;