import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Image} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header'
import { Text,  } from 'native-base';



 
const Chat = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.people}>
              <Text style={styles.text}>
                   People You May Know
              </Text>
               <ScrollView pagingEnabled horizontal={true}  style={styles.userImageGroup}>
                    <TouchableOpacity style={styles.userImage}>
                        <Image style={styles.userImage} source={require('../../assets/images/1.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userImage}>
                        <Image style={styles.userImage} source={require('../../assets/images/2.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userImage}>
                        <Image style={styles.userImage} source={require('../../assets/images/3.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userImage}>
                        <Image style={styles.userImage} source={require('../../assets/images/4.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userImage}>
                        <Image style={styles.userImage} source={require('../../assets/images/5.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userImage}>
                        <Image style={styles.userImage} source={require('../../assets/images/Login.png')}/>
                    </TouchableOpacity>
               </ScrollView>
            </View>
            <View style={styles.previousChat}>
                <Text style={styles.text}>
                     Messages
                </Text>
                <View style={styles.messageView}>
                   <TouchableOpacity>
                        <View>
                           <Image style={styles.userImage} source={require('../../assets/images/Group.png')} />
                        </View>
                        <View>

                        </View>
                   </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    people:{
    flex: 20,
    },
    previousChat:{
      flex: 80,
    },
    text:{
      color:'rgba(255, 255, 255, 0.57)',
      fontSize:'16rem',
      marginLeft: '20rem',
      marginTop: '20rem',
    }
,
userImageGroup:{
     flexDirection: 'row',
     height:'70rem',
     width:'100%',
     marginLeft:'30rem'
},
userImage:{
    height:'70rem',
    width:'70rem',
    borderRadius: '100rem',
    marginRight: '30rem',
    marginTop: '6rem',
},
messageView:{
    width:'100%',
    height:'100%',
    backgroundColor: ' rgba(255, 253, 253, 0.06);',
    marginTop: '20rem',
}
})
export default Chat;