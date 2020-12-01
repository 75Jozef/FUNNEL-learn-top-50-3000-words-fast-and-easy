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
  TxtNormal,
  TxtItalic,
  TxtLabel,
  TxtButton,
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
import * as Speech from 'expo-speech';

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
  const [countVZero, setCountVZero] = useState(0);
  const [countVOne, setCountVOne] = useState(0);
  const [countVTwo, setCountVTwo] = useState(0);
  const [countAZero, setCountAZero] = useState(0);
  const [countAOne, setCountAOne] = useState(0);
  const [countATwo, setCountATwo] = useState(0);
  const [countNZero, setCountNZero] = useState(0);
  const [countNOne, setCountNOne] = useState(0);
  const [countNTwo, setCountNTwo] = useState(0);
  const [countHZero, setCountHZero] = useState(0);
  const [countHOne, setCountHOne] = useState(0);
  const [countHTwo, setCountHTwo] = useState(0);
  const [countFZero, setCountFZero] = useState(0);
  const [countFOne, setCountFOne] = useState(0);
  const [countFTwo, setCountFTwo] = useState(0);
  const [countTZero, setCountTZero] = useState(0);
  const [countTOne, setCountTOne] = useState(0);
  const [countTTwo, setCountTTwo] = useState(0);
  const [countXZero, setCountXZero] = useState(0);
  const [countXOne, setCountXOne] = useState(0);
  const [countXTwo, setCountXTwo] = useState(0);

  const [wordSelector, setWordSelector] = useState(false);

  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Master;
  const txtscnd = Languages[lngscnd].Master;
  const dispatch = useDispatch();

  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    setTheme(actTheme);
  }, []);

  const data = useSelector((state) => state.words.words);

  const selectedWords = data.filter(
    (word) =>
      (word.userlvl === 'a' && levelA) ||
      (word.userlvl === 'n' && levelN) ||
      (word.userlvl === 'v' && levelV) ||
      (word.userlvl === 'h' && levelH) ||
      (word.userlvl === 'f' && levelF) ||
      (word.userlvl === 't' && levelT) ||
      (word.userlvl === 'x' && levelX) ||
      word.userlvl === 'l'
  );

  const words = selectedWords.filter(
    (word) => word['st' + lngscnd] === select || word.userlvl === 'l'
  );

  const [helper, setHelper] = useState(false);

  useEffect(() => {
    counter();
    setRange(words.length);
  }, [
    levelA,
    levelN,
    levelV,
    levelH,
    levelF,
    levelT,
    levelX,
    range,
    select,
    helper,
    selectOne,
    selectTwo,
    selectZero,
  ]);

  const handleIndex = (jump) => {
    if (range <= 1) {
      setIndex(0);
    } else {
      if (index + jump >= range) {
        setIndex(range - 2);
      } else if (index + jump < 0) {
        setIndex(0);
      } else if (words[index + jump][lngscnd] === lngscnd) {
        setIndex(0);
      } else {
        setIndex(index + jump);
      }
    }
  };

  const handleStatus = (status) => {
    if (words[index]['userlvl'] !== 'l') {
      if (words[index]['st' + lngscnd] !== status) {
        dispatch(
          wordActions.setStatus(words[index]['iden'], status, lngscnd)
        ).then(() => {
          setHelper((prev) => !prev);
        });
      }
    }
  };

  const handleSelect = (select) => {
    setSelect(select);
    setIndex(0);
  };

  const counter = () => {
    let cntZero = 0;
    let cntOne = 0;
    let cntTwo = 0;
    let cntVZero = 0;
    let cntAZero = 0;
    let cntNZero = 0;
    let cntHZero = 0;
    let cntFZero = 0;
    let cntTZero = 0;
    let cntXZero = 0;
    let cntVOne = 0;
    let cntAOne = 0;
    let cntNOne = 0;
    let cntHOne = 0;
    let cntFOne = 0;
    let cntTOne = 0;
    let cntXOne = 0;
    let cntVTwo = 0;
    let cntATwo = 0;
    let cntNTwo = 0;
    let cntHTwo = 0;
    let cntFTwo = 0;
    let cntTTwo = 0;
    let cntXTwo = 0;

    selectedWords.forEach((word) => {
      switch (word['st' + lngscnd]) {
        case 0:
          cntZero++;
          if (word['userlvl'] === 'v') {
            cntVZero++;
            break;
          }
          if (word['userlvl'] === 'a') {
            cntAZero++;
            break;
          }
          if (word['userlvl'] === 'n') {
            cntNZero++;
            break;
          }
          if (word['userlvl'] === 'h') {
            cntHZero++;
            break;
          }
          if (word['userlvl'] === 'f') {
            cntFZero++;
            break;
          }
          if (word['userlvl'] === 't') {
            cntTZero++;
            break;
          }
          if (word['userlvl'] === 'x') {
            cntXZero++;
            break;
          }
          break;
        case 1:
          cntOne++;
          if (word['userlvl'] === 'v') {
            cntVOne++;
            break;
          }
          if (word['userlvl'] === 'a') {
            cntAOne++;
            break;
          }
          if (word['userlvl'] === 'n') {
            cntNOne++;
            break;
          }
          if (word['userlvl'] === 'h') {
            cntHOne++;
            break;
          }
          if (word['userlvl'] === 'f') {
            cntFOne++;
            break;
          }
          if (word['userlvl'] === 't') {
            cntTOne++;
            break;
          }
          if (word['userlvl'] === 'x') {
            cntXOne++;
            break;
          }
          break;
        case 2:
          cntTwo++;
          if (word['userlvl'] === 'v') {
            cntVTwo++;
            break;
          }
          if (word['userlvl'] === 'a') {
            cntATwo++;
            break;
          }
          if (word['userlvl'] === 'n') {
            cntNTwo++;
            break;
          }
          if (word['userlvl'] === 'h') {
            cntHTwo++;
            break;
          }
          if (word['userlvl'] === 'f') {
            cntFTwo++;
            break;
          }
          if (word['userlvl'] === 't') {
            cntTTwo++;
            break;
          }
          if (word['userlvl'] === 'x') {
            cntXTwo++;
            break;
          }
          break;
      }
    });

    setSelectZero(cntZero);
    setSelectOne(cntOne);
    setSelectTwo(cntTwo);
    setCountVZero(cntVZero);
    setCountVOne(cntVOne);
    setCountVTwo(cntVTwo);
    setCountAZero(cntAZero);
    setCountAOne(cntAOne);
    setCountATwo(cntATwo);
    setCountNZero(cntNZero);
    setCountNOne(cntNOne);
    setCountNTwo(cntNTwo);
    setCountHZero(cntHZero);
    setCountHOne(cntHOne);
    setCountHTwo(cntHTwo);
    setCountFZero(cntFZero);
    setCountFOne(cntFOne);
    setCountFTwo(cntFTwo);
    setCountTZero(cntTZero);
    setCountTOne(cntTOne);
    setCountTTwo(cntTTwo);
    setCountXZero(cntXZero);
    setCountXOne(cntXOne);
    setCountXTwo(cntXTwo);
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
              {range > 1 ? (
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
                <TxtItalic>
                  {data[451][lngfrst]} {data[1966][lngfrst]}
                </TxtItalic>
              )}
            </TxtNormal>
          </View>
        </View>
        <View
          style={{
            height: '28%',
            justifyContent: 'space-evenly',
            overflow: 'hidden',
          }}>
          {range > 1 ? (
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.9)')}
              delayPressIn={0}
              onPress={() => setWordSelector(true)}>
              <View
                style={{
                  width: '90%',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  overflow: 'hidden',
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
                      color:
                        words[index][lngfrst] === lngfrst
                          ? Colors.base
                          : Colors.surround,
                      fontSize: Dimensions.get('window').height / 28,
                    }}>
                    {range > 0 ? (
                      words[index][lngfrst]
                    ) : (
                      <TxtItalic>
                        {' '}
                        {data[451][lngfrst]} {data[1966][lngfrst]}
                      </TxtItalic>
                    )}
                  </TxtLabel>
                  <Ionicons name='ios-list' size={30} color={Colors.inactive} />
                </View>
              </View>
            </TouchableNativeFeedback>
          ) : (
            <></>
          )}
        </View>
        <View style={{ height: '12%' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              width: '80%',
            }}>
            <Buttons.ButtonBox
              action={() => {
                Speech.speak(words[index][lngscnd], {
                  language: lngscnd,
                  voice: Speech.VoiceQuality.Enhanced,
                  pitch: 1.0,
                  rate: 0.6,
                });
              }}
              touchColor={Colors.accent}>
              <Ionicons
                name='ios-megaphone'
                size={18}
                color={Colors.surround}
              />
            </Buttons.ButtonBox>
            <Buttons.ButtonBox
              action={() => {
                setShow(0);
              }}
              bodyStyle={
                show === 0
                  ? {
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
              <Ionicons name='md-eye-off' size={18} />
            </Buttons.ButtonBox>

            <Buttons.ButtonBox
              action={() => {
                setShow(1);
              }}
              bodyStyle={
                show === 1
                  ? {
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
            keyExtractor={(item) => item['id' + lngfrst].toString()}
            initialNumToRender={20}
            getItemLayout={(data, index) => ({
              length: 52.5,
              offset: 52.5 * index,
              index,
            })}
            initialScrollIndex={index}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    marginBottom: 10,
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Buttons.ButtonBox
                    bodyStyle={
                      words[index][lngfrst] === item[lngfrst]
                        ? {
                            width: Dimensions.get('window').width / 1.5,
                            height: Dimensions.get('window').height / 18,
                            borderColor: Colors.base,
                            backgroundColor:
                              item[lngfrst] === lngfrst
                                ? Colors.base
                                : Colors.inactive,
                            marginBottom: 7,
                          }
                        : {
                            width: Dimensions.get('window').width / 1.5,
                            height: Dimensions.get('window').height / 18,
                            borderColor: Colors.base,
                            marginBottom: 7,
                          }
                    }
                    action={() => {
                      setSelectorIndex(item[lngfrst]);
                      setWordSelector(false);
                    }}
                    insideStyle={{
                      color:
                        item[lngfrst] === lngfrst
                          ? Colors.base
                          : Colors.surround,
                      fontSize: Dimensions.get('window').height / 28,
                    }}>
                    {item[lngfrst]}
                  </Buttons.ButtonBox>
                </View>
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

  return (
    <ScreenFrame>
      <View
        style={{
          height: '20%',
          justifyContent: 'space-between',
          borderWidth: 0.5,
          borderColor: Colors.inactive,
          borderStyle: 'dotted',
          borderRadius: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '95%',
            alignSelf: 'center',
          }}>
          <ComboAround>
            <Buttons.ButtonBox
              action={() => {
                setLevelV((prev) => !prev);
                // counter();
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
                // counter();
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
                // counter();
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
                // counter();
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
                // counter();
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
                // counter();
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
                // counter();
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
          }}>
          <View
            style={{
              width: '80%',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ComboAround>
              <View
                style={{ width: Dimensions.get('window').width / 15 }}></View>
            </ComboAround>

            <ComboAround>
              <Buttons.ButtonCircle
                touchColor={
                  words[index]['st' + lngscnd] === 0 ? null : Colors.accent
                }
                action={() => {
                  handleSelect(0);
                }}
                bodyStyle={
                  select === 0 && selectZero > 0
                    ? {
                        borderColor: Colors.base,
                      }
                    : { borderColor: Colors.inactive }
                }
                insideStyle={
                  select === 0 && selectZero > 0
                    ? {
                        color: Colors.accent,
                        fontSize: Dimensions.get('window').width / 30,
                      }
                    : {
                        color: Colors.surround,
                        fontSize: Dimensions.get('window').width / 30,
                      }
                }>
                <Ionicons
                  name='ios-infinite'
                  size={18}
                  color={
                    select === 0 && selectZero > 0
                      ? Colors.accent
                      : Colors.inactive
                  }
                />
                {'\n'}
                {selectZero}
              </Buttons.ButtonCircle>
            </ComboAround>

            <ComboAround>
              <Buttons.ButtonCircle
                touchColor={
                  words[index]['st' + lngscnd] === 1 ? null : Colors.backSecond
                }
                action={() => {
                  handleSelect(1);
                }}
                bodyStyle={
                  select === 1 && selectOne > 0
                    ? {
                        borderColor: Colors.base,
                      }
                    : { borderColor: Colors.inactive }
                }
                insideStyle={
                  select === 1 && selectOne > 0
                    ? {
                        color: Colors.backSecond,
                        fontSize: Dimensions.get('window').width / 30,
                      }
                    : {
                        color: Colors.surround,
                        fontSize: Dimensions.get('window').width / 30,
                      }
                }>
                <Ionicons
                  name='ios-attach'
                  size={18}
                  color={
                    select === 1 && selectOne > 0
                      ? Colors.backSecond
                      : Colors.inactive
                  }
                />
                {'\n'}
                {selectOne}
              </Buttons.ButtonCircle>
            </ComboAround>

            <ComboAround>
              <Buttons.ButtonCircle
                touchColor={
                  words[index]['st' + lngscnd] === 2 ? null : Colors.backPrimary
                }
                action={() => {
                  handleSelect(2);
                }}
                bodyStyle={
                  select === 2 && selectTwo > 0
                    ? {
                        borderColor: Colors.base,
                      }
                    : { borderColor: Colors.inactive }
                }
                insideStyle={
                  select === 2 && selectTwo > 0
                    ? {
                        color: Colors.backPrimary,
                        fontSize: Dimensions.get('window').width / 30,
                      }
                    : {
                        color: Colors.surround,
                        fontSize: Dimensions.get('window').width / 30,
                      }
                }>
                <Ionicons
                  name='md-checkmark'
                  size={18}
                  color={
                    select === 2 && selectOne > 0
                      ? Colors.backPrimary
                      : Colors.inactive
                  }
                />
                {'\n'}
                {selectTwo}
              </Buttons.ButtonCircle>
            </ComboAround>
            <ComboAround>
              <View
                style={{ width: Dimensions.get('window').width / 15 }}></View>
            </ComboAround>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '95%',
          height: '47%',
          justifyContent: 'space-evenly',
          borderWidth: 0.5,
          borderColor: Colors.inactive,
          borderStyle: 'dotted',
          borderRadius: 25,
        }}>
        {wordSelector ? <WordSelectorWindow /> : <WordShowWindow />}
      </View>

      <View
        style={{
          height: '25%',
          width: '95%',
          justifyContent: 'space-between',
          borderWidth: 0.5,
          borderColor: Colors.inactive,
          borderStyle: 'dotted',
          borderRadius: 25,
        }}>
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              width: '65%',

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Buttons.ButtonCircle
              action={() => {
                handleStatus(0);
              }}
              touchColor={
                words[index]['st' + lngscnd] === 0 ? null : Colors.accent
              }
              bodyStyle={
                words[index]['st' + lngscnd] === 0
                  ? { borderColor: Colors.base }
                  : { borderColor: Colors.inactive }
              }>
              <Ionicons
                name='ios-add'
                size={20}
                color={
                  words[index]['st' + lngscnd] === 0
                    ? Colors.base
                    : Colors.surround
                }
              />{' '}
              <Ionicons
                name='ios-infinite'
                size={25}
                color={
                  words[index]['st' + lngscnd] === 0
                    ? Colors.base
                    : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
            <Buttons.ButtonCircle
              action={() => {
                handleStatus(1);
              }}
              touchColor={
                words[index]['st' + lngscnd] === 1 ? null : Colors.backSecond
              }
              bodyStyle={
                words[index]['st' + lngscnd] === 1
                  ? { borderColor: Colors.base }
                  : { borderColor: Colors.inactive }
              }>
              <Ionicons
                name='ios-add'
                size={20}
                color={
                  words[index]['st' + lngscnd] === 1
                    ? Colors.base
                    : Colors.surround
                }
              />{' '}
              <Ionicons
                name='ios-attach'
                size={25}
                color={
                  words[index]['st' + lngscnd] === 1
                    ? Colors.base
                    : Colors.surround
                }
              />
            </Buttons.ButtonCircle>
            <Buttons.ButtonCircle
              action={() => {
                handleStatus(2);
              }}
              touchColor={
                words[index]['st' + lngscnd] === 2 ? null : Colors.backPrimary
              }
              bodyStyle={
                words[index]['st' + lngscnd] === 2
                  ? { borderColor: Colors.base }
                  : { borderColor: Colors.inactive }
              }>
              <Ionicons
                name='ios-add'
                size={20}
                color={
                  words[index]['st' + lngscnd] === 2
                    ? Colors.base
                    : Colors.surround
                }
              />{' '}
              <Ionicons
                name='md-checkmark'
                size={25}
                color={
                  words[index]['st' + lngscnd] === 2
                    ? Colors.base
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
            width: '80%',
          }}>
          <Buttons.ButtonCircle
            touchColor={
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
                ? Colors.backPrimary
                : null
            }
            action={() => {
              handleIndex(-Math.floor(range / 7));
            }}>
            <Ionicons name='md-rewind' size={30} color={Colors.surround} />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            touchColor={
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
                ? Colors.backPrimary
                : null
            }
            action={() => {
              handleIndex(-1);
            }}>
            <Ionicons
              name='md-arrow-dropleft'
              size={30}
              color={Colors.surround}
            />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            touchColor={
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
                ? Colors.backPrimary
                : null
            }
            action={() => {
              setIndex(Math.floor(Math.random() * (range - 1)));
            }}>
            <Ionicons name='ios-color-wand' size={35} color={Colors.surround} />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            touchColor={
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
                ? Colors.backPrimary
                : null
            }
            action={() => {
              handleIndex(1);
            }}>
            <Ionicons
              name='md-arrow-dropright'
              size={30}
              color={Colors.surround}
            />
          </Buttons.ButtonCircle>

          <Buttons.ButtonCircle
            touchColor={
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
                ? Colors.backPrimary
                : null
            }
            action={() => {
              handleIndex(Math.floor(range / 7));
            }}>
            <Ionicons name='md-fastforward' size={30} color={Colors.surround} />
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Instructions'
          iconName={'md-help'}
          onPress={() => {
            navData.navigation.navigate('Instructions');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MasterScreen;
