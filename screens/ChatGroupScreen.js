import React, { useState, useCallback, useEffect } from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import ChatHeader from '../components/Chat/ChatHeader';
import { GiftedChat, InputToolbar, MessageText, Bubble } from 'react-native-gifted-chat'
import EStyleSheet from 'react-native-extended-stylesheet';
import Send from '../assets/svg/send.svg'
import Attachment from '../assets/svg/attancement.svg'
export default function ChatGroupScreen(props) {
  const [messages, setMessages] = useState([]);


  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "#272728",
          borderTopColor: "#272728",
        }}
      />
    );
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
        <ChatHeader chat back backScreen="Chat" {...props}/>
        <GiftedChat
          messages={messages}
          textInputStyle={styles.textInput}
          renderInputToolbar={props => customtInputToolbar(props)}
          onSend={messages => onSend(messages)}
          alwaysShowSend={false}
          multiline
          
          user={{
            _id: 1,
          }}

          renderBubble = { (props) => (
              <Bubble
               {...props}
               wrapperStyle= {{
                right:{
                   backgroundColor:'#FF912C'
                 },
                 left:{
                  backgroundColor:'#2E2E31'
                 }
               }}
               textStyle = {{
                left:{
                   color:"#fff"
                },
                right:{
                   color:'#fff'
                }
               }}
             />
             )
           }
          renderSend={(props)=>{
            const {text,messageIdGenerator,user, onSend,} = props
            return(
              <TouchableOpacity onPress= {
                ()=>{
                   if (text && onSend) {
                       onSend({ text: text.trim(), user:user,_id:messageIdGenerator()}, true);
                   }
                   else{
                     alert("")
                   }
                 }
                } style={styles.sendButton}>
                  { text!= '' ? (<Send/>): <Attachment/> }
            </TouchableOpacity>
            )}} 
    />
      </View>
    </Layout>
  );
}



ChatGroupScreen.navigationOptions = {
  header:null
};


const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  textInput:{
    backgroundColor: "#272728",
    borderColor: '#272728',
    color:'rgba(255, 255, 255, 0.61);',
    width:'100%'
  },
  sendButton :{
    // backgroundColor:'red',
    marginBottom: '12rem',
    marginRight: '10rem',
  }
});