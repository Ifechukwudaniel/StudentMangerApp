import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
class Login extends Component {
    render() { 
        return (
            <View style={styles.container}>
                <LoginForm/>
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