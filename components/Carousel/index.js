import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Carousel , { ParallaxImage } from 'react-native-snap-carousel';
import EStyleSheet from 'react-native-extended-stylesheet';
const { width: screenWidth } = Dimensions.get('window')
import XIcon from '../../assets/svg/X.svg'
 
export class CarouselComponent extends Component {
    state = {
      entries:[
        {
          id:1,
          title:"hhshshshsh",
          image:"https://picsum.photos/200",
          preview:false
        },
        {
          id:2,
          title:"hhshshshsh",
          image:"https://picsum.photos/205",
          preview:false
        },
        {
          id:3,
          title:"hhshshshsh",
          image:'https://picsum.photos/100',
          preview:false
        }
      ],
      modal:false,
      currentItem: {
        id:1,
        title:"hhshshshsh",
        image:"https://picsum.photos/200/300?grayscale",
        preview:false
      },
    }
    _renderModalItem = ({item, index},parallaxProps) => {
      return (
        <View style={styles.slideModal}>
            <ParallaxImage
                  source={{ uri:item.image }}
                  containerStyle={styles.imagePreview}
                  style={styles.image}
                  parallaxFactor={0.4}
                  {...parallaxProps}
              />
      </View>
      );
  }
 
    _renderItem = ({item, index},parallaxProps) => {
        return (
            <TouchableOpacity style={styles.slide} 
              onPress = {()=>{
               console.log(this.state.currentItem)
                 this.setState({modal:true})
            }}>
              <ParallaxImage
                    source={{ uri:item.image }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </TouchableOpacity>
        );
    }
 
    render () {
        return (
          <View style={styles.carousel}>
            <Carousel
             onSnapToItem={(e)=>{
               this.setState({currentItem: this.state.entries[e]})
             }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderHeight={screenWidth}
              sliderWidth={screenWidth}
              itemWidth={screenWidth-90}
              hasParallaxImages={true}
              inactiveSlideOpacity={0.4}
              inactiveSlideScale={0.9}
              layout={'default'}
            />
            <Modal
            animationType="slide"
            visible={this.state.modal}
            transparent={true}
            >
             <View style={{backgroundColor:'rgba(0, 0, 0, 0.7)', flex:1}}>      
               <View style={styles.imageCancel}>
                  <TouchableOpacity onPress={()=>this.setState({modal:false})} style={styles.closeButton}>
                     <XIcon style={styles.X}/>
                  </TouchableOpacity>
               </View>
               <View style={styles.imagePreview}>
               <Carousel
             onSnapToItem={(e)=>{
               this.setState({currentItem: this.state.entries[e]})
             }}
              data={this.state.entries}
              renderItem={this._renderModalItem}
              sliderHeight={screenWidth}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              hasParallaxImages={true}
              inactiveSlideOpacity={0.4}
              inactiveSlideScale={0.9}
              layout={'default'}
            />
                 
               </View>
             </View>
            </Modal>
       </View>
        );
    }
}

const styles = EStyleSheet.create({
   slide:{
    width: screenWidth - 90,
    height: '200rem',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8,
   },
   slideModal:{
    width: screenWidth,
    height: "100%",
    backgroundColor: 'rgba(0,0,0,0.95)',
    borderRadius: 8,
   },
   image: {
    width:'100rem',
    height:'100rem',
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 8,
  },
  carousel:{
    marginTop: '20rem',
    marginBottom:'20rem'
  },
  imagePreview:{
    flex: 70,
    // backgroundColor:'white'
  },
  imageCancel:{
    flex: 30,
    justifyContent: 'center',
  },
  closeButton:{
    width:'40rem',
    height:'40rem',
    backgroundColor:'#fff',
    alignSelf: 'center',
    borderRadius: '20rem',
    justifyContent: 'center',
  },
  X:{
     alignSelf: 'center',
  }
})