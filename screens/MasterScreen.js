import React, { useState, useEffect } from 'react';
import { View, Button, Dimensions } from 'react-native';
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
import Fonts from '../constants/Fonts';
import { setEnabled } from 'react-native/Libraries/Performance/Systrace';

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
  const [status, setStatus] = useState(false);

  const [sizeIconRewind, setSizeIconRewind] = useState(30);
  const [sizeIconBack, setSizeIconBack] = useState(30);
  const [sizeIconRandom, setSizeIconRandom] = useState(40);
  const [sizeIconNext, setSizeIconNext] = useState(30);
  const [sizeIconFastF, setSizeIconFastF] = useState(30);

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

  useEffect(() => {
    setRange(words.length);
    setIndex(0);
    counter();
  }, [
    status,
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
        setStatus((prev) => !prev);

        function sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        }
        async function delayedConfirmation(status) {
          switch (status) {
            case 0: {
              setSizeIconInfinity(50);
              await sleep(300);
              setSizeIconInfinity(35);
              return;
            }
            case 1: {
              setSizeIconAttach(50);
              await sleep(300);
              setSizeIconAttach(35);
              return;
            }
            case 2: {
              setSizeIconCheck(50);
              await sleep(300);
              setSizeIconCheck(35);
              return;
            }
          }
        }

        delayedConfirmation(status);
        counter();
      }
    }
  };

  const handleSelect = (select) => {
    setSelect(select);
    setIndex(0);
  };

  const counter = () => {
    const countZero = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 0 ? (counter += 1) : counter,
      0
    );

    setSelectZero(countZero);

    const countOne = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 1 ? (counter += 1) : counter,
      0
    );
    setSelectOne(countOne);

    const countTwo = data.reduce(
      (counter, word) =>
        word['st' + lngscnd] === 2 ? (counter += 1) : counter,
      0
    );
    setSelectTwo(countTwo);
  };

  const animeIcon = (icon) => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function delayedConfirmation(icon) {
      switch (icon) {
        case 'Rewind': {
          setSizeIconRewind(50);
          await sleep(300);
          setSizeIconRewind(35);
          return;
        }
        case 'Back': {
          setSizeIconBack(50);
          await sleep(300);
          setSizeIconBack(35);
          return;
        }
        case 'Random': {
          setSizeIconRandom(50);
          await sleep(300);
          setSizeIconRandom(35);
          return;
        }
        case 'Next': {
          setSizeIconNext(50);
          await sleep(300);
          setSizeIconNext(35);
          return;
        }
        case 'FastF': {
          setSizeIconFastF(50);
          await sleep(300);
          setSizeIconFastF(35);
          return;
        }
      }
    }
    delayedConfirmation(icon);
  };

  //* render **************************************
  return (
    <ScreenFrame>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'space-between',
          width: '70%',
          alignSelf: 'center',
        }}>
        <Buttons.ButtonBox
          action={() => {
            setLevelV((prev) => !prev);
            setIndex(0);
          }}
          bodyStyle={
            levelV
              ? {
                  borderWidth: 3,
                  borderRadius: 25,
                }
              : { backgroundColor: Colors.base }
          }
          insideStyle={
            levelV
              ? {
                  color: Colors.textPrimary,
                }
              : null
          }>
          50v
        </Buttons.ButtonBox>

        <Buttons.ButtonBox
          action={() => {
            setLevelN((prev) => !prev);
            setIndex(0);
          }}
          bodyStyle={
            levelN
              ? { borderWidth: 3, borderRadius: 25 }
              : { backgroundColor: Colors.base }
          }
          insideStyle={
            levelN
              ? {
                  color: Colors.textPrimary,
                }
              : null
          }>
          50n
        </Buttons.ButtonBox>
        <Buttons.ButtonBox
          action={() => {
            setLevelA((prev) => !prev);
            setIndex(0);
          }}
          bodyStyle={
            levelA
              ? { borderWidth: 3, borderRadius: 25 }
              : { backgroundColor: Colors.base }
          }
          insideStyle={
            levelA
              ? {
                  color: Colors.textPrimary,
                }
              : null
          }>
          50a
        </Buttons.ButtonBox>
        <Buttons.ButtonBox
          action={() => {
            setLevelH((prev) => !prev);
            setIndex(0);
          }}
          bodyStyle={
            levelH
              ? { borderWidth: 3, borderRadius: 25 }
              : { backgroundColor: Colors.base }
          }
          insideStyle={
            levelH
              ? {
                  color: Colors.textPrimary,
                }
              : null
          }>
          100
        </Buttons.ButtonBox>
        <Buttons.ButtonBox
          action={() => {
            setLevelF((prev) => !prev);
            setIndex(0);
          }}
          bodyStyle={
            levelF
              ? { borderWidth: 3, borderRadius: 25 }
              : { backgroundColor: Colors.base }
          }
          insideStyle={
            levelF
              ? {
                  color: Colors.textPrimary,
                }
              : null
          }>
          500
        </Buttons.ButtonBox>
        <Buttons.ButtonBox
          action={() => {
            setLevelT((prev) => !prev);
            setIndex(0);
          }}
          bodyStyle={
            levelT
              ? { borderWidth: 3, borderRadius: 25 }
              : { backgroundColor: Colors.base }
          }
          insideStyle={
            levelT
              ? {
                  color: Colors.textPrimary,
                }
              : null
          }>
          1000
        </Buttons.ButtonBox>
        <Buttons.ButtonBox
          action={() => {
            setLevelX((prev) => !prev);
            setIndex(0);
          }}
          bodyStyle={
            levelX
              ? { borderWidth: 3, borderRadius: 25 }
              : { backgroundColor: Colors.base }
          }
          insideStyle={
            levelX
              ? {
                  color: Colors.textPrimary,
                }
              : null
          }>
          3000
        </Buttons.ButtonBox>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            marginTop: 20,
            marginBottom: 10,
            width: '60%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Buttons.ButtonCircle
            action={() => {
              handleSelect(0);
            }}
            bodyStyle={
              select === 0
                ? {
                    width: 80,
                    height: 50,
                    borderRadius: 25,
                    borderColor: Colors.accent,
                    borderWidth: 3,
                  }
                : { borderColor: Colors.accent, borderWidth: 1 }
            }
            insideStyle={
              select === 0
                ? {
                    color: Colors.accent,
                    fontSize: Dimensions.get('window').height / 30,
                    fontFamily: Fonts.bold,
                  }
                : {
                    color: Colors.surround,
                  }
            }>
            {selectZero}
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              handleSelect(1);
            }}
            bodyStyle={
              select === 1
                ? {
                    width: 80,
                    height: 50,
                    borderRadius: 25,
                    borderColor: Colors.backSecond,
                    borderWidth: 3,
                  }
                : { borderColor: Colors.backSecond, borderWidth: 1 }
            }
            insideStyle={
              select === 1
                ? {
                    color: Colors.backSecond,
                    fontSize: Dimensions.get('window').height / 30,
                    fontFamily: Fonts.bold,
                  }
                : { color: Colors.surround }
            }>
            {selectOne}
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => {
              handleSelect(2);
            }}
            bodyStyle={
              select === 2
                ? {
                    width: 80,
                    height: 50,
                    borderRadius: 25,
                    borderColor: Colors.backPrimary,
                    borderWidth: 3,
                  }
                : { borderColor: Colors.backPrimary, borderWidth: 1 }
            }
            insideStyle={
              select === 2
                ? {
                    color: Colors.backPrimary,
                    fontSize: Dimensions.get('window').height / 30,
                    fontFamily: Fonts.bold,
                  }
                : {
                    color: Colors.surround,
                  }
            }>
            {selectTwo}
          </Buttons.ButtonCircle>
        </View>
      </View>

      <View
        style={{
          height: 80,
          marginTop: 25,
          marginBottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TxtNormal>
          {range > 0 ? (
            <WordShow
              word={words[index][lngscnd]}
              show={show}
              key={index}
              color={words[index]['st' + lngscnd]}
            />
          ) : (
            <TxtItalic>{txtscnd.noRange}</TxtItalic>
          )}
        </TxtNormal>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TxtLabel
          style={{ margin: 10, color: Colors.backSecond, fontSize: 30 }}>
          {range > 0 ? (
            words[index][lngfrst]
          ) : (
            <TxtItalic>{txtfrst.noRange}</TxtItalic>
          )}
        </TxtLabel>
      </View>

      <CardFrame style={{ margin: 20, alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Buttons.ButtonBox
            action={() => {
              setShow(0);
            }}
            bodyStyle={
              show === 0
                ? {
                    borderWidth: 3,
                    borderRadius: 25,
                  }
                : { backgroundColor: Colors.base }
            }
            insideStyle={
              show === 0
                ? {
                    color: Colors.textPrimary,
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
                    borderWidth: 3,
                    borderRadius: 25,
                  }
                : { backgroundColor: Colors.base }
            }
            insideStyle={
              show === 1
                ? {
                    color: Colors.textPrimary,
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
                    borderWidth: 3,
                    borderRadius: 25,
                  }
                : { backgroundColor: Colors.base }
            }
            insideStyle={
              show === 2
                ? {
                    color: Colors.textPrimary,
                  }
                : null
            }>
            _ _ X
          </Buttons.ButtonBox>
          <Buttons.ButtonBox
            action={() => {
              setShow(3);
            }}
            bodyStyle={
              show === 3
                ? {
                    borderWidth: 3,
                    borderRadius: 25,
                  }
                : { backgroundColor: Colors.base }
            }
            insideStyle={
              show === 3
                ? {
                    color: Colors.textPrimary,
                  }
                : null
            }>
            X _ X
          </Buttons.ButtonBox>
          <Buttons.ButtonBox
            action={() => {
              setShow(4);
            }}
            bodyStyle={
              show === 4
                ? {
                    borderWidth: 3,
                    borderRadius: 25,
                  }
                : { backgroundColor: Colors.base }
            }
            insideStyle={
              show === 4
                ? {
                    color: Colors.textPrimary,
                  }
                : null
            }>
            X X X
          </Buttons.ButtonBox>
        </View>
      </CardFrame>

      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            width: '50%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Buttons.ButtonCircle
            action={() => handleStatus(0)}
            bodyStyle={{ borderWidth: 0 }}>
            <Ionicons
              name='ios-infinite'
              size={sizeIconInfinity}
              color={
                words[index]['st' + lngscnd] === 0
                  ? Colors.accent
                  : sizeIconInfinity > 35
                  ? Colors.accent
                  : Colors.surround
              }
            />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => handleStatus(1)}
            bodyStyle={{ borderWidth: 0 }}>
            <Ionicons
              name='ios-attach'
              size={sizeIconAttach}
              color={
                words[index]['st' + lngscnd] === 1
                  ? Colors.backSecond
                  : sizeIconAttach > 35
                  ? Colors.backSecond
                  : Colors.surround
              }
            />
          </Buttons.ButtonCircle>
          <Buttons.ButtonCircle
            action={() => handleStatus(2)}
            bodyStyle={{ borderWidth: 0 }}>
            <Ionicons
              name='md-checkmark'
              size={sizeIconCheck}
              color={
                words[index]['st' + lngscnd] === 2
                  ? Colors.backPrimary
                  : sizeIconCheck > 35
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
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'space-around',
          width: Dimensions.get('window').width * 0.75,
          marginTop: 20,
        }}>
        {/* <Buttons.ButtonCircle
          action={() => {
            setIndex(0);
          }}>
          <Ionicons
            name='md-skip-backward'
            size={30}
            color={
              words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : Colors.surround
            }
          />
        </Buttons.ButtonCircle> */}

        <Buttons.ButtonCircle
          action={() => {
            handleIndex(-Math.floor(range / 7));
            animeIcon('Rewind');
          }}>
          <Ionicons
            name='md-rewind'
            size={sizeIconRewind}
            color={
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
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
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
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
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
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
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
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
              words[index]['st' + lngscnd] === 0
                ? Colors.accent
                : words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : words[index]['st' + lngscnd] === 2
                ? Colors.backPrimary
                : Colors.surround
            }
          />
        </Buttons.ButtonCircle>
        {/* <Buttons.ButtonCircle
          action={() => {
            setIndex(range - 1);
          }}
          color={Colors.base}>
          <Ionicons
            name='md-skip-forward'
            size={30}
            color={
              words[index]['st' + lngscnd] === 1
                ? Colors.backSecond
                : Colors.surround
            }
          />
        </Buttons.ButtonCircle> */}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TxtItalic>
          {/* {txtfrst.index}: {index + 1} {txtfrst.range}: {range} */}
          {index + 1} / {range}
        </TxtItalic>
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
