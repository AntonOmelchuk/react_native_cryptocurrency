import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  SIZES, COLORS, FONTS, dummyData
} from '../../../constants';

const HeaderContent = () => {
  const styles = StyleSheet.create({
    content: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    portfolioText: {
      color: COLORS.white,
      ...FONTS.h3
    },
    balanceText: {
      marginTop: SIZES.base,
      color: COLORS.white,
      ...FONTS.h1
    },
    changesText: {
      color: COLORS.white,
      ...FONTS.body5
    },
  });

  return (
    <View style={styles.content}>
      <Text style={styles.portfolioText}>Your Portfolio Balance</Text>
      <Text style={styles.balanceText}>
        $
        {dummyData.portfolio.balance}
      </Text>
      <Text style={styles.changesText}>
        {dummyData.portfolio.changes}
        {' '}
        Last 24 hours
      </Text>
    </View>
  );
};

export default HeaderContent;
