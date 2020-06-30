import React, { Component } from 'react';
import { View,  StyleSheet, Image} from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet'
class Setting extends Component {
    render() { 
        return (
              <View style={styles.container} >
                  <View style={styles.userDescription}>
                      <Image source={require('../../assets/images/image.jpeg')} style={styles.userImage}/>
                  </View>
                  <View style={styles.userSetting}>

                  </View>
              </View>
        );
    }
}

const styles = ExtendedStyleSheet.create({
    container:{
        flex:1
    },
    userDescription :{
     flex:30
    },
    userSetting:{
        flex:70
    },
    userImage:{
      width:'100rem',
      height:'100rem',
      alignSelf: 'center',
      marginTop: '50rem',
      borderRadius:'10rem',
      borderWidth: '3rem',
      borderColor:'#FF912C'
    }
});
 
export default Setting;