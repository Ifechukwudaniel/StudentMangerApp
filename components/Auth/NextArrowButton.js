import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {FontAwesome} from '@expo/vector-icons';
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
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
      backgroundColor: colors.black 
    },
    icon: {
      marginRight: -2,
      marginTop: -2,
    }
  });

export default class NextArrowButton extends Component {
    render() {
      return (
        <View style={styles.buttonWrapper}>
          <TouchableHighlight style={[{ opacity: 1 }, styles.button]}>
            <FontAwesome
              name="arrow-right"
              color={colors.white}
              size={50}
              style={styles.icon}
            />
          </TouchableHighlight>
        </View>
      );
    }
  }

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func
  };