import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { TxtHeader } from './Txt';

const WordShow = (props) => {
  const [see, setSee] = useState(undefined);
  let word = [];

  useEffect(
    (props) => {
      setSee(-1);
    },
    [props.word]
  );

  const wordToShow = props.word;

  // 0: ..?..
  // 1: - - -
  // 2: - - X
  // 3: X - -
  // 4: X - X

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

  const handleLetterShow = (index) => {
    if (see === index || see === undefined) {
      setSee(-1);
    } else {
      setSee(index);
    }
  };

  const ShowCard = (props) => {
    console.log('showcard', props.show, see, wordToShow);
    let child = props.children;

    if (props.ltr === see) {
      child = wordToShow[props.ltr];
    }

    if (props.show > 0) {
      return (
        <View
          style={{
            borderRadius: 7,
            borderWidth: 0.3,
            padding: 7,
            borderColor: Colors.surround,
          }}>
          <TxtHeader>{child}</TxtHeader>
        </View>
      );
    } else {
      return <></>;
    }
  };

  return (
    <View style={styles.showka}>
      {word.map((ltr, index) => {
        return (
          <TouchableOpacity onPress={() => handleLetterShow(index)}>
            <ShowCard show={props.show} ltr={index}>
              {ltr}
            </ShowCard>
          </TouchableOpacity>
        );
      })}
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
