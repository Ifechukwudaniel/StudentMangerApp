import React, { Component } from 'react';
import { View,  StyleSheet, Image, Text, ScrollView, Switch, Dimensions, AsyncStorage, ImagePickerIOS} from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet'
import { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native-gesture-handler';
// import { Switch } from 'react-native-switch';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import Exit from '../../assets/svg/exit.svg'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker'


class Setting extends Component {
  state={
    allowNotification:true,
    avatarSource:''
  }
   options = {
    title: 'Select An Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  
  showImagePicker= ()=>{
    ImagePicker.showImagePicker(this.options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        
      } else if (response.error) {
        
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
        });
      }
    });
  }

    render() { 
        return (
              <ScrollView style={styles.container} >
                  <TouchableOpacity onPress={this.showImagePicker} style={styles.userDescription}>
                      <Image source={require('../../assets/images/image.jpeg')} style={styles.userImage}/>
                      <Text style={styles.userText}>  Daniel </Text>
                  </TouchableOpacity>
                  <View style={styles.userSetting}>
                      <View style={styles.settingItem}>
                        <Text style={styles.settingText}>  Allow Notification </Text>
                        <View style={styles.settingView}>
                        <Switch
                          style={{alignSelf:'center'}}
                          value={this.state.allowNotification}
                          onValueChange={()=>this.setState({allowNotification: !this.state.allowNotification})}
                          trackColor={{ false: "#000", true: "#rgba(255, 255, 255, 0.09);" }}
                          thumbColor={this.state.allowNotification ? "#FF912C" : "#f4f3f4"}
                          ios_backgroundColor="#3e3e3e"
                        />
                        </View>
                      </View>
                      <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>  Download Location </Text>
                        <View style={[styles.settingView, {marginLeft:80*rem}]}>
                            <Text numberOfLines={1} style={styles.locationText}>C/qqq/qci/dwd</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>  Change password</Text>
                        <View style={[styles.settingView]}>
                            <Text numberOfLines={1} style={styles.locationText}>**********</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>  Change Phone Number </Text>
                        <View style={[styles.settingView, {marginLeft:40*rem}]}>
                            <Text numberOfLines={1} style={styles.locationText}>08034055074</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}> Department </Text>
                        <View style={[styles.settingView, {width:'100%', marginLeft:0*rem}]}>
                            <Text  style={styles.locationText}> Computer science</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}> Level  </Text>
                        <View style={[styles.settingView, {marginLeft:200*rem}]}>
                            <Text  style={styles.locationText}> 100</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                        AsyncStorage.clear()
                        this.props.navigation.navigate('Auth')
                      }} style={styles.logOutButton}>
                            <Text style={styles.logOutText}>  LOG OUT  <Exit/> </Text>
                      </TouchableOpacity>
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
      // justifyContent: 'space-around',
    },
    settingText:{
      color:' rgba(255, 255, 255, 0.77)',
      fontWeight:'600',
      textAlign:"center",
      fontSize:'19rem',
      lineHeight:'50rem'
    },
    settingView:{
      width:'100rem',
      marginLeft: '100rem',
      marginTop: '17rem',
    },
    locationText:{
     color:"rgba(255, 255, 255, 0.57)",
     fontWeight:'600',
    textAlign:"center",
    fontSize:'15rem',
    textAlign:'center'
    },
    logOutButton:{
      width:"100%",
      height:"60rem",
    },
    logOutText:{
      color:' rgba(255, 145, 44, 0.61)',
      textAlign:'center',
      fontSize:'20rem',
      fontFamily: 'Montserrat',
      fontWeight:'600',
      marginTop: '15rem',
    }
});
 

function mapStateToProps(state) {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs:()=>{
      dispatch(getBlogs())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Setting)