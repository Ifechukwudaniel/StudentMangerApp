import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import UserInfo from './extra/user-info-component';
import DepartmentSetting from './extra/DepartmentSetting';
import {Grid,Row} from 'react-native-easy-grid'
import LevelSetting from './extra/LevelSetting';
import PaymentSetting from './extra/PaymentSetting';
import GetHelpSetting from './extra/GetHelpSetting';
import FeedbackSetting from './extra/GiveUsFeedback';
import Ripple from 'react-native-material-ripple';
 
 
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