import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import PriceAlert from '../../components/Alert/PriceAlert';
import { COLORS, SIZES } from '../../constants';
import About from './components/About';
import Buy from './components/Buy';
import Chart from './components/Chart';
import Header from './components/Header';

const CryptoDetail = ({ route }) => {
  const { currency: currentCurrency } = route.params;
  const {
    image, currency, code, wallet, description
  } = currentCurrency;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.lightGray1,
    },
    alert: {
      marginTop: SIZES.padding,
      marginHorizontal: SIZES.radius,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header right />
      <ScrollView>
        <Chart chartInfo={currentCurrency} />
        <Buy image={image} currency={currency} code={code} wallet={wallet} currentCurrency={currentCurrency} />
        <About currency={currency} text={description} />
        <PriceAlert customContainerStyle={styles.alert} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CryptoDetail;
