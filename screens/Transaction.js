import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Transaction = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

  return (
    <View style={styles.container}>
      <Text>Transaction</Text>
    </View>
  );
};

export default Transaction;
