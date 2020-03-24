import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Row, Col } from 'react-native-easy-grid';
import {heightPercentageToDP as hp , widthPercentageToDP as wp}  from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import Ripple from 'react-native-material-ripple';
 
 
class Home extends Component {
    render() { 
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Row>
                     <Col style={{ margin:10}}>
                     <Ripple  >
                        <Card>
                            <Text>
                              Level
                            </Text>
                        </Card>
                        </Ripple>
                     </Col>
                     <Col style={{backgroundColor:"#fff", margin:10}}>
                         
                     </Col>
                </Row>
                <Row>
                     <Col style={{backgroundColor:"#fff", margin:10}}>

                     </Col>
                     <Col style={{backgroundColor:"#fff", margin:10}}>
                         
                     </Col>
                </Row>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:hp(7)
    }
});
 
export default Home;