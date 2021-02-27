import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../../components/Button/Button';
import CurrencyLabel from '../../../components/CurrencyLabel/CurrencyLabel';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { shadow } from '../../../styles/VictoryCustomTheme';

const Trade = ({
  currency, image, code, wallet
}) => {
  const { value, crypto } = wallet;

  const styles = StyleSheet.create({
    container: {
      marginTop: SIZES.padding,
      marginHorizontal: SIZES.padding,
      padding: SIZES.padding,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.white,
      ...shadow,
    },
    cryptoCode: {
      marginTop: SIZES.padding,
      marginBottom: SIZES.padding,
      alignItems: 'center',
      justifyContent: 'center'
    },
    h2: {
      ...FONTS.h2,
    },
    value: {
      color: COLORS.gray,
      ...FONTS.body4,
    },
  });

  return (
    <View style={styles.container}>
      <CurrencyLabel image={image} currency={currency} code={code} />
      <View style={styles.cryptoCode}>
        <Text style={styles.h2}>{`${crypto} ${code}`}</Text>
        <Text style={styles.value}>{`$${value}`}</Text>
      </View>
      <Button label="Trade" />
    </View>
  );
};

export default Trade;
