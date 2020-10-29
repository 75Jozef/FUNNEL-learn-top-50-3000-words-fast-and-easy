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

export const ButtonCircle = (props) => {
  return (
    <TouchableOpacity onPress={props.action}>
      <View style={{ ...styles.buttonCircleBody, ...props.bodyStyle }}>
        <Text style={{ ...styles.buttonCircleInside, ...props.insideStyle }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonBox = (props) => {
  return (
    <TouchableOpacity onPress={props.action}>
      <View style={{ ...styles.buttonBoxBody, ...props.bodyStyle }}>
        <Text style={{ ...styles.buttonBoxInside, ...props.insideStyle }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonCircleBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 50,
    borderRadius: 14,
    backgroundColor: Colors.base,
    borderWidth: 1,
    borderColor: Colors.surround,
  },
  buttonCircleInside: {
    fontFamily: Fonts.normal,
    color: Colors.base,
    fontSize: Dimensions.get('window').height / 40,
  },
  buttonBoxBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 25,
    borderRadius: 7,
    backgroundColor: Colors.base,
    borderWidth: 0.5,
    borderColor: Colors.surround,
    marginHorizontal: 4,
    marginBottom: 4,
  },
  buttonBoxInside: {
    fontFamily: Fonts.normal,
    color: Colors.surround,
    fontSize: Dimensions.get('window').height / 60,
  },
});
