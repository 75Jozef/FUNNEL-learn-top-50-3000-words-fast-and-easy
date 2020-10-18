import React, { useState } from 'react';
import { View, StyleSheet, SnapshotViewIOSComponent } from 'react-native';
import Colors from '../../constants/Colors';
import { TxtHeader } from './Txt';

const WordShow = (props) => {
  let word = [];

  console.log(props.show);

  // 0: ..?..
  // 1: - - -
  // 2: - - X
  // 3: X - -
  // 4: X - X

  if (props.show === 0) {
    for (let i = 0; i < props.word.length; i++) {
      word.push(' ');
    }
  }

  if (props.show === 1) {
    for (let i = 0; i < props.word.length; i++) {
      word.push('_');
    }
  }

  if (props.show === 2) {
    for (let i = 0; i < props.word.length - 1; i++) {
      word.push('_');
    }
    word.push(props.word.slice(props.word.length - 1));
  }

  if (props.show === 3) {
    word.push(props.word[0]);
    for (let i = 1; i < props.word.length - 1; i++) {
      word.push('_');
    }
    word.push(props.word.slice(props.word.length - 1));
  }

  if (props.show === 4) {
    word = [...props.word];
  }
  const ShowCard = (props) => {
    if (props.show !== 0) {
      return (
        <View
          style={{
            borderRadius: 7,
            borderWidth: 0.3,
            padding: 7,
            borderColor: Colors.surround,
          }}>
          <TxtHeader>{props.children}</TxtHeader>
        </View>
      );
    } else {
      return <></>;
    }
  };

  return (
    <View style={styles.showka}>
      {word.map((ltr) => (
        <ShowCard show={props.show}>{ltr}</ShowCard>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  showka: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {},
});

export default WordShow;
