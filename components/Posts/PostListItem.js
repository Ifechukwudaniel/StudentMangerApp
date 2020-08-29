import React from 'react';
import {View, Image, TouchableOpacity, Text , Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet' 
import Views from '../../assets/svg/view.svg'
import Like from '../../assets/svg/like.svg'
import Dislike from '../../assets/svg/dislike.svg'
import Chat from '../../assets/svg/chat.svg'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import FastImage from 'react-native-fast-image';
const PostListItem = (props) => {
    const {image} = props
  return (
     <View style={styles.postItem}>
     <TouchableOpacity onPress={()=>props.navigation.navigate("PostItem",{data:props})}>
        <Image defaultSource= {require('../../assets/images/preloaded.png')}  resizeMode={FastImage.resizeMode.cover} style={styles.postImage} source={{url:image,  priority: FastImage.priority.high}}/>
     </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={()=>props.navigation.navigate("PostItem",{data:props})}>
             <Text style={styles.postTitle} >{props.title}</Text>
          </TouchableOpacity>
          <View style={styles.actionList}>
              <TouchableOpacity style={styles.action}>
                 <Like width={20*rem} height={20*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12920</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                 <Dislike width={20*rem} height={20*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12920</Text>
              </TouchableOpacity>
              <View style={styles.action}>
                 <Chat width={20*rem} height={20*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12920</Text>
              </View>
          </View>
        </View>
     </View>
  );
}

const styles =  EStyleSheet.create({
 postItem:{
   width:'90%',
   height:"340rem",
   backgroundColor:"rgba(255, 252, 252, 0.04)",
   alignSelf: 'center',
   borderRadius: '8rem',
   padding: '10rem',
   marginTop:'20rem'
 },
 postImage :{
   width:'300rem',
   height:'230rem',
   alignSelf:'center',
   borderRadius: '10rem',
 },
 postTitle:{
   fontSize: '15rem',
   color:'#FFFCFC',
   textDecorationLine:'underline',
   textTransform: "capitalize",
   width:'300rem',
   paddingLeft: "10rem",
   marginTop: '10rem',
 },
 actionList:{
   alignSelf: 'center',
   flexDirection: 'row',
   justifyContent: 'space-around',
   width:'100%',
   marginTop: '15rem',
 },
 action:{
 
 },
 actionIcon:{
  alignSelf:'center',
  width:'30rem',
  height:'30rem'
 },
 actionCount:{
   color:'rgba(204, 204, 204, 0.56);',
   marginTop:'5rem'
 }
})


export default PostListItem;