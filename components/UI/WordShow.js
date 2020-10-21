import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import { TxtHeader, TxtItalic } from './Txt';

const WordShow = (props) => {
  const [see, setSee] = useState(-1);
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
    if (props.word.length > 1) {
      word.push(props.word.slice(props.word.length - 1));
    }
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
    let child = props.children;

    if (props.ltr === see) {
      child = wordToShow[props.ltr];
    }

    return (
      <View
        style={{
          borderRadius: 7,
          borderWidth: 0.3,
          padding: 5,
          borderColor: Colors.surround,
        }}
        key={props.key}>
        <TxtHeader
          style={{
            fontSize:
              Dimensions.get('window').height / 10 - wordToShow.length * 2.5,
          }}
          key={props.ltr}>
          {child}
        </TxtHeader>
      </View>
    );
  };

  if (props.show > 0) {
    return (
      <View style={styles.showka}>
        {word.map((ltr, index) => {
          return (
            <TouchableOpacity onPress={() => handleLetterShow(index)}>
              <ShowCard show={props.show} ltr={index} key={index}>
                {ltr}
              </ShowCard>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  } else {
    return (
      <View style={styles.showka}>
        <TxtItalic>? ? ?</TxtItalic>
      </View>
    );
  }
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
