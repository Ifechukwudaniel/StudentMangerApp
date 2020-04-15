import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import LoginForm from './LoginForm';
import Keys from '../../constants/Keys';
class Login extends Component {
    handleNextButton= ()=>{
        AsyncStorage.getAllKeys()
        .then(keys=>{
            if(keys.includes(Keys.department) && keys.includes(Keys.level))
                this.props.navigation.navigate("Home")
            else
               this.props.navigation.navigate("Setup")
        })
    }
    render() { 
        return (
            <View style={styles.container}>
                <LoginForm handleNextButton= {this.handleNextButton}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
 
export default Login;