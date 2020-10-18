import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { TxtHeader, TxtNormal } from './Txt';

const WordShow = (props) => {
  const word = props.word.split('');

  const ShowCard = (props) => (
    <View style={styles.card}>
      <TxtHeader>{props.children}</TxtHeader>
    </View>
  );
  return (
    <View style={styles.show}>
      {word.map((ltr) => (
        <ShowCard>{ltr}</ShowCard>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  show: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderColor: Colors.surround,
    borderRadius: 7,
    borderWidth: 0.2,
    padding: 7,
  },
});

export default WordShow;
