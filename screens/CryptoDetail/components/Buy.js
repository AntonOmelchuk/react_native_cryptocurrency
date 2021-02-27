import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, Image, StyleSheet
} from 'react-native';
import Button from '../../../components/Button/Button';
import CurrencyLabel from '../../../components/CurrencyLabel/CurrencyLabel';
import {
  COLORS, FONTS, icons, SIZES
} from '../../../constants';
import { shadow } from '../../../styles/VictoryCustomTheme';

const Buy = ({
  image, currency, code, wallet, currentCurrency
}) => {
  const { value, crypto } = wallet;

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: SIZES.radius,
      padding: SIZES.radius,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.white,
      ...shadow,
    },
    containerInner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: SIZES.radius,
    },
    amountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    amountInner: {
      marginRight: SIZES.base,
    },
    h3: {
      ...FONTS.h3,
    },
    cryptoCode: {
      textAlign: 'right',
      color: COLORS.gray,
      ...FONTS.body4,
    },
    icon: {
      width: 20,
      height: 20,
      tintColor: COLORS.gray,
      resizeMode: 'cover',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <CurrencyLabel image={image} currency={`${currency} Wallet`} code={code} />
        <View style={styles.amountContainer}>
          <View style={styles.amountInner}>
            <Text style={styles.h3}>{`$${value}`}</Text>
            <Text style={styles.cryptoCode}>{`$${crypto} ${code}`}</Text>
          </View>
          <Image source={icons.rightArrow} style={styles.icon} />
        </View>
      </View>
      <Button
        label="Buy"
        onPress={() => navigation.navigate('Transaction', { currency: currentCurrency })}
      />
    </View>
  );
};

export default Buy;
