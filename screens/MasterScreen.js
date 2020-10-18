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
import { useSelector } from 'react-redux';
import WordShow from '../components/UI/WordShow';

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

  const lngfrst = useSelector((state) => state.language.lngfrst);
  const lngscnd = useSelector((state) => state.language.lngscnd);
  const txtfrst = Languages[lngfrst].Master;
  const txtscnd = Languages[lngscnd].Master;

  const data = useSelector((state) => state.words.words);

  const words = data.filter(
    (word) =>
      (word.userlvl === 'a' && levelA) ||
      (word.userlvl === 'n' && levelN) ||
      (word.userlvl === 'v' && levelV) ||
      (word.userlvl === 'h' && levelH) ||
      (word.userlvl === 'f' && levelF) ||
      (word.userlvl === 't' && levelT) ||
      (word.userlvl === 'x' && levelX) ||
      word.iden === 2999
  );

  useEffect(() => {
    setRange(words.length);
  }, [words, range]);

  const handleIndex = (jump) => {
    console.log('r: ' + range + ' i: ' + index);
    if (index + jump >= range) {
      setIndex(range - 1);
    } else if (index + jump < 0) {
      setIndex(0);
    } else {
      setIndex(index + jump);
    }
  };

  return (
    <ScreenFrame>
      {/* <View style={{ alignItems: 'center', margin: 10 }}>
        <TxtHeader>W|O|R|D</TxtHeader>
      </View> */}
      <CardFrame style={{ margin: 15 }}>
        <TxtLabel>{txtfrst.title}</TxtLabel>
      </CardFrame>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          title='Verbs'
          onPress={() => {
            setLevelV((prev) => !prev);
            setIndex(0);
            setRange(0);
          }}
          color={levelV ? Colors.surround : Colors.base}
        />

        <Button
          title='nouns'
          onPress={() => {
            setLevelN((prev) => !prev);
            setIndex(0);
            setRange(0);
          }}
          color={levelN ? Colors.surround : Colors.base}
        />
        <Button
          title='adjct'
          onPress={() => {
            setLevelA((prev) => !prev);
            setIndex(0);
            setRange(0);
          }}
          color={levelA ? Colors.surround : Colors.base}
        />
        <Button
          title='100'
          onPress={() => {
            setLevelH((prev) => !prev);
            setIndex(0);
            setRange(0);
          }}
          color={levelH ? Colors.surround : Colors.base}
        />
        <Button
          title='500'
          onPress={() => {
            setLevelF((prev) => !prev);
            setIndex(0);
            setRange(0);
          }}
          color={levelF ? Colors.surround : Colors.base}
        />
        <Button
          title='1000'
          onPress={() => {
            setLevelT((prev) => !prev);
            setIndex(0);
            setRange(0);
          }}
          color={levelT ? Colors.surround : Colors.base}
        />
        <Button
          title='3000'
          onPress={() => {
            setLevelX((prev) => !prev);
            setIndex(0);
            setRange(0);
          }}
          color={levelX ? Colors.surround : Colors.base}
        />
      </View>
      <View
        style={{
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TxtNormal>
          {range > 0 ? (
            <WordShow word={words[index][lngscnd]} show={show} />
          ) : (
            <TxtItalic>{txtscnd.noRange}</TxtItalic>
          )}
        </TxtNormal>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          title='|<'
          onPress={() => {
            setIndex(0);
          }}
          color={Colors.base}
        />

        <Button
          title='<---'
          onPress={() => {
            handleIndex(-3);
          }}
          color={Colors.base}
        />
        <Button
          title='<-'
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
          title='->'
          onPress={() => {
            handleIndex(1);
          }}
          color={Colors.base}
        />
        <Button
          title='--->'
          onPress={() => {
            handleIndex(3);
          }}
          color={Colors.base}
        />
        <Button
          title='>|'
          onPress={() => {
            setIndex(range);
          }}
          color={Colors.base}
        />
      </View>
      <View
        style={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TxtItalic>
          {txtfrst.index}: {index + 1} {txtfrst.range}: {range}
        </TxtItalic>
        <TxtNormal>
          {range > 0 ? (
            words[index][lngfrst]
          ) : (
            <TxtItalic>{txtfrst.noRange}</TxtItalic>
          )}
        </TxtNormal>
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
