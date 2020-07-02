import React, { Component } from 'react';
import { View,  StyleSheet, Image, Text, ScrollView} from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet'
import { TouchableOpacity } from 'react-native-gesture-handler';
class Setting extends Component {
    render() { 
        return (
              <ScrollView style={styles.container} >
                  <View style={styles.userDescription}>
                      <Image source={require('../../assets/images/image.jpeg')} style={styles.userImage}/>
                      <Text style={styles.userText}>  Daniel </Text>
                  </View>
                  <View style={styles.userSetting}>
                      <View style={styles.settingItem}>
                        <Text style={styles.settingText}>  Allow Notification </Text>
                      </View>
                      <View style={styles.settingItem}>
                        <Text style={styles.settingText}>  Download Location </Text>
                      </View>
                      <View style={styles.settingItem}>
                        <Text style={styles.settingText}>  Allow Access </Text>
                      </View>
                      <View style={styles.settingItem}>
                        <Text style={styles.settingText}>  change password</Text>
                      </View>
                      <View style={styles.settingItem}>
                        <Text style={styles.settingText}>  Change Phone Number </Text>
                      </View>
                      <View style={styles.settingItem}>
                        <Text style={styles.settingText}> Department </Text>
                      </View>
                      <View style={styles.settingItem}>
                        <Text style={styles.settingText}> Level  </Text>
                      </View>
                  </View>
              </ScrollView>
        );
    }
}

const styles = ExtendedStyleSheet.create({
    container:{
        flex:1
    },
    userDescription :{
     flex:30,
     marginBottom: '20rem',
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
    },
    userText:{
      fontSize: '24rem',
      textAlign:'center',
      color:'#fff',
      fontWeight: '500',
      marginTop: '20rem',
    },
    settingItem:{
      width:"100%",
      height:"60rem",
      backgroundColor: "rgba(255, 255, 255, 0.06)",
      flexDirection: 'row',
      marginTop: '3rem',
      // justifyContent: 'center',
    },
    settingText:{
      color:' rgba(255, 255, 255, 0.77)',
      fontWeight:'600',
      textAlign:"center",
      fontSize:'19rem',
      lineHeight:'50rem'
    }
});
 
export default Setting;