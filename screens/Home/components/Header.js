import React from 'react';
import {
  View, StyleSheet, ImageBackground, Image, TouchableOpacity
} from 'react-native';
import { images, icons, SIZES } from '../../../constants';
import { shadow } from '../../../styles/VictoryCustomTheme';

import HeaderContent from './HeaderContent';
import TrendingList from './TrendingList';

const Header = ({ trending }) => {
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 290,
      ...shadow,
    },
    imgBg: {
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center'
    },
    headerBar: {
      marginTop: SIZES.padding * 2,
      width: '100%',
      alignItems: 'flex-end',
      paddingHorizontal: SIZES.padding
    },
    headerBtn: {
      width: 35,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      flex: 1,
      resizeMode: 'contain'
    },
  });

  return (
    <View style={styles.header}>
      <ImageBackground
        source={images.banner}
        style={styles.imgBg}
      >
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={styles.headerBtn}
            onPresee={() => {}}
          >
            <Image
              source={icons.notification_white}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <HeaderContent />
        <TrendingList trending={trending} />
      </ImageBackground>
    </View>
  );
};

export default Header;
