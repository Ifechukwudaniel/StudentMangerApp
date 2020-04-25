import React, { Component } from 'react';
import { View,  StyleSheet, ScrollView} from 'react-native';
import UserInfo from './extra/user-info-component';
import DepartmentSetting from './extra/DepartmentSetting';
import {Grid,Row} from 'react-native-easy-grid'
import LevelSetting from './extra/LevelSetting';
import PhoneSetting from './extra/PhoneSetting';
import GetHelpSetting from './extra/GetHelpSetting';
import FeedbackSetting from './extra/GiveUsFeedback';
import { Container, Header, Content, Button, ListItem,  Icon, Left, Body, Right, Switch } from 'native-base';
import {Text } from '@ui-kitten/components'
 
 
class Setting extends Component {
    render() { 
        return (
              <View style = {{backgroundColor:"#252525"}} >
                      <ListItem  onPress= {()=>{this.props.navigation.navigate('Department')}}   icon>
                        <Left>
                          <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="business" />
                          </Button>
                        </Left>
                        <Body>
                          <Text style={{fontFamily:'itim'}}>Department </Text>
                        </Body>
                        <Right>
                          <Text>Computer Science </Text>
                          <Icon active name="arrow-forward" />
                        </Right>
                      </ListItem>
                      <ListItem onPress= {()=>{this.props.navigation.navigate('level')}} icon>
                        <Left>
                          <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="wifi" />
                          </Button>
                        </Left>
                        <Body>
                          <Text>Level</Text>
                        </Body>
                        <Right>
                          <Text>100</Text>
                          <Icon active name="arrow-forward" />
                        </Right>
                      </ListItem>
                      <ListItem onPress= {()=>{this.props.navigation.navigate('phoneSetting')}} icon>
                        <Left>
                          <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="bluetooth" />
                          </Button>
                        </Left>
                        <Body>
                          <Text>Phone number</Text>
                        </Body>
                        <Right>
                          <Icon active name="arrow-forward" />
                        </Right>
                      </ListItem>
                    </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
 
export default Setting;