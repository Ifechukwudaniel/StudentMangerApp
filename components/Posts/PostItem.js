import React from 'react';
import {View, Image, TouchableOpacity, Text , Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet' 
import Views from '../../assets/svg/view.svg'
import Like from '../../assets/svg/like.svg'
import Dislike from '../../assets/svg/dislike.svg'
import Chat from '../../assets/svg/chat.svg'
import { ScrollView } from 'react-native-gesture-handler';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380

const PostItem = () => {
  return (
     <ScrollView>
     <View style={styles.postItem}>
        <Image  resizeMode='cover' style={styles.postImage} source={require('../../assets/images/post.png')}/>
        <View>
             <Text style={styles.postTitle} >Things people say and do are the thing we do and say: By the heart of people #autogen</Text>
          <View style={styles.actionList}>
              <View style={styles.action}>
                 <Views width={25*rem} height={25*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12925</Text>
              </View>
              <TouchableOpacity style={styles.action}>
                 <Like width={25*rem} height={25*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12925</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                 <Dislike width={25*rem} height={25*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12925</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                 <Chat width={25*rem} height={25*rem} style={styles.actionIcon}/>
                 <Text style={styles.actionCount}>12925</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.postWrapper}>
             <Text style={styles.postContent}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi turpis nibh arcu id arcu libero. Volutpat hendrerit nulla mauris porta. Vel turpis netus diam, fringilla blandit ullamcorper integer urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi turpis nibh arcu id arcu libero. Volutpat hendrerit nulla mauris porta. Vel turpis netus diam, fringilla blandit ullamcorper integer urna, fermentum.
             </Text>
          </View>
        </View>
     </View>
   </ScrollView>
  );
}

const styles =  EStyleSheet.create({
 postItem:{
   width:'100%',
   // height:"100%",
   backgroundColor:"rgba(255, 252, 252, 0.04)",
   alignSelf: 'center',
   borderRadius: '8rem',
   padding: '10rem',
 },
 postImage :{
   width:'95%',
   height:'300rem',
   alignSelf:'center',
   borderRadius: '10rem',
 },
 postTitle:{
   fontSize: '17rem',
   color:'#FFFCFC',
   textDecorationLine:'underline',
   textTransform: "capitalize",
   width:'330rem',
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
   color:'rgba(254, 254, 254, 0.56);'
 },
 postContent:{
  color:'rgba(255, 252, 252, 0.7);',
  fontSize:'16rem',
  lineHeight:'20rem'
 },
 postWrapper:{
     padding:'13rem'
 }
})


export default PostItem;