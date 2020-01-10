import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import propTypes from 'prop-types'
import colors from '../../constants/Colors'
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: { 
        fontWeight: "700", 
        marginBottom: 10,
        fontSize:20
    },
    inputFiled: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize:18
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
        return (
         <View style={[customStyle, styles.wrapper]}>
            <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
            <TextInput
              autoCorrect={false}
              style={[
                { color: inputColor, borderBottomColor: borderBottom },
                styles.inputFiled
              ]}
              onChangeText={(value)=>{
                 onChange(value)
              }}
              secureTextEntry={inputType === "password"}
              value={value}
            />
          </View>
        );
    }
}
InputField.propTypes = {
  onChange :propTypes.func.isRequired,
  value:propTypes.string.isRequired
}

 
export default InputField;