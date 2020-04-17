import React from 'react';
import {
  SafeAreaView,
  View,
  Button,
  TextInput,
  Switch,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Animation extends React.Component {
  state = {
    loop: false,
    resetAfterFinish: false,
    fps: '14'
  };

  render() {
    const { fps, loop, resetAfterFinish } = this.state;

    return (
          <View onTouchStart={ ()=>this.play()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SpriteSheet
              ref={ref => (this.mummy = ref)}
              source={require('./assets/dino1.png')}
              imageStyle={{padding:10, marginLeft:5}}
              columns={6}
              rows={8}
              height={200} 
              width={200}
              animations={{
                die: [0,1,2,3,4,5,6,7],
                idle:[0,8,9,10,11,12,13,14,15],
                jump:[15,16,17,18,19,20,21,22,23],
                run:[25,26,27,28,29,30,31,32,33,34,35, 36],
                walk:[41,42,43,44,45,46],
              }}
            />
          </View>
    );
  }

  play = type => {
    const { fps, loop, resetAfterFinish } = this.state;
    this.mummy.play({
      type:'die',
      fps: Number(fps),
      loop: loop,
      resetAfterFinish: resetAfterFinish,
      onFinish: () => console.log('hi')
    });
  };

  stop = () => {
    this.mummy.stop(() => console.log('stopped'));
  };
}