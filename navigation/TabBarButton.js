import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../constants';

const TabBarButton = ({children, onPress}) => {
  const styles = StyleSheet.create({
    container: {
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: COLORS.primary,
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5
    },
    gradient: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
  })

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient colors={[
        COLORS.primary, COLORS.secondary
      ]} style={styles.gradient}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default TabBarButton
