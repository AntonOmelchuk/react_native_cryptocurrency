/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const Dots = ({ dots, scrollX }) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  const styles = StyleSheet.create({
    container: {
      height: 30,
      marginTop: 15,
    },
    containerInner: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        {dots.map(({ id }, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index],
            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
            extrapolate: 'clamp',
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`${id}`}
              opacity={opacity}
              style={{
                borderRadius: SIZES.radius,
                marginHorizontal: 6,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Dots;
