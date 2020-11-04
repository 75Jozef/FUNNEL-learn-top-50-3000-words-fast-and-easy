import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  View,
  ScrollView,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
import Input from './../components/UI/Input';
import Colors from '../constants/Colors';
import {
  TxtHeader,
  TxtBold,
  TxtNormal,
  TxtItalic,
  TxtLabel,
  TxtButton,
} from '../components/UI/Txt';
import CardFrame from '../components/UI/CardFrame';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/UI/CustomHeaderButton';
import * as Languages from '../data/languages';
import { useSelector, useDispatch } from 'react-redux';
import * as Buttons from './../components/UI/Buttons';
import { Ionicons } from '@expo/vector-icons';
import ComboAround from '../components/UI/ComboAround';
import * as lngActions from '../store/actions/lang';
import { InfoLine } from '../components/UI/InfoLine';
import Fonts from '../constants/Fonts';

const StatisticsScreen = () => {
  const [iconSize] = useState(20);

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

  const [selectZero, setSelectZero] = useState(0);
  const [selectOne, setSelectOne] = useState(0);
  const [selectTwo, setSelectTwo] = useState(0);

  const [levelA, setLevelA] = useState(false);
  const [levelN, setLevelN] = useState(false);
  const [levelV, setLevelV] = useState(false);
  const [levelH, setLevelH] = useState(false);
  const [levelF, setLevelF] = useState(false);
  const [levelT, setLevelT] = useState(false);

  const [levelX, setLevelX] = useState(false);

  const [select, setSelect] = useState(0);

  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtscnd = Languages[lngscnd].Statistics;
  const txtfrst = Languages[lngfrst].Statistics;

  const data = useSelector((state) => state.words.words);

  const [selectSecondLanguage, setSelectSecondLanguage] = useState(false);

  const word = data.filter((word) => word['id' + lngscnd] === 2999);
  const actLngScnd = word[0][lngscnd];

  const wordEng = data.filter((word) => word['id' + lngscnd] === 3001);
  const actLngScndEng = wordEng[0][lngscnd];

  const dispatch = useDispatch();

  let languages = [
    'en',
    'it',
    'pa',
    'jv',
    'th',
    'pl',
    'fa',
    'ur',
    'uk',
    'ro',
    'nl',
    'sr',
    'hr',
    'hu',
    'el',
    'cs',
    'sv',
    'be',
    'fi',
    'da',
    'cn',
    'es',
    'ar',
    'pt',
    'id',
    'ms',
    'fr',
    'ru',
    'de',
    'ja',
    'hi',
    'bn',
    'tr',
    'mr',
    'ko',
    'vi',
    'ta',
    'sk',
    'af',
    'lv',
    'eo',
    'et',
    'bg',
  ];

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
  });

  const counter = () => {
    setCountVZero(0);
    setCountVOne(0);
    setCountVTwo(0);
    setCountAZero(0);
    setCountAOne(0);
    setCountATwo(0);
    setCountNZero(0);
    setCountNOne(0);
    setCountNTwo(0);
    setCountHZero(0);
    setCountHOne(0);
    setCountHTwo(0);
    setCountFZero(0);
    setCountFOne(0);
    setCountFTwo(0);
    setCountTZero(0);
    setCountTOne(0);
    setCountTTwo(0);
    setCountXZero(0);
    setCountXOne(0);
    setCountXTwo(0);
    setSelectZero(0);
    setSelectOne(0);
    setSelectTwo(0);
    // let countZero, countOne, countTwo, countVZero, countVOne, countVTwo, countNZero, countNOne, countNTwo, countAZero, countAone, countATwo, countHZero, countHOne, countHTwo, countFZero, countFOne, countFTwo, countTZero, countTOne, countTTwo, countXZero, countXOne, countXTwo;

    // word['st' + lngscnd] === 0 ? countZero += 1 :  word['st' + lngscnd] === 1 ? countOne +=1 :  word['st' + lngscnd] === 2 ? countTwo +=1 :  word['st' + lngscnd] === 0 && word['userlvl'] === 'v' ? countVZero +=1 : word['st' + lngscnd] === 1 && word['userlvl'] === 'v' ? countVOne +=1 : word['st' + lngscnd] === 2 && word['userlvl'] === 'v' ? countVTwo +=1 : word['st' + lngscnd] === 0 && word['userlvl'] === 'n' ? countNZero += 1 : word['st' + lngscnd] === 1 && word['userlvl'] === 'n' ? countNOne += 1 : word['st' + lngscnd] === 2 && word['userlvl'] === 'n' ? countNTwo +=1 : word['st' + lngscnd] === 0 && word['userlvl'] === 'a' ? countAZero += 1 : word['st' + lngscnd] === 1 && word['userlvl'] === 'a' ? countAone += 1 : word['st' + lngscnd] === 2 && word['userlvl'] === 'a' ? countATwo +=1 : word['st' + lngscnd] === 0 && word['userlvl'] === 'h' ? countHZero +=1 : word['st' + lngscnd] === 1 && word['userlvl'] === 'h' ? countHOne += 1 : word['st' + lngscnd] === 2 && word['userlvl'] === 'h' ? countHTwo += 1 : word['st' + lngscnd] === 0 && word['userlvl'] === 'f' ? countFZero += 1 : word['st' + lngscnd] === 1 && word['userlvl'] === 'h' ? countFOne += 1 : word['st' + lngscnd] === 2 && word['userlvl'] === 'f' ? countFTwo += 1 : word['st' + lngscnd] === 0 && word['userlvl'] === 't' ? countTZero += 1 : word['st' + lngscnd] === 1 && word['userlvl'] === 't' ? countTOne += 1 : word['st' + lngscnd] === 2 && word['userlvl'] === 't' ? countTTwo += 1 : word['st' + lngscnd] === 0 && word['userlvl'] === 'x' ? countXZero += 1 : word['st' + lngscnd] === 1 && word['userlvl'] === 'x' ? countXOne +=1 : word['st' + lngscnd] === 2 && word['userlvl'] === 'x' ? countXTwo += 1 : null

    data.map((word) => {
      word['st' + lngscnd] === 0
        ? setSelectZero((prev) => prev++)
        : word['st' + lngscnd] === 1
        ? setSelectOne((prev) => prev++)
        : word['st' + lngscnd] === 2
        ? setSelectTwo((prev) => prev++)
        : word['st' + lngscnd] === 0 && word['userlvl'] === 'v'
        ? setCountVZero((prev) => prev++)
        : word['st' + lngscnd] === 1 && word['userlvl'] === 'v'
        ? setCountVOne((prev) => prev++)
        : word['st' + lngscnd] === 2 && word['userlvl'] === 'v'
        ? setCountVTwo((prev) => prev++)
        : word['st' + lngscnd] === 0 && word['userlvl'] === 'n'
        ? setCountNZero((prev) => prev++)
        : word['st' + lngscnd] === 1 && word['userlvl'] === 'n'
        ? setCountNOne((prev) => prev++)
        : word['st' + lngscnd] === 2 && word['userlvl'] === 'n'
        ? setCountNTwo((prev) => prev++)
        : word['st' + lngscnd] === 0 && word['userlvl'] === 'a'
        ? setCountAZero((prev) => prev++)
        : word['st' + lngscnd] === 1 && word['userlvl'] === 'a'
        ? setCountAOne((prev) => prev++)
        : word['st' + lngscnd] === 2 && word['userlvl'] === 'a'
        ? setCountATwo((prev) => prev++)
        : word['st' + lngscnd] === 0 && word['userlvl'] === 'h'
        ? setCountHZero((prev) => prev++)
        : word['st' + lngscnd] === 1 && word['userlvl'] === 'h'
        ? setCountHOne((prev) => prev++)
        : word['st' + lngscnd] === 2 && word['userlvl'] === 'h'
        ? setCountHTwo((prev) => prev++)
        : word['st' + lngscnd] === 0 && word['userlvl'] === 'f'
        ? setCountFZero((prev) => prev++)
        : word['st' + lngscnd] === 1 && word['userlvl'] === 'h'
        ? setCountFOne((prev) => prev++)
        : word['st' + lngscnd] === 2 && word['userlvl'] === 'f'
        ? setCountFTwo((prev) => prev++)
        : word['st' + lngscnd] === 0 && word['userlvl'] === 't'
        ? setCountTZero((prev) => prev++)
        : word['st' + lngscnd] === 1 && word['userlvl'] === 't'
        ? setCountTOne((prev) => prev++)
        : word['st' + lngscnd] === 2 && word['userlvl'] === 't'
        ? setCountTTwo((prev) => prev++)
        : word['st' + lngscnd] === 0 && word['userlvl'] === 'x'
        ? setCountXZero((prev) => prev++)
        : word['st' + lngscnd] === 1 && word['userlvl'] === 'x'
        ? setCountXOne((prev) => prev++)
        : word['st' + lngscnd] === 2 && word['userlvl'] === 'x'
        ? setCountXTwo((prev) => prev++)
        : null;
    });

    // const countZero = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 0 ? (counter += 1) : counter,
    //   0
    // );

    // setSelectZero(countZero);

    // const countOne = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 1 ? (counter += 1) : counter,
    //   0
    // );
    // setSelectOne(countOne);

    // const countTwo = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 2 ? (counter += 1) : counter,
    //   0
    // );
    // setSelectTwo(countTwo);

    // const countVZero = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 0 && word['userlvl'] === 'v'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountVZero(countVZero);

    // const countVOne = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 1 && word['userlvl'] === 'v'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountVOne(countVOne);

    // const countVTwo = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 2 && word['userlvl'] === 'v'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountVTwo(countVTwo);

    // const countNZero = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 0 && word['userlvl'] === 'n'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountNZero(countNZero);

    // const countNOne = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 1 && word['userlvl'] === 'n'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountNOne(countNOne);

    // const countNTwo = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 2 && word['userlvl'] === 'n'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountNTwo(countNTwo);

    // const countAZero = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 0 && word['userlvl'] === 'a'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountAZero(countAZero);

    // const countAOne = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 1 && word['userlvl'] === 'a'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountAOne(countAOne);

    // const countATwo = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 2 && word['userlvl'] === 'a'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountATwo(countATwo);

    // const countHZero = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 0 && word['userlvl'] === 'h'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountHZero(countHZero);

    // const countHOne = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 1 && word['userlvl'] === 'h'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountHOne(countHOne);

    // const countHTwo = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 2 && word['userlvl'] === 'h'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountHTwo(countHTwo);

    // const countFZero = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 0 && word['userlvl'] === 'f'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountFZero(countFZero);

    // const countFOne = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 1 && word['userlvl'] === 'f'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountFOne(countFOne);

    // const countFTwo = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 2 && word['userlvl'] === 'f'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountFTwo(countFTwo);

    // const countTZero = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 0 && word['userlvl'] === 't'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountTZero(countTZero);

    // const countTOne = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 1 && word['userlvl'] === 't'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountTOne(countTOne);

    // const countTTwo = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 2 && word['userlvl'] === 't'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountTTwo(countTTwo);

    // const countXZero = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 0 && word['userlvl'] === 'x'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountXZero(countXZero);

    // const countXOne = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 1 && word['userlvl'] === 'x'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountXOne(countXOne);

    // const countXTwo = data.reduce(
    //   (counter, word) =>
    //     word['st' + lngscnd] === 2 && word['userlvl'] === 'x'
    //       ? (counter += 1)
    //       : counter,
    //   0
    // );
    // setCountXTwo(countXTwo);
  };

  const handleSecondLng = (props) => {
    if (selectSecondLanguage) {
      setSelectSecondLanguage(false);
      return;
    }
    setSelectSecondLanguage(true);
  };

  const SelectSecondLanguage = (props) => {
    return (
      <View
        style={{
          alignItems: 'center',
          borderWidth: 0.5,
          borderStyle: 'dotted',
          borderColor: Colors.inactive,
        }}>
        <ScrollView>
          {languages.map((lng, index) => {
            return (
              <View key={index}>
                <Buttons.ButtonBox
                  bodyStyle={
                    lng === lngscnd
                      ? {
                          width: Dimensions.get('window').width / 2,
                          height: Dimensions.get('window').height / 22,
                          backgroundColor: Colors.inactive,
                          padding: 3,
                        }
                      : {
                          width: Dimensions.get('window').width / 2,
                          height: Dimensions.get('window').height / 22,
                          borderColor: Colors.base,
                          padding: 3,
                        }
                  }
                  action={() => setLanguageSecond(lng)}>
                  <TxtLabel
                    style={{
                      paddingTop: 5,
                      color: Colors.surround,
                      fontSize: Dimensions.get('window').height / 40,
                    }}>
                    {word[0][lng]}
                  </TxtLabel>
                </Buttons.ButtonBox>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const setLanguageSecond = (props) => {
    dispatch(lngActions.setLngScnd(props));
    setSelectSecondLanguage(false);
  };

  return (
    <ScreenFrame>
      <View style={{ backgroundColor: 'pink', height: '10%', width: '70%' }}>
        <TouchableNativeFeedback
          background={
            Platform.Version >= 21
              ? TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')
              : TouchableNativeFeedback.SelectableBackground()
          }
          delayPressIn={0}
          onPress={() => handleSecondLng()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
            }}>
            <View style={{ width: Dimensions.get('window').width / 8 }}>
              <Buttons.ButtonCircle action={() => handleSecondLng()}>
                <Ionicons
                  name='ios-globe'
                  size={iconSize}
                  color={
                    selectSecondLanguage ? Colors.backSecond : Colors.inactive
                  }
                />
              </Buttons.ButtonCircle>
            </View>

            <View style={{ marginLeft: 20 }}>
              <ComboAround>
                <TxtNormal
                  style={
                    selectSecondLanguage
                      ? { color: Colors.surround }
                      : { color: Colors.inactive }
                  }>
                  {actLngScnd}
                </TxtNormal>
                <TxtNormal
                  style={
                    selectSecondLanguage
                      ? { color: Colors.surround }
                      : { color: Colors.inactive }
                  }>
                  ({actLngScndEng})
                </TxtNormal>
              </ComboAround>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View
        style={{
          backgroundColor: 'yellow',
          height: '10%',
          width: '70%',
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          height: '70%',
          justifyContent: 'flex-start',
          width: '90%',
        }}>
        <View
          style={{
            width: '30%',
            backgroundColor: 'blue',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'black',
              height: '16%',
              flexDirection: 'column',
            }}>
            <Buttons.ButtonBox
              action={() => {
                setLevelV((prev) => !prev);
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
            <TxtBold>kuk</TxtBold>
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

          <ComboAround>
            <Buttons.ButtonBox
              action={() => {
                setLevelN((prev) => !prev);
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
            width: '70%',
          }}>
          {selectSecondLanguage ? <SelectSecondLanguage /> : null}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '10%',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            width: '90%',

            backgroundColor: 'brown',
            justifyContent: 'center',
          }}></View>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const txtfrst = Languages[lngfrst].Statistics;
  return {
    headerTitle: `${txtfrst.header}`,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName={'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default StatisticsScreen;
