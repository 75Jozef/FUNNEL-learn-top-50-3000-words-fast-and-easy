import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
} from 'react-native';
import Fonts from './../../constants/Fonts';
import Colors from './../../constants/Colors';

export const ButtonCircle = (props) => {
  return (
    <TouchableNativeFeedback
      background={
        Platform.Version >= 21
          ? TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')
          : TouchableNativeFeedback.SelectableBackground()
      }
      delayPressIn={0}
      onPress={props.action}>
      <View style={{ ...styles.buttonCircleBody, ...props.bodyStyle }}>
        <Text style={{ ...styles.buttonCircleInside, ...props.insideStyle }}>
          {props.children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export const ButtonBox = (props) => {
  return (
    <TouchableNativeFeedback
      background={
        Platform.Version >= 21
          ? TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')
          : TouchableNativeFeedback.SelectableBackground()
      }
      delayPressIn={0}
      onPress={props.action}>
      <View style={{ ...styles.buttonBoxBody, ...props.bodyStyle }}>
        <Text style={{ ...styles.buttonBoxInside, ...props.insideStyle }}>
          {props.children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  buttonCircleBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 7,
    height: Dimensions.get('window').height / 17,
    borderRadius: 18,
    backgroundColor: Colors.base,
    borderWidth: 1,
    borderColor: Colors.inactive,
  },
  buttonCircleInside: {
    fontFamily: Fonts.normal,
    color: Colors.base,
    fontSize: Dimensions.get('window').width / 25,
  },
  buttonBoxBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').height / 28,
    borderRadius: 15,
    backgroundColor: Colors.base,
    borderWidth: 1,
    borderColor: Colors.inactive,
    marginHorizontal: 4,
    marginBottom: 4,
  },
  buttonBoxInside: {
    fontFamily: Fonts.normal,
    color: Colors.inactive,
    fontSize: Dimensions.get('window').width / 33,
  },
});
