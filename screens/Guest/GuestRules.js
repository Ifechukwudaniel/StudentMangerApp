import React from 'react';
import { ScrollView, StyleSheet, Modal, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
// import { View } from 'react-native-animatable';
import GuestHome from '../../components/Guest/GuestHome';
import EStyleSheet from 'react-native-extended-stylesheet';
import GuestHeader from '../../components/GuestHeader';

export default function GuestRulesScreen(props) {
  return (
    <Layout style={styles.container}>
      <GuestHeader {...props} screenName="RULES" back/>
        <ScrollView style={styles.innerView}>
          <Text style={styles.text}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada fermentum quis varius viverra. Libero sed tellus vestibulum consequat purus cursus sed ornare. Leo consectetur purus bibendum phasellus morbi. Curabitur porttitor aliquam vitae turpis sed venenatis id. Condimentum velit libero ipsum bibendum tellus amet, parturient lectus rhoncus. Venenatis egestas vel sit fermentum in quam diam phasellus cursus. Augue phasellus dolor, ornare aliquam arcu condimentum sed sit. Id dictum leo sed facilisis elementum. Commodo at felis, quam viverra aliquet ut. Morbi lacus nibh etiam nulla tincidunt. Risus gravida pretium morbi faucibus vitae ipsum sapien sed interdum. Augue ante accumsan ac aliquam imperdiet lacinia est. Enim et arcu, mi interdum. Felis, eu sed lectus semper. Scelerisque fringilla ipsum sit id. Blandit sit nisi, lobortis praesent convallis dis. Augue amet sed dui est. Sapien habitant eget suspendisse eu. Massa parturient luctus aliquam sed est diam cursus ultricies. Nisl ullamcorper ipsum tincidunt augue nisl pellentesqu
          </Text>
           </ScrollView>
    </Layout>
  );
}

GuestRulesScreen.navigationOptions = {
 header:null
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    color:'rgba(255, 255, 255, 0.75)',
    padding: '15rem',
    fontSize: '15rem',
  }
})