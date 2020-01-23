import React from 'react';
import {StyleSheet} from 'react-native'
import {Searchbar} from 'react-native-paper'
 
const SearchInput = () => {
    return (
        <Searchbar
         placeholder="Department"
         onIconPress={()=>{alert("bdgd")}}
         inputStyle={styles.inputStyle}
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