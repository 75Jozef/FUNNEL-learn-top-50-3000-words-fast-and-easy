import React from 'react';
import { View } from 'react-native';

const CardFrame = (props) => {
  return <View style={{ ...props.style }}>{props.children}</View>;
};

export default CardFrame;
