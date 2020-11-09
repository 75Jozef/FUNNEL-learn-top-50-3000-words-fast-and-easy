import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';

import Colors from './../../constants/Colors';

const CustomHeaderButton = (props) => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.backSecond}
    />
  );
};

export default CustomHeaderButton;
