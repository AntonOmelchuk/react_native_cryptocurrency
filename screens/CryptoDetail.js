import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const CryptoDetail = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

  return (
    <View style={styles.container}>
      <Text>CryptoDetail</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Transaction')}
      >
        <Text>Navigate to Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CryptoDetail;
