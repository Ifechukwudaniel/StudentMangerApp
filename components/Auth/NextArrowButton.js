import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {Ionicons} from '@expo/vector-icons';
import { TouchableHighlight, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../constants/Colors";

const styles = StyleSheet.create({
    buttonWrapper: {
      alignItems: "flex-end",
      right: 20,
      bottom: 20,
      paddingTop: 0
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      width: 60,
      height: 60,
      backgroundColor: colors.gradient2
    },
    icon: {
      marginRight: -2,
      marginTop: -2,
    }
  });

export default class NextArrowButton extends Component {
    render() {
      const {
       handleNextButton
      } = this.props
      return (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress= {handleNextButton} style={[{ opacity: 1 }, styles.button]}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
              color={colors.white}
              size={50}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func
  };