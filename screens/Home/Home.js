import React, { useEffect } from 'react';
import {
  StyleSheet, View, ScrollView, LogBox
} from 'react-native';
import Header from './components/Header';
import { dummyData } from '../../constants';
import PriceAlert from '../../components/Alert/PriceAlert';
import Notice from '../../components/Notice/Notice';
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory';

const Home = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const { trendingCurrencies, transactionHistory } = dummyData;
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingBottom: 130,
    },
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Header trending={trendingCurrencies} />
        <PriceAlert />
        <Notice />
        <TransactionHistory transactionHistory={transactionHistory} />
      </View>
    </ScrollView>
  );
};

export default Home;
