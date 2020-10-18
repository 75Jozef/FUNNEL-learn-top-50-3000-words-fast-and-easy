import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardFrame = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {},
});

export default CardFrame;
