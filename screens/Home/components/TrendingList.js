import React from 'react';
import {
  View, Text, StyleSheet, FlatList
} from 'react-native';
import { SIZES, COLORS, FONTS } from '../../../constants';
import TrendingItem from './TrendingItem';

const TrendingList = ({ trending }) => {
  const styles = StyleSheet.create({
    trendingContainer: {
      position: 'absolute',
      bottom: '-30%',
    },
    trendingText: {
      marginLeft: SIZES.padding,
      color: COLORS.white,
      ...FONTS.h2,
    },
    list: {
      marginTop: SIZES.base,
    }
  });

  return (
    <View style={styles.trendingContainer}>
      <Text style={styles.trendingText}>Trending</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={trending}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => <TrendingItem value={item} />}
      />
    </View>
  );
};

export default TrendingList;
