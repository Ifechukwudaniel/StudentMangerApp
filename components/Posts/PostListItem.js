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
    const {image, content} = props
  return (
     <TouchableOpacity onPress={()=>props.navigation.navigate("PostItem",{data:props})} style={styles.postItem}>
        <View>
          <View>
             <Text numberOfLines={1} style={styles.postTitle} >{props.title}</Text>
          </View>
          <View style={styles.actionList}>
             <Text numberOfLines={1} style={styles.postContent} >{props.content}</Text>
             <Text numberOfLines={1}  style={styles.readMore} >...Read more</Text>
          </View>
        </View>
     </TouchableOpacity>
  );
}

const styles =  EStyleSheet.create({
 postItem:{
   width:'100%',
   height:"100rem",
   backgroundColor:"rgba(36, 35, 35, 1)",
   alignSelf: 'center',
   borderRadius: '8rem',
   padding: '10rem',
   marginTop:'10rem'
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
  //  flexDirection: 'row',
   justifyContent: 'space-around',
   width:'100%',
   marginTop: '10rem',
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
 },
 postContent:{
  color:'rgba(255, 252, 252, 0.7);',
  fontSize:'16rem',
  lineHeight:'15rem',
  fontSize: '15rem',
  width:'320rem',
  marginLeft: '20rem',
  marginTop:'5rem'
 },
 readMore:{
  color:'#448CF8',
  fontSize:'16rem',
  lineHeight:'15rem',
  fontSize: '15rem',
  width:'320rem',
  marginLeft: '20rem',
 }
})


export default PostListItem;