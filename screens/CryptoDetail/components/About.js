import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { shadow } from '../../../styles/VictoryCustomTheme';

const About = ({ currency, text }) => {
  const styles = StyleSheet.create({
    container: {
      marginTop: SIZES.padding,
      marginHorizontal: SIZES.radius,
      padding: SIZES.radius,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.white,
      ...shadow,
    },
    title: {
      ...FONTS.h3,
    },
    text: {
      marginTop: SIZES.base,
      ...FONTS.body3,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`About ${currency}`}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default About;
