import React, {useState, useEffect} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Image, FlatList, AsyncStorage} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header'
import { Text,  } from 'native-base';
import GroupItem from './GroupItem';
import firebase from '../../firebase'
import {snapshotToArray} from '../../util/index'
import Keys from '../../constants/Keys';
import { ActivityIndicator } from 'react-native-paper';
const Chat = ({navigation}) => {
    const [groupList, setGroupList] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(()=>{
        AsyncStorage.getItem(Keys.department)
        .then(value=>{
            firebase.database().ref('groups')
            .orderByChild('department')
            .equalTo(JSON.parse(value)._id)
            .once('value')
            .then((snapShot)=>{
                 alert('jj')
                 setLoading(false)
                  console.log((snapshotToArray(snapShot)))
                //  setGroupList(snapshotToArray(snapShot))
            })
            .catch(err=>{
                 alert(err)
                console.log(err)
            })
        })
        .catch(err=>{
            alert('err')
        })
    })

    
    renderGroups=(loading)=>{
        if(loading){
          return   <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
        }
       return (
         <FlatList
         data={groupList}
         style={styles.materialList}
         renderItem ={(data)=>(<GroupItem data={data.item} navigation={navigation}/>)}
         keyExtractor={item=> item.key}
         numColumns={1}
      />
       )
     }

    return (
        <View style={styles.container}>
            <View style={styles.previousChat}>
                <View style={styles.messageView}>
                    {renderGroups(loading)}
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
    backgroundColor: 'rgba(255,255,255,0.07);',
    marginTop: '4rem',
},
spinner:{
    alignSelf:'center',
    color:"#FF912C",
    
  },
})
export default Chat;