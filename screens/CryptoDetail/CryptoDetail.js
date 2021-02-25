import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {
  dummyData, COLORS, SIZES, FONTS, icons
} from '../../constants';
import { shadow } from '../../styles/VictoryCustomTheme';
import Header from './components/Header';

const CryptoDetail = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.lightGray,
    },
    shadow: {
      ...shadow
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default CryptoDetail;
