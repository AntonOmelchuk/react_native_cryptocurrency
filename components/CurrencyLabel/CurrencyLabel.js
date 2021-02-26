import React from 'react';
import {
  View, Text, Image, StyleSheet
} from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants';

const CurrencyLabel = ({ image, currency, code }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    image: {
      width: 25,
      height: 25,
      marginTop: 5,
      resizeMode: 'cover'
    },
    info: {
      marginLeft: SIZES.base,
    },
    h3: {
      ...FONTS.h3,
    },
    code: {
      color: COLORS.gray,
      ...FONTS.body4,
    }
  });
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.info}>
        <Text style={styles.h3}>{currency}</Text>
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  );
};

export default CurrencyLabel;
