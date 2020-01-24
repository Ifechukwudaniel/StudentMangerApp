import React from 'react';
import {StyleSheet} from 'react-native'
import {Searchbar} from 'react-native-paper'
 
const SearchInput = ({value, handleChange, handleSearch}) => {
    return (
        <Searchbar
         placeholder="Department"
         inputStyle={styles.inputStyle}
         value={value}
         onChangeText={handleChange}
      />
    );
}

const styles = StyleSheet.create({
    inputStyle:{
      width:100,
      height:60,
      fontSize:20
    }
})
 
export default SearchInput ;