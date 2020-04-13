import React from 'react';
import {View, Text} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
 
const WebViewError = ({}) => {
    return (
      <View style={styles.errorView}>
      <Text style = {styles.errorText}>  Are you connected to the internet? </Text>
    </View>
    );
}
const styles = EStyleSheet.create({
  errorView :{
    alignSelf: 'center',
    width:"100%",
    height:"100%",
    backgroundColor:"#fff",
    marginBottom: '500rem',
 },
 errorText:{
    textAlign:"center",
    backgroundColor: 'gray',
    color:"#fff",
    padding: '15rem',
    fontWeight: 'bold',
 }
})
export default WebViewError;