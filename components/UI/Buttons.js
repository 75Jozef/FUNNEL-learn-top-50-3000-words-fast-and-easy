import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  ProgressViewIOSComponent,
} from 'react-native';
import Fonts from './../../constants/Fonts';
import Colors from './../../constants/Colors';
export const ButtonCircle = (props) => {
  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 18,
      }}>
      <TouchableNativeFeedback
        background={
          props.touchColor
            ? TouchableNativeFeedback.Ripple(props.touchColor)
            : TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')
        }
        delayPressIn={0}
        onPress={props.action}>
        <View style={{ ...styles.buttonCircleBody, ...props.bodyStyle }}>
          <Text style={{ ...styles.buttonCircleInside, ...props.insideStyle }}>
            {props.children}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export const ButtonBox = (props) => {
  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 25,
      }}>
      <TouchableNativeFeedback
        background={
          props.touchColor
            ? TouchableNativeFeedback.Ripple(props.touchColor)
            : TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')
        }
        delayPressIn={0}
        onPress={props.action}>
        <View style={{ ...styles.buttonBoxBody, ...props.bodyStyle }}>
          <Text style={{ ...styles.buttonBoxInside, ...props.insideStyle }}>
            {props.children}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCircleBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').height / 15,
    borderRadius: 25,
    backgroundColor: Colors.base,
    borderWidth: 1,
    borderColor: Colors.inactive,
  },
  buttonCircleInside: {
    fontFamily: Fonts.normal,
    color: Colors.base,
    fontSize: Dimensions.get('window').width / 25,
    textAlign: 'center',
  },
  buttonBoxBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').height / 27,
    borderRadius: 25,
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
