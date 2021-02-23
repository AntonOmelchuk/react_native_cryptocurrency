import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import { shadow } from '../../styles/VictoryCustomTheme'

const Notice = () => {
  const styles = StyleSheet.create({
    container: {
      marginTop: SIZES.padding,
      marginHorizontal: SIZES.padding,
      padding: 20,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.secondary,
      ...shadow,
    },
    title: {
      color: COLORS.white,
      ...FONTS.h3,
    },
    text: {
      marginTop: SIZES.base,
      color: COLORS.white,
      lineHeight: 18,
      ...FONTS.body4,
    },
    button: {
      marginTop: SIZES.base
    },
    buttonText: {
      textDecorationLine: 'underline',
      color: COLORS.green,
      ...FONTS.h3,
    }
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investing Safety</Text>
      <Text style={styles.text}>
        It's very difficult to time an investment,
        expecially when the market is volatile. Learn how to
        use dollar cost averaging to your advantage.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Notice
