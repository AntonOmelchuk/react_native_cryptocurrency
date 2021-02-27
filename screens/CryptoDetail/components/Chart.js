import React from 'react';
import {
  View, Text, StyleSheet, Animated
} from 'react-native';
import {
  VictoryScatter, VictoryLine, VictoryChart, VictoryAxis
} from 'victory-native';
import CurrencyLabel from '../../../components/CurrencyLabel/CurrencyLabel';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { shadow } from '../../../styles/VictoryCustomTheme';
import VictoryCustomTheme from '../../../styles';
import OptionButtons from './OptionButtons';
import Dots from './Dots';

const Chart = ({ chartInfo }) => {
  const {
    image, code, currency, amount, changes, type, chartData
  } = chartInfo;

  const scrollX = new Animated.Value(0);
  const charts = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: SIZES.padding,
    },
    chartItem: {
      marginTop: SIZES.padding,
      marginHorizontal: SIZES.radius,
      alignItems: 'center',
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.white,
      ...shadow,
    },
    block: {
      flexDirection: 'row',
      marginTop: SIZES.padding,
      paddingHorizontal: SIZES.padding,
    },
    flex1: {
      flex: 1
    },
    h3: {
      ...FONTS.h3,
    },
    changes: {
      color: type === 'I' ? COLORS.green : COLORS.red,
      ...FONTS.body3
    },
    chartContainer: {
      marginTop: -25
    },
  });

  const lineStyles = {
    data: {
      stroke: COLORS.secondary,
    },
    parent: {
      border: '1px solid #ccc'
    }
  };

  const scatterStyles = {
    data: {
      fill: COLORS.secondary,
    },
  };

  const axisStyles = {
    grid: {
      stroke: 'transparent',
    },
  };

  const dependAxisStyles = {
    axis: {
      stroke: 'transparent',
    },
    grid: {
      stroke: 'grey'
    },
  };

  const categories = {
    x: ['15 MIN', '30 MIN', '45 MIN', '60 MIN'],
    y: ['15', '30', '45']
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartItem}>
        <View style={styles.block}>
          <View style={styles.flex1}>
            <CurrencyLabel image={image} code={code} currency={currency} />
          </View>
          <View>
            <Text style={styles.h3}>{`$${amount}` }</Text>
            <Text style={styles.changes}>{changes}</Text>
          </View>
        </View>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={SIZES.width - 40}
          decelerationRate={0}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } }
          ], { useNativeDriver: false })}
        >
          {charts.map(({ id }) => (
            <View key={id} style={styles.chartContainer}>
              <VictoryChart
                theme={VictoryCustomTheme}
                height={220}
                width={SIZES.width - 40}
              >
                <VictoryLine
                  style={lineStyles}
                  data={chartData}
                  categories={categories}
                />
                <VictoryScatter
                  data={chartData}
                  size={4}
                  style={scatterStyles}
                />
                <VictoryAxis style={axisStyles} />
                <VictoryAxis dependentAxis style={dependAxisStyles} />
              </VictoryChart>
            </View>
          ))}
        </Animated.ScrollView>
        <OptionButtons />
        <Dots dots={charts} scrollX={scrollX} />
      </View>
    </View>
  );
};

export default Chart;
