import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Fonts from './../../constants/Fonts';
import Colors from './../../constants/Colors';

export const ButtonNormal = (props) => {
  return (
    <TouchableOpacity onPress={props.action}>
      <View style={styles.buttonNormalBody}>
        <Text style={styles.buttonNormatInside}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonNormalBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surround,
  },
  buttonNormatInside: {
    fontFamily: Fonts.bold,
    color: Colors.textPrimary,
    fontSize: Dimensions.get('window').height / 35,
  },
});
