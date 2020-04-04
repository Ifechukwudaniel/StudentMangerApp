import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Platform, Image} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../../../constants/Colors';

const CommentItem = ({username,userImage , comment, date}) => {
    return (
        <>
           <View style={[styles.flexRow, styles.comment]}>
              <View style={styles.iconWrapper} >
                    <Image style={styles.icon} resizeMode='cover' source={require("../../../assets/images/image.jpeg")}/>
              </View>
              <View >
                   <View style={styles.flexRow}>
                      <Text style={styles.username}> John Paul </Text>
                      <Text style={styles.time}>A minite  ago</Text>
                   </View>
                    <Text style={styles.userComment}> 
                    The problem hers is that we can not get what  
                    he man is saying in the material . omo it is just to hard</Text>
              </View>
           </View> 
        </>
    );
}
const styles = EStyleSheet.create({
    comment:{
       width:"421rem",
    //    height:"148rem",
       borderTopWidth: '5rem',
       borderColor: Colors.white,
       paddingTop: "20rem",
    },
    flexRow:{
      flexDirection:'row',
      top: '-10rem',
    //   marginTop: '10rem',
    },
    icon:{
        alignSelf: 'center',
        height:"50rem",
        borderRadius: '100rem',
        width:"50rem"
    },
    iconWrapper:{
       marginRight: "20rem",
       marginLeft: "20rem",
    },
    username:{
        fontSize: '20rem',
        color:"#fff",
        fontFamily:"Itim",
        marginLeft: "2rem",
        lineHeight:"20rem",
        paddingTop: '4rem',
    },
    userComment:{
        fontSize: '17rem',
        color:"#fff",
        fontFamily:"Itim",
        marginLeft: "2rem",
        lineHeight:"20rem",
        flexWrap: 'wrap',
        marginTop: '10rem',
        width:"280rem",
        marginBottom: '29rem',
        // paddingTop: '4rem',
    },
    time:{
        fontSize: '14rem',
        color:"#fff",
        fontFamily:"Itim",
        marginLeft: "2rem",
        lineHeight:"15rem",
        flexWrap: 'wrap',
        marginTop: '5rem',
        width:"280rem",
        marginLeft:'100rem' 
    }
})
export default CommentItem;