import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import UserInfo from './extra/user-info-component';
import DepartmentSetting from './extra/department-Setting-component';
import {Grid,Row} from 'react-native-easy-grid'
import LevelSetting from './extra/level-Setting-Component';
import PaymentSetting from './extra/payment-Setting-component';
import GetHelpSetting from './extra/GetHelp-Setting-component';
import FeedbackSetting from './extra/Giveus-feedback-component';
 
 
class Setting extends Component {
    render() { 
        return (
            <ScrollView>
            <Grid style={styles.container}>
                  <UserInfo/>
                  <Row>
                         <DepartmentSetting/>
                  </Row>
                   <Row>
                        <LevelSetting/>
                   </Row>
                   <Row>
                        <PaymentSetting/>
                   </Row>
                   <Row>
                        <GetHelpSetting/>
                   </Row>
                   <Row>
                        <FeedbackSetting/>
                   </Row>
                   
            </Grid>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
 
export default Setting;