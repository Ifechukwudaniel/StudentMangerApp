import React from 'react';
import PropTypes from 'prop-types';
import {View, StatusBar, TouchableOpacity, ScrollView, Image, Text} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
 
const GroupItem = () => {
  return (
    <TouchableOpacity style={styles.groupItem}>
    <View style={styles.imageWrapper}>
       <Image style={styles.userImage} source={require('../../assets/images/Group.png')} />
    </View>
    <View style={styles.groupText}>
        <Text numberOfLines={1} style={styles.groupName}> How the world works </Text>
        <Text numberOfLines={1} style= {styles.lastMessage}> Emake:How was the wedding hchschshhs h shchshcs xhcshcsh scsgcs  </Text>
    </View>
</TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
imageWrapper:{
  width:'23%',
},
userImage:{
  height:'70rem',
  width:'70rem',
  borderRadius: '100rem',
  marginLeft: '7rem',
  marginTop: '6rem',
},
groupItem:{
   height:'13%',
   backgroundColor:'rgba(255,255,255,0.08)',
   marginTop: '3rem',
   flexDirection: 'row',
},
groupName:{
   color: '#fff',
   fontSize: '17rem',
   fontWeight: 'bold',
   marginTop:'15rem',
   flexWrap: "wrap"
   
},
lastMessage:{
  color:'rgba(255,255,255,0.5)',
  marginTop:'15rem',
  flexWrap: "wrap"
},
groupText:{
  width:'77%'
}
})
 
GroupItem.propTypes = {};
 
export default GroupItem;