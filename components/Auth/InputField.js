import React, {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import propTypes from 'prop-types'
import colors from '../../constants/Colors'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontWeight: "700",
    marginBottom: '10rem',
    fontSize: '20rem'
  },
  inputFiled: {
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    borderColor: "#fff",
    borderRadius: "4rem",
  }
});

class InputField extends Component {
  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      onChange,
      value
    } = this.props
    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 40;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || "transparent";
    return ( <
      View style = {
        [customStyle, styles.wrapper]
      } >
      <
      Text style = {
        [{
          color,
          fontSize
        }, styles.label]
      } > {
        labelText
      } < /Text> <
      TextInput autoCorrect = {
        false
      }
      style = {
        [{
            color: inputColor,
            borderBottomColor: borderBottom
          },
          styles.inputFiled
        ]
      }
      onChangeText = {
        (value) => {
          onChange(value)
        }
      }
      secureTextEntry = {
        inputType === "password"
      }
      value = {
        value
      }
      /> <
      /View>
    );
  }
}
InputField.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired
}


export default InputField;