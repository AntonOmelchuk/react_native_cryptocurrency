import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';

const TrendingItem = ({ value }) => {
  const { item, index } = value;
  const {
    code, image, currency, amount, changes, type
  } = item;

  const styles = StyleSheet.create({
    container: {
      width: 180,
      paddingVertical: SIZES.padding,
      paddingHorizontal: SIZES.padding,
      marginLeft: index === 0 ? SIZES.padding : 0,
      marginRight: SIZES.radius,
      borderRadius: 10,
      backgroundColor: COLORS.white
    },
    row: {
      flexDirection: 'row'
    },
    image: {
      marginTop: 5,
      width: 25,
      height: 25
    },
    info: {
      marginLeft: SIZES.base
    },
    h2: {
      ...FONTS.h2
    },
    code: {
      color: COLORS.gray,
      ...FONTS.body3
    },
    footer: {
      marginTop: SIZES.radius
    },
    changes: {
      color: type === 'I' ? COLORS.green : COLORS.red,
      ...FONTS.h3
    }
  });

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('CryptoDetail', {
        currency: item,
      })}
    >
      <View style={styles.row}>
        <View>
          <Image
            source={image}
            style={styles.image}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.h2}>{currency}</Text>
          <Text style={styles.code}>{code}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.h2}>
          $
          {amount}
        </Text>
        <Text style={styles.changes}>{changes}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingItem;
