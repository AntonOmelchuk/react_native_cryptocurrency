import React from 'react';
import {
  Image, Text, StyleSheet, TouchableOpacity, View
} from 'react-native';
import {
  COLORS, FONTS, icons, SIZES
} from '../../constants';

const TransactionItem = ({ item }) => {
  const {
    description, date, amount, currency, type
  } = item;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignContent: 'center',
      paddingVertical: SIZES.base,
    },
    icon: {
      width: 30,
      height: 30,
      tintColor: COLORS.primary,
    },
    content: {
      flex: 1,
      marginLeft: SIZES.radius,
    },
    h3: {
      ...FONTS.h3,
    },
    date: {
      color: COLORS.gray,
      ...FONTS.body4,
    },
    rightTextBlock: {
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
    },
    rigthText: {
      color: type === 'B' ? COLORS.green : COLORS.black,
      ...FONTS.h3,
    },
    rightIcon: {
      width: 20,
      height: 20,
      tintColor: COLORS.gray,
    }
  });
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={icons.transaction}
        style={styles.icon}
      />
      <View style={styles.content}>
        <Text style={styles.h3}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.rightTextBlock}>
        <Text style={styles.rigthText}>
          {amount}
          {' '}
          {currency}
        </Text>
        <Image
          source={icons.rightArrow}
          style={styles.rightIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
