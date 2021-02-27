import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  SafeAreaView
} from 'react-native';
import Header from '../../components/Header/Header';
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory';
import { COLORS, SIZES } from '../../constants';
import Trade from './components/Trade';

const Transaction = ({ route }) => {
  const { currency: currentCurrency } = route.params;
  const {
    image, currency, code, wallet, transactionHistory
  } = currentCurrency;

  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      backgroundColor: COLORS.lightGray1,
    },
    container: {
      flex: 1,
      paddingBottom: SIZES.padding
    }
  });

  return (
    <SafeAreaView style={styles.layout}>
      <Header />
      <ScrollView style={styles.container}>
        <Trade image={image} currency={currency} code={code} wallet={wallet} />
        <TransactionHistory transactionHistory={transactionHistory} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaction;
