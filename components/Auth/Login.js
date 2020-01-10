import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
class Login extends Component {
    handleNextButton= ()=>{
        this.props.navigation.navigate("Main")
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