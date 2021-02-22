import React from 'react';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { images, icons, SIZES } from '../../../constants';
import HeaderContent from './HeaderContent';
import TrendingList from './TrendingList';

const Header = ({trending}) => {
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 290,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
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
  })

  return (
    <View style={styles.header}>
      <ImageBackground
        source={images.banner}
        style={styles.imgBg}
      >
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={styles.headerBtn}
            onPresee={() => console.log('on press')}
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
  )
}

export default Header;
