import React from 'react';
import {StyleSheet} from 'react-native'
import {Searchbar} from 'react-native-paper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 
const SearchInput = ({value, handleChange, handleSearch}) => {
    return (
        <Searchbar
         placeholder="Department"
         inputStyle={styles.inputStyle}
         value={value}
         onChangeText={handleChange}
         onIconPress={handleSearch}
      />
    );
}

const styles = StyleSheet.create({
    inputStyle:{
      width:wp("8%"),
      height:hp("7%"),
      fontSize:wp("5%"),
      fontFamily:'itim'
    }
})
 
export default SearchInput ;