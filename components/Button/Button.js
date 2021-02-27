import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';

const Button = ({
  label, btnStyles = {}, labelStyles = {}, onPress
}) => {
  const styles = StyleSheet.create({
    button: {
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.green,
      ...btnStyles,
    },
    label: {
      color: COLORS.white,
      ...FONTS.h3,
      ...labelStyles,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
