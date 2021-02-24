import React from 'react';
import {
  View, Text, StyleSheet, FlatList
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { shadow } from '../../../styles/VictoryCustomTheme';
import TransactionItem from './TransactionItem';

const TransactionHistory = ({ transactionHistory }) => {
  const stlyes = StyleSheet.create({
    container: {
      marginTop: SIZES.padding,
      marginHorizontal: SIZES.padding,
      padding: 20,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.white,
      ...shadow
    },
    title: {
      ...FONTS.h2
    },
    list: {
      marginTop: SIZES.radius,
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: COLORS.lightGray,
    }
  });

  return (
    <View style={stlyes.container}>
      <Text style={stlyes.title}>
        Transaction History
      </Text>
      <FlatList
        contentContainerStyle={stlyes.list}
        scrollEnabled={false}
        data={transactionHistory}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <TransactionItem item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={stlyes.separator} />}
      />
    </View>
  );
};

export default TransactionHistory;
