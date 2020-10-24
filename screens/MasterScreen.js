import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import ScreenFrame from '../components/UI/ScreenFrame';
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
import CustomHeaderButton from '../components/UI/CustomHeaderButton';
import * as Languages from '../data/languages';
import * as Buttons from './../components/UI/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import * as wordActions from '../store/actions/words';
import WordShow from '../components/UI/WordShow';
import { Ionicons } from '@expo/vector-icons';

const MasterScreen = () => {
  const [levelA, setLevelA] = useState(true);
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

  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Master;
  const txtscnd = Languages[lngscnd].Master;

  const data = useSelector((state) => state.words.words);

  const dispatch = useDispatch();

  const words = data.filter(
    (word) =>
      word['st' + lngscnd] === select &&
      ((word.userlvl === 'a' && levelA) ||
        (word.userlvl === 'n' && levelN) ||
        (word.userlvl === 'v' && levelV) ||
        (word.userlvl === 'h' && levelH) ||
        (word.userlvl === 'f' && levelF) ||
        (word.userlvl === 't' && levelT) ||
        (word.userlvl === 'x' && levelX) ||
        word.userlvl === 'l')
  );
  useEffect(() => {
    console.log('effect');
    setRange(words.length);
    setIndex(0);
  }, [
    range,
    setRange,
    setSelect,
    select,
    levelA,
    levelN,
    levelV,
    levelH,
    levelF,
    levelT,
    levelX,
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
      }
    }
  };

  //* render **************************************
  return (
    <ScreenFrame>
      {/* <View style={{ alignItems: 'center', margin: 10 }}>
        <TxtHeader>W|O|R|D</TxtHeader>
      </View> */}
      {/* <CardFrame style={{ margin: 15 }}>
        <TxtLabel>{txtfrst.title}</TxtLabel>
      </CardFrame> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          title='Verbs'
          onPress={() => {
            setLevelV((prev) => !prev);
            // setIndex(0);
            // setRange(0);
          }}
          color={levelV ? Colors.surround : Colors.base}
        />

        <Button
          title='nouns'
          onPress={() => {
            setLevelN((prev) => !prev);
            // setIndex(0);
            // setRange(0);
          }}
          color={levelN ? Colors.surround : Colors.base}
        />
        <Button
          title='adjct'
          onPress={() => {
            setLevelA((prev) => !prev);
            // setIndex(0);
            // setRange(0);
          }}
          color={levelA ? Colors.surround : Colors.base}
        />
        <Button
          title='100'
          onPress={() => {
            setLevelH((prev) => !prev);
            // setIndex(0);
            // setRange(0);
          }}
          color={levelH ? Colors.surround : Colors.base}
        />
        <Button
          title='500'
          onPress={() => {
            setLevelF((prev) => !prev);
            // setIndex(0);
            // setRange(0);
          }}
          color={levelF ? Colors.surround : Colors.base}
        />
        <Button
          title='1000'
          onPress={() => {
            setLevelT((prev) => !prev);
            // setIndex(0);
            // setRange(0);
          }}
          color={levelT ? Colors.surround : Colors.base}
        />
        <Button
          title='3000'
          onPress={() => {
            setLevelX((prev) => !prev);
            // setIndex(0);
            // setRange(0);
          }}
          color={levelX ? Colors.surround : Colors.base}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            marginTop: 20,
            width: '50%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Buttons.ButtonNormal
            action={() => {
              setSelect(0);
            }}>
            {select === 0 ? (
              <TxtButton style={{ color: Colors.accent }}>kuk</TxtButton>
            ) : (
              <TxtButton style={{ color: Colors.base }}>kuk</TxtButton>
            )}
          </Buttons.ButtonNormal>
          <Buttons.ButtonNormal
            action={() => {
              setSelect(1);
            }}>
            {select === 1 ? (
              <TxtButton style={{ color: Colors.backSecond }}>kuk</TxtButton>
            ) : (
              <TxtButton style={{ color: Colors.base }}>kuk</TxtButton>
            )}
          </Buttons.ButtonNormal>
          <Buttons.ButtonNormal
            action={() => {
              setSelect(2);
              console.log('set');
            }}>
            {select === 2 ? (
              <TxtButton style={{ color: Colors.backPrimary }}>kuk</TxtButton>
            ) : (
              <TxtButton style={{ color: Colors.base }}>kuk</TxtButton>
            )}
          </Buttons.ButtonNormal>
        </View>
      </View>

      <View
        style={{
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TxtNormal>
          {range > 0 ? (
            <WordShow word={words[index][lngscnd]} show={show} key={index} />
          ) : (
            <TxtItalic>{txtscnd.noRange}</TxtItalic>
          )}
        </TxtNormal>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            width: '50%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Buttons.ButtonNormal action={() => handleStatus(0)}>
            <Ionicons
              name='ios-infinite'
              size={40}
              color={
                words[index]['st' + lngscnd] === 0 ? Colors.accent : Colors.base
              }
            />
          </Buttons.ButtonNormal>
          <Buttons.ButtonNormal action={() => handleStatus(1)}>
            <Ionicons
              name='ios-attach'
              size={40}
              color={
                words[index]['st' + lngscnd] === 1
                  ? Colors.backSecond
                  : Colors.base
              }
            />
          </Buttons.ButtonNormal>
          <Buttons.ButtonNormal action={() => handleStatus(2)}>
            <Ionicons
              name='ios-checkmark'
              size={40}
              color={
                words[index]['st' + lngscnd] === 2
                  ? Colors.backPrimary
                  : Colors.base
              }
            />
          </Buttons.ButtonNormal>
        </View>
      </View>
      <CardFrame style={{ margin: 25, alignItems: 'center' }}>
        <TxtButton>{txtfrst.show}</TxtButton>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            title=' ??? '
            onPress={() => {
              setShow(0);
            }}
            color={show === 0 ? Colors.surround : Colors.base}
          />
          <Button
            title='_ _ _'
            onPress={() => {
              setShow(1);
            }}
            color={show === 1 ? Colors.surround : Colors.base}
          />
          <Button
            title='_ _ X'
            onPress={() => {
              setShow(2);
            }}
            color={show === 2 ? Colors.surround : Colors.base}
          />
          <Button
            title='X _ X'
            onPress={() => {
              setShow(3);
            }}
            color={show === 3 ? Colors.surround : Colors.base}
          />
          <Button
            title='X X X'
            onPress={() => {
              setShow(4);
            }}
            color={show === 4 ? Colors.surround : Colors.base}
          />
        </View>
      </CardFrame>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          title='|<'
          onPress={() => {
            setIndex(0);
          }}
          color={Colors.base}
        />
        <Button
          title='<100'
          onPress={() => {
            handleIndex(-100);
          }}
          color={Colors.base}
        />
        <Button
          title='<10'
          onPress={() => {
            handleIndex(-10);
          }}
          color={Colors.base}
        />
        <Button
          title='<1'
          onPress={() => {
            handleIndex(-1);
          }}
          color={Colors.base}
        />
        <Button
          title='| |'
          onPress={() => {
            setIndex(Math.floor(range / 2));
          }}
          color={Colors.base}
        />
        <Button
          title='1>'
          onPress={() => {
            handleIndex(1);
          }}
          color={Colors.base}
        />
        <Button
          title='10>'
          onPress={() => {
            handleIndex(10);
          }}
          color={Colors.base}
        />
        <Button
          title='100>'
          onPress={() => {
            handleIndex(100);
          }}
          color={Colors.base}
        />
        <Button
          title='>|'
          onPress={() => {
            setIndex(range - 1);
          }}
          color={Colors.base}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TxtItalic>
          {txtfrst.index}: {index + 1} {txtfrst.range}: {range}
        </TxtItalic>

        <TxtLabel style={{ margin: 20 }}>
          {range > 0 ? (
            words[index][lngfrst]
          ) : (
            <TxtItalic>{txtfrst.noRange}</TxtItalic>
          )}
        </TxtLabel>
      </View>
    </ScreenFrame>
  );
};

export const screenOptions = (navData) => {
  const lngfrst = useSelector((state) => state.language.lngfrst);
  const txtfrst = Languages[lngfrst].Master;
  return {
    headerTitle: `${txtfrst.header}`,
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
