import React from 'react';
import PropTypes from 'prop-types';
import {View, StatusBar, TouchableOpacity, ScrollView, Image, Text} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import _ from 'lodash'
 
const GroupItem = ({navigation, data}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ChatGroup")} style={styles.groupItem}>
    <View style={styles.imageWrapper}>
       <Image style={styles.userImage} source={{uri:data.image}} />
    </View>
    <View style={styles.groupText}>
        <Text numberOfLines={1} style={styles.groupName}> {data.name} </Text>
        <Text numberOfLines={1} style= {styles.lastMessage}> {data.description}  </Text>
    </View>
</TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
imageWrapper:{
  width:'23%',
},
userImage:{
  height:'65rem',
  width:'65rem',
  borderRadius: '100rem',
  marginLeft: '7rem',
  marginTop: '6rem',
},
groupItem:{
   height:'76rem',
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