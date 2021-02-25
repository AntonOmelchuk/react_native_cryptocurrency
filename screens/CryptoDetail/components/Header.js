import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import {
  COLORS, FONTS, icons, SIZES
} from '../../../constants';

const Header = () => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    header: {
      paddingHorizontal: SIZES.padding,
      flexDirection: 'row',
    },
    container: {
      flex: 1,
      alignItems: 'flex-start',
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 25,
      height: 25,
      tintColor: COLORS.gray,
      resizeMode: 'contain',
    },
    iconText: {
      marginLeft: SIZES.base,
      ...FONTS.h2
    },
    section: {
      flex: 1,
      alignItems: 'flex-end'
    },
    starIcon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    }
  });

  return (
    <View stlye={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Image source={icons.backArrow} style={styles.icon} />
          <Text style={styles.iconText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity>
          <Image source={icons.star} style={styles.starIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
