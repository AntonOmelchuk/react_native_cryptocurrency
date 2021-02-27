import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../../components/Button/Button';
import {
  COLORS, dummyData, FONTS, SIZES
} from '../../../constants';

const OptionButtons = () => {
  const [selected, setSelected] = useState(1);

  const styles = StyleSheet.create({
    optionsContainer: {
      width: '100%',
      paddingHorizontal: SIZES.padding,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      height: 30,
      width: 60,
      borderRadius: 15,
      backgroundColor: COLORS.lightGray,
    },
    selectedBtn: {
      backgroundColor: COLORS.primary,
    },
    label: {
      color: COLORS.gray,
      ...FONTS.body5,
    },
    selectedLabel: {
      color: COLORS.white,
    },
  });

  return (
    <View style={styles.optionsContainer}>
      {dummyData.chartOptions.map(({ id, label }) => (
        <Button
          key={`${id}`}
          label={label}
          btnStyles={{ ...styles.button, ...selected === id && styles.selectedBtn }}
          labelStyles={{ ...styles.label, ...selected === id && styles.selectedLabel }}
          onPress={() => setSelected(id)}
        />
      ))}
    </View>
  );
};

export default OptionButtons;
