import React, { useState, useEffect } from 'react';
import {
  View,
  Dimensions,
  TouchableNativeFeedback,
  Platform,
  FlatList,
} from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import Colors from '../constants/Colors';
import {
  TxtHeader,
  TxtBold,
  TxtNormal,
  TxtItalic,
  TxtLabel,
  TxtButton,
  TxtError,
} from '../components/UI/Txt';

import ComboAround from '../components/UI/ComboAround';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/CustomHeaderButton';
import * as Languages from '../data/languages';
import * as Buttons from './../components/UI/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import * as wordActions from '../store/actions/words';
import WordShow from '../components/UI/WordShow';
import { Ionicons } from '@expo/vector-icons';
import Fonts from '../constants/Fonts';
import { InfoLine } from '../components/UI/InfoLine';

const MasterScreen = () => {
  const [levelA, setLevelA] = useState(false);
  const [levelN, setLevelN] = useState(false);
  const [levelV, setLevelV] = useState(false);
  const [levelH, setLevelH] = useState(false);
  const [levelF, setLevelF] = useState(false);
  const [levelT, setLevelT] = useState(false);
  const [levelX, setLevelX] = useState(false);
  const [index, setIndex] = useState(0);
  const [range, setRange] = useState(0);
  const [show, setShow] = useState(0);
  const [select, setSelect] = useState(0);
  const [selectZero, setSelectZero] = useState(0);
  const [selectOne, setSelectOne] = useState(0);
  const [selectTwo, setSelectTwo] = useState(0);
  const [sizeIconInfinity, setSizeIconInfinity] = useState(35);
  const [sizeIconAttach, setSizeIconAttach] = useState(35);
  const [sizeIconCheck, setSizeIconCheck] = useState(35);
  const [stat, setStat] = useState(false);

  const [countVZero, setCountVZero] = useState();
  const [countVOne, setCountVOne] = useState();
  const [countVTwo, setCountVTwo] = useState();
  const [countAZero, setCountAZero] = useState();
  const [countAOne, setCountAOne] = useState();
  const [countATwo, setCountATwo] = useState();
  const [countNZero, setCountNZero] = useState();
  const [countNOne, setCountNOne] = useState();
  const [countNTwo, setCountNTwo] = useState();
  const [countHZero, setCountHZero] = useState();
  const [countHOne, setCountHOne] = useState();
  const [countHTwo, setCountHTwo] = useState();
  const [countFZero, setCountFZero] = useState();
  const [countFOne, setCountFOne] = useState();
  const [countFTwo, setCountFTwo] = useState();
  const [countTZero, setCountTZero] = useState();
  const [countTOne, setCountTOne] = useState();
  const [countTTwo, setCountTTwo] = useState();
  const [countXZero, setCountXZero] = useState();
  const [countXOne, setCountXOne] = useState();
  const [countXTwo, setCountXTwo] = useState();

  const [sizeIconRewind, setSizeIconRewind] = useState(30);
  const [sizeIconBack, setSizeIconBack] = useState(30);
  const [sizeIconRandom, setSizeIconRandom] = useState(30);
  const [sizeIconNext, setSizeIconNext] = useState(30);
  const [sizeIconFastF, setSizeIconFastF] = useState(30);

  const [wordSelector, setWordSelector] = useState(false);

  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Master;
  const txtscnd = Languages[lngscnd].Master;

  const data = useSelector((state) => state.words.words);

  const dispatch = useDispatch();

  const words = data.filter(
    (word) =>
      (word.userlvl === 'a' && levelA && word['st' + lngscnd] === select) ||
      (word.userlvl === 'n' && levelN && word['st' + lngscnd] === select) ||
      (word.userlvl === 'v' && levelV && word['st' + lngscnd] === select) ||
      (word.userlvl === 'h' && levelH && word['st' + lngscnd] === select) ||
      (word.userlvl === 'f' && levelF && word['st' + lngscnd] === select) ||
      (word.userlvl === 't' && levelT && word['st' + lngscnd] === select) ||
      (word.userlvl === 'x' && levelX && word['st' + lngscnd] === select) ||
      word.userlvl === 'l'
  );

  const wordsZero = data.filter(
    (word) =>
      (word.userlvl === 'a' && levelA && word['st' + lngscnd] === 0) ||
      (word.userlvl === 'n' && levelN && word['st' + lngscnd] === 0) ||
      (word.userlvl === 'v' && levelV && word['st' + lngscnd] === 0) ||
      (word.userlvl === 'h' && levelH && word['st' + lngscnd] === 0) ||
      (word.userlvl === 'f' && levelF && word['st' + lngscnd] === 0) ||
      (word.userlvl === 't' && levelT && word['st' + lngscnd] === 0) ||
      (word.userlvl === 'x' && levelX && word['st' + lngscnd] === 0)
  );

  const wordsOne = data.filter(
    (word) =>
      (word.userlvl === 'a' && levelA && word['st' + lngscnd] === 1) ||
      (word.userlvl === 'n' && levelN && word['st' + lngscnd] === 1) ||
      (word.userlvl === 'v' && levelV && word['st' + lngscnd] === 1) ||
      (word.userlvl === 'h' && levelH && word['st' + lngscnd] === 1) ||
      (word.userlvl === 'f' && levelF && word['st' + lngscnd] === 1) ||
      (word.userlvl === 't' && levelT && word['st' + lngscnd] === 1) ||
      (word.userlvl === 'x' && levelX && word['st' + lngscnd] === 1)
  );

  const wordsTwo = data.filter(
    (word) =>
      (word.userlvl === 'a' && levelA && word['st' + lngscnd] === 2) ||
      (word.userlvl === 'n' && levelN && word['st' + lngscnd] === 2) ||
      (word.userlvl === 'v' && levelV && word['st' + lngscnd] === 2) ||
      (word.userlvl === 'h' && levelH && word['st' + lngscnd] === 2) ||
      (word.userlvl === 'f' && levelF && word['st' + lngscnd] === 2) ||
      (word.userlvl === 't' && levelT && word['st' + lngscnd] === 2) ||
      (word.userlvl === 'x' && levelX && word['st' + lngscnd] === 2)
  );

  useEffect(() => {
    counter();
    setRange(words.length);
  }, [
    stat,
    range,
    levelA,
    levelN,
    levelV,
    levelH,
    levelF,
    levelT,
    levelX,
    selectZero,
    selectOne,
    selectTwo,
    select,
    lngfrst,
    lngscnd,
    index,
  ]);

  const handleIndex = (jump) => {
    if (index + jump >= range) {
      setIndex(range - 1);
    } else if (index + jump < 0) {
      setIndex(0);
    } else {
      setIndex(index + jump);
    }
  };

  const handleStatus = (status) => {
    if (words[index]['userlvl'] !== 'l') {
      if (words[index]['st' + lngscnd] !== status) {
        dispatch(wordActions.setStatus(words[index]['iden'], status, lngscnd));
        delayedConfirmation(status);
        return;
      }
    } else {
      return;
    }
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function delayedConfirmation(status) {
      switch (status) {
        case 0: {
          setSizeIconInfinity(60);
          setStat((prev) => !prev);
          await sleep(50);
          setSizeIconInfinity(40);
          return;
        }
        case 1: {
          setSizeIconAttach(60);
          setStat((prev) => !prev);
          await sleep(50);
          setSizeIconAttach(40);
          return;
        }
        case 2: {
          setSizeIconCheck(60);
          setStat((prev) => !prev);
          await sleep(50);
          setSizeIconCheck(40);
          return;
        }
      }
    }
  };

  const handleSelect = (select) => {
    setSelect(select);
    counter();
    setRange(words.length);
    setIndex(0);
  };

  const counter = () => {
    const countZero = wordsZero.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 ? (counter += 1) : counter,
      0
    );

    setSelectZero(countZero);

    const countOne = wordsOne.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 ? (counter += 1) : counter,
      0
    );
    setSelectOne(countOne);

    const countTwo = wordsTwo.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 ? (counter += 1) : counter,
      0
    );
    setSelectTwo(countTwo);

    const countVZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'v'
          ? (counter += 1)
          : counter,
      0
    );
    setCountVZero(countVZero);

    const countVOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'v'
          ? (counter += 1)
          : counter,
      0
    );
    setCountVOne(countVOne);

    const countVTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'v'
          ? (counter += 1)
          : counter,
      0
    );
    setCountVTwo(countVTwo);

    const countNZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'n'
          ? (counter += 1)
          : counter,
      0
    );
    setCountNZero(countNZero);

    const countNOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'n'
          ? (counter += 1)
          : counter,
      0
    );
    setCountNOne(countNOne);

    const countNTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'n'
          ? (counter += 1)
          : counter,
      0
    );
    setCountNTwo(countNTwo);

    const countAZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'a'
          ? (counter += 1)
          : counter,
      0
    );
    setCountAZero(countAZero);

    const countAOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'a'
          ? (counter += 1)
          : counter,
      0
    );
    setCountAOne(countAOne);

    const countATwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'a'
          ? (counter += 1)
          : counter,
      0
    );
    setCountATwo(countATwo);

    const countHZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'h'
          ? (counter += 1)
          : counter,
      0
    );
    setCountHZero(countHZero);

    const countHOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'h'
          ? (counter += 1)
          : counter,
      0
    );
    setCountHOne(countHOne);

    const countHTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'h'
          ? (counter += 1)
          : counter,
      0
    );
    setCountHTwo(countHTwo);

    const countFZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'f'
          ? (counter += 1)
          : counter,
      0
    );
    setCountFZero(countFZero);

    const countFOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'f'
          ? (counter += 1)
          : counter,
      0
    );
    setCountFOne(countFOne);

    const countFTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'f'
          ? (counter += 1)
          : counter,
      0
    );
    setCountFTwo(countFTwo);

    const countTZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 't'
          ? (counter += 1)
          : counter,
      0
    );
    setCountTZero(countTZero);

    const countTOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 't'
          ? (counter += 1)
          : counter,
      0
    );
    setCountTOne(countTOne);

    const countTTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 't'
          ? (counter += 1)
          : counter,
      0
    );
    setCountTTwo(countTTwo);

    const countXZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 && word['userlvl'] === 'x'
          ? (counter += 1)
          : counter,
      0
    );
    setCountXZero(countXZero);

    const countXOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 && word['userlvl'] === 'x'
          ? (counter += 1)
          : counter,
      0
    );
    setCountXOne(countXOne);

    const countXTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 && word['userlvl'] === 'x'
          ? (counter += 1)
          : counter,
      0
    );
    setCountXTwo(countXTwo);
  };

  const animeIcon = (icon) => {
    delayedConfirmation(icon);

    async function delayedConfirmation(icon) {
      switch (icon) {
        case 'Rewind': {
          setSizeIconRewind(50);
          await sleep(10);
          setSizeIconRewind(35);
          return;
        }
        case 'Back': {
          setSizeIconBack(50);
          await sleep(10);
          setSizeIconBack(35);
          return;
        }
        case 'Random': {
          setSizeIconRandom(50);
          await sleep(10);
          setSizeIconRandom(35);
          return;
        }
        case 'Next': {
          setSizeIconNext(50);
          await sleep(10);
          setSizeIconNext(35);
          return;
        }
        case 'FastF': {
          setSizeIconFastF(50);
          await sleep(10);
          setSizeIconFastF(35);
          return;
        }
      }
    }
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  };

  const WordShowWindow = (props) => {
    return (
      <>
        <View style={{ height: '60%', justifyContent: 'space-evenly' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TxtNormal>
              {range > 0 ? (
                <WordShow
                  word={
                    lngscnd !== 'ar' || lngscnd !== 'fa' || lngscnd !== 'ur'
                      ? words[index][lngscnd]
                      : words[index][lngscnd].split('').reverse().join('')
                  }
                  show={show}
                  key={index}
                  color={words[index]['st' + lngscnd]}
                />
              ) : (
                <TxtItalic>{txtscnd.noRange}</TxtItalic>
              )}
            </TxtNormal>
          </View>
        </View>
        <View style={{ height: '25%', justifyContent: 'space-evenly' }}>
          <TouchableNativeFeedback
            background={
              Platform.Version >= 21
                ? TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')
                : TouchableNativeFeedback.SelectableBackground()
            }
            delayPressIn={0}
            onPress={() => setWordSelector(true)}>
            <View
              style={{
                width: '90%',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Ionicons name='ios-list' size={30} color={Colors.inactive} />
                <TxtLabel
                  style={{
                    color: Colors.surround,
                    fontSize: Dimensions.get('window').height / 25,
                  }}>
                  {range > 0 ? (
                    words[index][lngfrst]
                  ) : (
                    <TxtItalic>{txtfrst.noRange}</TxtItalic>
                  )}
                </TxtLabel>
                <Ionicons name='ios-list' size={30} color={Colors.inactive} />
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{ height: '15%' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'space-between',
              alignItems: 'center',
              width: '70%',
              alignSelf: 'center',
            }}>
            <Buttons.ButtonBox
              action={() => {
                setShow(0);
              }}
              bodyStyle={
                show === 0
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                    }
                  : { backgroundColor: Colors.base }
              }
              insideStyle={
                show === 0
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              ?
            </Buttons.ButtonBox>

            <Buttons.ButtonBox
              action={() => {
                setShow(1);
              }}
              bodyStyle={
                show === 1
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                    }
                  : { backgroundColor: Colors.base }
              }
              insideStyle={
                show === 1
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              _ _ _
            </Buttons.ButtonBox>
            <Buttons.ButtonBox
              action={() => {
                setShow(2);
              }}
              bodyStyle={
                show === 2
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                    }
                  : { backgroundColor: Colors.base }
              }
              insideStyle={
                show === 2
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              _ _ x
            </Buttons.ButtonBox>
            <Buttons.ButtonBox
              action={() => {
                setShow(3);
              }}
              bodyStyle={
                show === 3
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                    }
                  : { backgroundColor: Colors.base }
              }
              insideStyle={
                show === 3
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              x _ x
            </Buttons.ButtonBox>
            <Buttons.ButtonBox
              action={() => {
                setShow(4);
              }}
              bodyStyle={
                show === 4
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                    }
                  : { backgroundColor: Colors.base }
              }
              insideStyle={
                show === 4
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              x x x
            </Buttons.ButtonBox>
          </View>
        </View>
      </>
    );
  };

  const WordSelectorWindow = (props) => {
    return (
      <>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={words}
            keyExtractor={(item) => item['id' + lngfrst]}
            getItemLayout={(item, index) => ({
              length: Dimensions.get('window').height / 17,
              offset: (Dimensions.get('window').height / 17) * index,
              index,
            })}
            initialScrollIndex={index}
            renderItem={({ item }) => {
              return (
                <Buttons.ButtonBox
                  bodyStyle={
                    words[index][lngfrst] === item[lngfrst]
                      ? {
                          width: Dimensions.get('window').width / 1.5,
                          height: Dimensions.get('window').height / 18,
                          borderColor: Colors.base,
                          backgroundColor: Colors.inactive,
                          padding: 3,
                        }
                      : {
                          width: Dimensions.get('window').width / 1.5,
                          height: Dimensions.get('window').height / 18,
                          borderColor: Colors.base,
                          padding: 3,
                        }
                  }
                  action={() => {
                    setSelectorIndex(item[lngfrst]);
                    setWordSelector(false);
                  }}>
                  <TxtLabel
                    style={{
                      paddingTop: 3,
                      color: Colors.surround,
                      fontSize: Dimensions.get('window').height / 25,
                    }}>
                    {item[lngfrst]}
                  </TxtLabel>
                </Buttons.ButtonBox>
              );
            }}
          />
        </View>
      </>
    );
  };

  const setSelectorIndex = (props) => {
    let newIndex = words.findIndex((word) => word[lngfrst] === props);
    setIndex(newIndex);
  };

  //* render **************************************
  return (
    <ScreenFrame>
      <View
        style={{
          height: '17%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '90%',
            alignSelf: 'center',
          }}>
          <ComboAround>
            <Buttons.ButtonBox
              action={() => {
                setLevelV((prev) => !prev);
                setIndex(0);
              }}
              bodyStyle={
                levelV
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelV
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              50v
            </Buttons.ButtonBox>

            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {words[index]['userlvl'] === 'v' ? (
                <TxtButton>^</TxtButton>
              ) : (
                <TxtButton> </TxtButton>
              )}
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countVZero / 50) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countVOne / 50) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countVTwo / 50) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>

          <ComboAround>
            <Buttons.ButtonBox
              action={() => {
                setLevelN((prev) => !prev);
                setIndex(0);
              }}
              bodyStyle={
                levelN
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      marginBottom: null,
                      borderColor: Colors.surround,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelN
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              50n
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {words[index]['userlvl'] === 'n' ? (
                <TxtButton>^</TxtButton>
              ) : (
                <TxtButton> </TxtButton>
              )}
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countNZero / 48) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countNOne / 48) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countNTwo / 48) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonBox
              action={() => {
                setLevelA((prev) => !prev);
                setIndex(0);
              }}
              bodyStyle={
                levelA
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelA
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              50a
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {words[index]['userlvl'] === 'a' ? (
                <TxtButton>^</TxtButton>
              ) : (
                <TxtButton> </TxtButton>
              )}
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countAZero / 47) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countAOne / 47) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countATwo / 47) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonBox
              action={() => {
                setLevelH((prev) => !prev);
                setIndex(0);
              }}
              bodyStyle={
                levelH
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelH
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              100
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {words[index]['userlvl'] === 'h' ? (
                <TxtButton>^</TxtButton>
              ) : (
                <TxtButton> </TxtButton>
              )}
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countHZero / 70) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countHOne / 70) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countHTwo / 70) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>

          <ComboAround>
            <Buttons.ButtonBox
              action={() => {
                setLevelF((prev) => !prev);
                setIndex(0);
              }}
              bodyStyle={
                levelF
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelF
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              500
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {words[index]['userlvl'] === 'f' ? (
                <TxtButton>^</TxtButton>
              ) : (
                <TxtButton> </TxtButton>
              )}
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countFZero / 280) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countFOne / 280) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countFTwo / 280) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonBox
              action={() => {
                setLevelT((prev) => !prev);
                setIndex(0);
              }}
              bodyStyle={
                levelT
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelT
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              1000
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {words[index]['userlvl'] === 't' ? (
                <TxtButton>^</TxtButton>
              ) : (
                <TxtButton> </TxtButton>
              )}
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countTZero / 553) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countTOne / 553) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countTTwo / 553) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
          <ComboAround>
            <Buttons.ButtonBox
              action={() => {
                setLevelX((prev) => !prev);
                setIndex(0);
              }}
              bodyStyle={
                levelX
                  ? {
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: Colors.surround,
                      marginBottom: null,
                    }
                  : { backgroundColor: Colors.base, marginBottom: null }
              }
              insideStyle={
                levelX
                  ? {
                      fontFamily: Fonts.bold,
                      color: Colors.surround,
                    }
                  : null
              }>
              3000
            </Buttons.ButtonBox>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {words[index]['userlvl'] === 'x' ? (
                <TxtButton>^</TxtButton>
              ) : (
                <TxtButton> </TxtButton>
              )}
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.accent,
                  width: (countXZero / 1951) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backSecond,
                  width: (countXOne / 1951) * 100 + '%',
                }}
              />
              <InfoLine
                infoStyle={{
                  backgroundColor: Colors.backPrimary,
                  width: (countXTwo / 1951) * 100 + '%',
                }}
              />
            </View>
          </ComboAround>
        </View>
        <View
          style={{
            alignItems: 'center',

            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '60%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <ComboAround>
              <Buttons.ButtonCircle
                action={() => {
                  handleSelect(0);
                }}
                bodyStyle={
                  select === 0
                    ? {
                        borderColor: Colors.base,
                        borderWidth: 1,
                      }
                    : { borderColor: Colors.inactive, borderWidth: 1 }
                }
                insideStyle={
                  select === 0
                    ? {
                        color: Colors.accent,
                        fontSize: Dimensions.get('window').width / 22,
                        // fontFamily: Fonts.bold,
                      }
                    : sizeIconInfinity > 41
                    ? {
                        color: Colors.accent,
                        fontSize: Dimensions.get('window').width / 22,
                      }
                    : { color: Colors.surround }
                }>
                {selectZero}
              </Buttons.ButtonCircle>
            </ComboAround>
            <ComboAround>
              <Buttons.ButtonCircle
                action={() => {
                  handleSelect(1);
                }}
                bodyStyle={
                  select === 1
                    ? {
                        borderColor: Colors.base,
                        borderWidth: 1,
                      }
                    : { borderColor: Colors.inactive, borderWidth: 1 }
                }
                insideStyle={
                  select === 1
                    ? {
                        color: Colors.backSecond,
                        fontSize: Dimensions.get('window').width / 22,
                        // fontFamily: Fonts.bold,
                      }
                    : sizeIconAttach > 41
                    ? {
                        color: Colors.backSecond,
                        fontSize: Dimensions.get('window').width / 22,
                      }
                    : { color: Colors.surround }
                }>
                {selectOne}
              </Buttons.ButtonCircle>
            </ComboAround>
            <ComboAround>
              <Buttons.ButtonCircle
                action={() => {
                  handleSelect(2);
                }}
                bodyStyle={
                  select === 2
                    ? {
                        borderColor: Colors.base,
                        borderWidth: 1,
                      }
                    : { borderColor: Colors.inactive, borderWidth: 1 }
                }
                insideStyle={
                  select === 2
                    ? {
                        color: Colors.backPrimary,
                        fontSize: Dimensions.get('window').width / 22,
                        // fontFamily: Fonts.bold,
                      }
                    : sizeIconCheck > 41
                    ? {
                        color: Colors.backPrimary,
                        fontSize: Dimensions.get('window').width / 22,
                      }
                    : { color: Colors.surround }
                }>
                {selectTwo}
              </Buttons.ButtonCircle>
            </ComboAround>
          </View>
        </View>
      </View>

      {/* ***********************************WORD SHOW */}
      <View
        style={{
          width: '90%',
          height: '50%',
          justifyContent: 'space-evenly',
          borderWidth: 0.5,
          borderColor: Colors.inactive,
          borderStyle: 'dashed',
        }}>
        {wordSelector ? <WordSelectorWindow /> : <WordShowWindow />}
      </View>

      {/* ***********************************************************************SHOW */}
      <View
        style={{
          height: '25%',
          justifyContent: 'space-between',
        }}>
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              width: '60%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <Buttons.ButtonCircle
              action={() => handleStatus(0)}
              bodyStyle={
                words[index]['st' + lngscnd] === 0
                  ? { borderColor: Colors.base }
                  : { borderColor: Colors.inactive }
              }>
              <Ionicons
                name='ios-infinite'
                size={
                  words[index]['st' + lngscnd] === 0 ? 30 : sizeIconInfinity
                }
                color={
                  words[index]['st' + lngscnd] === 0
                    ? Colors.inactive
                    : sizeIconInfinity > 41
                    ? Colors.accent
                    : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
            <Buttons.ButtonCircle
              action={() => handleStatus(1)}
              bodyStyle={
                words[index]['st' + lngscnd] === 1
                  ? { borderColor: Colors.base }
                  : { borderColor: Colors.inactive }
              }>
              <Ionicons
                name='ios-attach'
                size={words[index]['st' + lngscnd] === 1 ? 30 : sizeIconAttach}
                color={
                  words[index]['st' + lngscnd] === 1
                    ? Colors.inactive
                    : sizeIconAttach > 41
                    ? Colors.backSecond
                    : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
            <Buttons.ButtonCircle
              action={() => handleStatus(2)}
              bodyStyle={
                words[index]['st' + lngscnd] === 2
                  ? { borderColor: Colors.base }
                  : { borderColor: Colors.inactive }
              }>
              <Ionicons
                name='md-checkmark'
                size={words[index]['st' + lngscnd] === 2 ? 30 : sizeIconCheck}
                color={
                  words[index]['st' + lngscnd] === 2
                    ? Colors.inactive
                    : sizeIconCheck > 41
                    ? Colors.backPrimary
                    : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'space-around',
            width: Dimensions.get('window').width * 0.7,
          }}>
          <Buttons.ButtonCircle
            action={() => {
              handleIndex(-Math.floor(range / 7));
              animeIcon('Rewind');
            }}>
            <Ionicons
              name='md-rewind'
              size={sizeIconRewind}
              color={
                words[index]['st' + lngscnd] === 0 && sizeIconRewind > 35
                  ? Colors.accent
                  : words[index]['st' + lngscnd] === 1 && sizeIconRewind > 35
                  ? Colors.backSecond
                  : words[index]['st' + lngscnd] === 2 && sizeIconRewind > 35
                  ? Colors.backPrimary
                  : Colors.surround
              }
            />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              handleIndex(-1);
              animeIcon('Back');
            }}
            color={Colors.base}>
            <Ionicons
              name='md-arrow-dropleft'
              size={sizeIconBack}
              color={
                words[index]['st' + lngscnd] === 0 && sizeIconBack > 35
                  ? Colors.accent
                  : words[index]['st' + lngscnd] === 1 && sizeIconBack > 35
                  ? Colors.backSecond
                  : words[index]['st' + lngscnd] === 2 && sizeIconBack > 35
                  ? Colors.backPrimary
                  : Colors.surround
              }
            />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              setIndex(Math.floor(Math.random() * range));
              animeIcon('Random');
            }}
            color={Colors.base}>
            <Ionicons
              name='ios-color-wand'
              size={sizeIconRandom}
              color={
                words[index]['st' + lngscnd] === 0 && sizeIconRandom > 35
                  ? Colors.accent
                  : words[index]['st' + lngscnd] === 1 && sizeIconRandom > 35
                  ? Colors.backSecond
                  : words[index]['st' + lngscnd] === 2 && sizeIconRandom > 35
                  ? Colors.backPrimary
                  : Colors.surround
              }
            />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              handleIndex(1);
              animeIcon('Next');
            }}
            color={Colors.base}>
            <Ionicons
              name='md-arrow-dropright'
              size={sizeIconNext}
              color={
                words[index]['st' + lngscnd] === 0 && sizeIconNext > 35
                  ? Colors.accent
                  : words[index]['st' + lngscnd] === 1 && sizeIconNext > 35
                  ? Colors.backSecond
                  : words[index]['st' + lngscnd] === 2 && sizeIconNext > 35
                  ? Colors.backPrimary
                  : Colors.surround
              }
            />
          </Buttons.ButtonCircle>

          <Buttons.ButtonCircle
            action={() => {
              handleIndex(Math.floor(range / 7));
              animeIcon('FastF');
            }}
            color={Colors.base}>
            <Ionicons
              name='md-fastforward'
              size={sizeIconFastF}
              color={
                words[index]['st' + lngscnd] === 0 && sizeIconFastF > 35
                  ? Colors.accent
                  : words[index]['st' + lngscnd] === 1 && sizeIconFastF > 35
                  ? Colors.backSecond
                  : words[index]['st' + lngscnd] === 2 && sizeIconFastF > 35
                  ? Colors.backPrimary
                  : Colors.surround
              }
            />
          </Buttons.ButtonCircle>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <TxtButton style={{ color: Colors.surround }}>
            {words[index]['userlvl'] === 'l' ? '< >' : index + 1} / {range - 1}
          </TxtButton>
        </View>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const langfrst = Languages[lngfrst]['Language'].slice(0, 10);
  const langscnd = Languages[lngscnd]['Language'].slice(0, 10);

  return {
    headerTitle: `${langfrst} > ${langscnd}`,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MasterScreen;
