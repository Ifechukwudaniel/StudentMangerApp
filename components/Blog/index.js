import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageOverLay from './extra/image-overlay-component';
import { BlogCard } from './extra/card-component';
 
 
class Blog extends Component {
    render() { 
        return (
            <View style={styles.container}>
                    <BlogCard/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
export default Blog;