import { useSelector } from 'react-redux';

const theme = useSelector((state) => state.theme.theme);

export default theme
  ? {
      backPrimary: '#a4c665',
      textPrimary: '#ffffff',
      backSecond: '#e2d1ab',
      surround: '#808080',
      accent: 'brown',
      base: '#000000',
      inactive: '#404040',
    }
  : {
      backPrimary: '#a4c665',
      textPrimary: '#ffffff',
      backSecond: '#e2d1ab',
      surround: '#808080',
      accent: 'brown',
      base: '#000000',
      inactive: '#404040',
    };
