import React from 'react';
import {View, Image, TouchableOpacity, Text , Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet' 
import Views from '../../assets/svg/view.svg'
import Like from '../../assets/svg/like.svg'
import Dislike from '../../assets/svg/dislike.svg'
import Chat from '../../assets/svg/chat.svg'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380

const PostListItem = () => {
  return (
     <View style={styles.postItem}>
     <TouchableOpacity>
        <Image  resizeMode='cover' style={styles.postImage} source={require('../../assets/images/post.png')}/>
     </TouchableOpacity>
        <View>
          <TouchableOpacity>
             <Text style={styles.postTitle} >Things people say and do are the thing we do and say: By the heart of people #autogen</Text>
          </TouchableOpacity>
          <View style={styles.actionList}>
              <View style={styles.action}>
                 <Views width={20*rem} height={20*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12920</Text>
              </View>
              <TouchableOpacity style={styles.action}>
                 <Like width={20*rem} height={20*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12920</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                 <Dislike width={20*rem} height={20*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12920</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                 <Chat width={20*rem} height={20*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12920</Text>
              </TouchableOpacity>
          </View>
        </View>
     </View>
  );
}

const styles =  EStyleSheet.create({
 postItem:{
   width:'90%',
   height:"370rem",
   backgroundColor:"rgba(255, 252, 252, 0.04)",
   alignSelf: 'center',
   borderRadius: '8rem',
   padding: '10rem',
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
   color:'rgba(204, 204, 204, 0.56);'
 }
})


export default PostListItem;