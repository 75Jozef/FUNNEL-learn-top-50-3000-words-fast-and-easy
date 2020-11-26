import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dimensions, Text, TouchableNativeFeedback, View } from 'react-native';
import Fonts from './../../constants/Fonts';
import Colors from './../../constants/Colors';
export const ButtonCircle = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('window').width / 6,
            height: Dimensions.get('window').height / 15,
            borderRadius: 25,
            backgroundColor: Colors.base,
            borderWidth: 1,
            borderColor: Colors.inactive,
            ...props.bodyStyle,
          }}>
          <Text
            style={{
              fontFamily: Fonts.normal,
              color: Colors.base,
              fontSize: Dimensions.get('window').width / 25,
              textAlign: 'center',
              ...props.insideStyle,
            }}>
            {props.children}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export const ButtonBox = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
  return (
    <View style={{ overflow: 'hidden', borderRadius: 20 }}>
      <TouchableNativeFeedback
        background={
          props.touchColor
            ? TouchableNativeFeedback.Ripple(props.touchColor)
            : TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')
        }
        delayPressIn={0}
        onPress={props.action}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('window').width / 9,
            height: Dimensions.get('window').height / 27,
            borderRadius: 25,
            backgroundColor: Colors.base,
            borderWidth: 1,
            borderColor: Colors.inactive,
            ...props.bodyStyle,
          }}>
          <Text
            style={{
              fontFamily: Fonts.normal,
              color: Colors.inactive,
              fontSize: Dimensions.get('window').width / 33,
              ...props.insideStyle,
            }}>
            {props.children}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
