import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import { COLORS, FONTS, icons } from '../constants';
import TabBarButton from './TabBarButton';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const styles = StyleSheet.create({
    tabContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    tabLabel: {
      ...FONTS.body5
    },
    tabIcon: {
      width: 30,
      height: 30
    }
  });
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderColor: 'transparent',
          height: 100,
          backgroundColor: COLORS.white
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={styles.tabIcon, {
                  tintColor: focused ? COLORS.primary : COLORS.black
                }}
              />
              <Text style={styles.tabLabel, { color: focused ? COLORS.primary : COLORS.black }}>Home</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={icons.pieChart}
                resizeMode="contain"
                style={styles.tabIcon, {
                  tintColor: focused ? COLORS.primary : COLORS.black
                }}
              />
              <Text style={styles.tabLabel, { color: focused ? COLORS.primary : COLORS.black }}>Portfolio</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.transaction}
              resizeMode="contain"
              style={styles.tabIcon, {
                tintColor: COLORS.white
              }}
            />
          ),
          tabBarButton: (props) => (
            <TabBarButton props={props} />
          )
        }}
      />
      <Tab.Screen
        name="Prices"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={icons.lineGraph}
                resizeMode="contain"
                style={styles.tabIcon, {
                  tintColor: focused ? COLORS.primary : COLORS.black
                }}
              />
              <Text style={styles.tabLabel, { color: focused ? COLORS.primary : COLORS.black }}>Prices</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Image
                source={icons.settings}
                resizeMode="contain"
                style={styles.tabIcon, {
                  tintColor: focused ? COLORS.primary : COLORS.black
                }}
              />
              <Text style={styles.tabLabel, { color: focused ? COLORS.primary : COLORS.black }}>Settings</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
