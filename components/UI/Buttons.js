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
    width: Dimensions.get('window').width / 8,
    height: Dimensions.get('window').height / 17,
    borderRadius: 25,
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
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').height / 28,
    borderRadius: 15,
    backgroundColor: Colors.base,
    borderWidth: 0.5,
    borderColor: Colors.surround,
    marginHorizontal: 4,
    marginBottom: 4,
  },
  buttonBoxInside: {
    fontFamily: Fonts.normal,
    color: Colors.surround,
    fontSize: Dimensions.get('window').height / 50,
  },
});
