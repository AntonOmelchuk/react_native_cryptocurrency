import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS, icons} from '../../constants'
import { shadow } from '../../styles/VictoryCustomTheme'

const  PriceAlert = ({customContainerStyle}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: SIZES.padding * 4.5,
      marginHorizontal: SIZES.padding,
      paddingVertical: SIZES.padding,
      paddingHorizontal: SIZES.radius,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.radius,
      ...customContainerStyle,
      ...shadow,
    },
    image: {
      width: 30,
      height: 30,
    },
    textContainer: {
      flex: 1,
      marginLeft: SIZES.radius
    },
    h4: {
      ...FONTS.h4
    },
    body4: {
      ...FONTS.body4
    },
    arrowIcon: {
      width: 25,
      height: 25,
      tintColor: COLORS.gray,
    }
  })

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={icons.notification_color}
        style={styles.image}
      />
      <View>
        <Text style={styles.h4}>Set Price Alert</Text>
        <Text style={styles.body4}>Get notifed when your coins are moving</Text>
      </View>
      <Image
        source={icons.right_arrow}
        style={styles.arrowIcon}
      />
    </TouchableOpacity>
  )
}

export default  PriceAlert
