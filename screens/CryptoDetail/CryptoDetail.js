import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COLORS } from '../../constants';
import Chart from './components/Chart';
import Header from './components/Header';

const CryptoDetail = ({ route }) => {
  const { currency } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.lightGray1,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header right />
      <ScrollView>
        <Chart chartInfo={currency} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CryptoDetail;
