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
    <View style={styles.buttonNormalBody}>
      <TouchableOpacity onPress={props.action}>
        <Text style={styles.buttonNormatInside}>{props.children}</Text>
      </TouchableOpacity>
    </View>
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
