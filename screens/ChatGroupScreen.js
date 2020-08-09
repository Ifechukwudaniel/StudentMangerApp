import React, { useState, useCallback, useEffect } from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import ChatHeader from '../components/Chat/ChatHeader';
import { GiftedChat } from 'react-native-gifted-chat'
import EStyleSheet from 'react-native-extended-stylesheet';

export default function ChatGroupScreen(props) {
  const [messages, setMessages] = useState([]);

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
          textInputStyle={{backgroundColor:''}}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
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
});