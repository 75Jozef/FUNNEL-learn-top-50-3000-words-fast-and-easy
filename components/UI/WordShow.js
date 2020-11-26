import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import { TxtHeader } from './Txt';
import { Ionicons } from '@expo/vector-icons';

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
        }}>
        <TxtHeader
          style={{
            fontSize:
              Dimensions.get('window').height / 10 - wordToShow.length * 3,
            color:
              props.color === 0
                ? Colors.accent
                : props.color === 1
                ? Colors.backSecond
                : props.color === 2
                ? Colors.backPrimary
                : Colors.surround,
          }}
          key={props.ltr}>
          {child}
        </TxtHeader>
      </View>
    );
  };

  if (props.show !== 0) {
    return (
      <View style={styles.showka}>
        {word.map((ltr, index) => {
          return (
            <TouchableOpacity
              onPress={() => handleLetterShow(index)}
              key={index}>
              <ShowCard
                show={props.show}
                ltr={index}
                key={index}
                color={props.color}>
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
        <Ionicons
          name='md-eye-off'
          size={Dimensions.get('window').height / 9}
          color={Colors.inactive}
        />
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
