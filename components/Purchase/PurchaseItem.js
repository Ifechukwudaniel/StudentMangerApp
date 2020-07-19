import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import BookSvg from '../../assets/svg/Book.svg'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
 
const PurchaseItem = ({type, name, orderCode,date, id, location,deliveryStatus,deliveryDate,paymentMethod}) => {
  return (
    <View style={styles.purchaseItem}>
       <View style={styles.purchaseTop}>
          <BookSvg width={120*rem} height={120*rem}/>
          <View>
             <Text style={styles.textDescription}>Type: <Text style={styles.textContent}>Book  </Text> </Text>
             <Text style={styles.textDescription} >Name: <Text style={styles.textContent}>MTH 122 handout</Text> </Text>
             <Text style={styles.textDescription}>Order Code: <Text style={styles.textContent}>45EFR5 </Text> </Text>
             <Text style={styles.textDescription}>Date: <Text style={styles.textContent}>10th, April 2020 </Text> </Text>
             <Text style={styles.textDescription}>ID: <Text style={styles.textContent}>152772b7wyDR98wE342 </Text> </Text>
          </View>
      </View>
             <Text style={styles.textDescription}>Location: <Text style={styles.textContent}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text> </Text>
             <Text style={styles.textDescription} >Delivery Status: <Text style={styles.textContent}>In Transit</Text> </Text>
             <Text style={styles.textDescription}>Delivery Date: <Text style={styles.textContent}>20th, April 2020 </Text> </Text>
             <Text style={styles.textDescription}>Date: <Text style={styles.textContent}>10th, April 2020 </Text> </Text>
             <Text style={styles.textDescription}>Payment Method: <Text style={styles.textContent}>ON DELIVERY</Text> </Text>
         <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}> CANCEL ORDER </Text>
         </TouchableOpacity>
    </View>
  );
}

const styles = EStyleSheet.create({
  purchaseItem:{
    width:'97%',
    height:' 363rem',
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    alignSelf: 'center',
    borderRadius:'3rem',
    marginTop: '20rem',
  },
  purchaseTop:{
   flexDirection: 'row',
   marginTop:'20rem',
  },
  textDescription:{
    color:'#fff',
    fontSize:"14rem",
    padding: "5rem",
    marginLeft: '15rem',
    fontFamily: 'Montserrat',
  },
  textContent:{
    color:'rgba(255,255,255,0.6)',
    fontSize:"14rem",
    padding: '7rem',
    fontFamily: 'Montserrat-SemiBold',
  },
  button :{
    width:'150rem',
    backgroundColor:'#0F0F12',
    height:'40rem',
    alignSelf: 'flex-end',
    marginRight: '10rem',
    marginTop: '7rem',
    justifyContent: 'center',
    borderRadius: '5rem',
  },
  buttonText:{
     fontSize:'15rem',
     color:'rgba(93, 218, 128, 0.86);',
     fontWeight: '600',
     textAlign:'center',
  }
})
export default PurchaseItem;