import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text , Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet' 
import Views from '../../assets/svg/view.svg'
import Like from '../../assets/svg/like.svg'
import Dislike from '../../assets/svg/dislike.svg'
import Chat from '../../assets/svg/chat.svg'
import { ScrollView } from 'react-native-gesture-handler';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import { Left, Right, Icon } from 'native-base';

const PostItem = (props) => {
   const {title, content, image} = props.navigation.state.params.data
   const [like, setLike ] = useState(false)
   const [dislike, setDisLike ] = useState(false)
   const [comment, setComment] = useState(false)
  return (
     <ScrollView>
     <View style={styles.postItem}>
        <View>
             <Text style={styles.postTitle} >{title}</Text>
          <View style={styles.postWrapper}>
             <Text style={styles.postContent}>
                {content}
             </Text>
          </View>
        </View>
     </View>
   </ScrollView>
  );
}

const styles =  EStyleSheet.create({
 postItem:{
   flex: 1,
   width:'100%',
   height:"100%",
   backgroundColor:"rgba(255, 252, 252, 0.04)",
   alignSelf: 'center',
   borderRadius: '8rem',
   padding: '10rem',
 },
 postImage :{
   width:'95%',
   height:'100%',
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
   marginBottom: '30rem',
 },
 actionList:{
   alignSelf: 'center',
   flexDirection: 'row',
   justifyContent: 'space-around',
   width:'100%',
   marginTop: '15rem',
   marginBottom: '30rem',
 },
 action:{
 
 },
 actionIcon:{
  alignSelf:'center',
  width:'30rem',
  height:'30rem',

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
 }, font:{
    color:"#fff",
    alignSelf: 'center',
 }
})


export default PostItem;