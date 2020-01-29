import React from 'react';
import { ImageBackground, ImageBackgroundProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import PropTypes from 'prop-types'
 
const DEFAULT_OVERLAY_COLOR = 'rgba(0, 0, 0, 0.45)';
const ImageOverLay  = (props) => {
    const { style, children, ...imageBackgroundProps } = props;
    const { overlayColor, ...imageBackgroundStyle } = StyleSheet.flatten(style);
    return (
            <ImageBackground
            {...imageBackgroundProps}
            style={imageBackgroundStyle}
            source={require('../../../assets/images/splash.png')}
            >
             
            <View style={[StyleSheet.absoluteFill, { backgroundColor: overlayColor || DEFAULT_OVERLAY_COLOR }]}/>
            {children}
      </ImageBackground>
    );
}

export default ImageOverLay ;