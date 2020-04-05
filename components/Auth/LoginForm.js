import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import colors from "../../constants/Colors"
import content from "../../constants/Content"
import InputField from './InputField';
import NextArrowButton from './NextArrowButton'
import propType from 'prop-types'
import EStylesheet from 'react-native-extended-stylesheet'

const styles = EStylesheet.create({
    wrapper: {
        flex: 1
    }, 
    mainViewWrapper:{
        marginTop:'70rem',
        flex:1
    },
    loginHeader: {
        fontSize: '20rem',
        color: colors.white,
        fontWeight: "300",
        marginBottom: '40rem',
      },
      avoidView: {
        paddingLeft: '30rem',
        paddingRight: '30rem',
        paddingTop: '20rem',
        flex:1
       },
});
 
class LoginForm extends Component {

    state={
        matricNumber:"",
        password:"",
        errors:[]
    }
    handleMatricNumber = (value)=>{
       this.setState({matricNumber:value})
    }
   
    handlePassword = (value)=>{
        this.setState({password:value})
     }


    render() { 
        const {
            handleNextButton
        } = this.props
        return (
           <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.mainViewWrapper}>
                    <ScrollView style={styles.avoidView}>
                         <Text style={styles.loginHeader}> {content.login} </Text>
                         <InputField 
                            labelText="Matric Number" 
                            labelTextSize={14} 
                            labelColor={colors.white} 
                            textColor={colors.white} 
                            borderBottomColor={colors.white} 
                            inputType="email" 
                            customStyle={{marginBottom:30}} 
                            onChange={this.handleMatricNumber}
                            value = {this.state.matricNumber}
                         />
                          <InputField 
                            labelText="Password" 
                            labelTextSize={14} 
                            labelColor={colors.white} 
                            textColor={colors.white} 
                            borderBottomColor={colors.white} 
                            inputType="password" 
                            customStyle={{marginBottom:30}} 
                            onChange= {this.handlePassword}
                            value= {this.state.password}
                         />
                    </ScrollView>
                </View>
                <NextArrowButton  handleNextButton = {handleNextButton}/>
          </KeyboardAvoidingView> 
        );
    }
}
LoginForm.propType= {
    handleNextButton:propType.func.isRequired
}
 
export default LoginForm;