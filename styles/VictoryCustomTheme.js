import { assign } from 'lodash';

// *
// * Colors
// *
const blueGrey50 = '#ECEFF1';
const blueGrey700 = '#455A64';
const grey900 = '#212121';
// *
// * Typography
// *
const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
const letterSpacing = 'normal';
const fontSize = 12;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50,
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: 'transparent',
  strokeWidth: 0
};

const centeredLabelStyles = assign({ textAnchor: 'middle' }, baseLabelStyles);
// *
// * Strokes
// *
const strokeDasharray = '5, 5';
const strokeLinecap = 'round';
const strokeLinejoin = 'round';
// *
// * Shadow
// *
export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,

  elevation: 8,
};

export default {
  chart: baseProps,
  area: assign(
    {
      style: {
        data: {
          fill: grey900
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 2,
          strokeLinecap,
          strokeLinejoin
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding,
          stroke: 'transparent'
        }),
        grid: {
          fill: 'none',
          stroke: blueGrey50,
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: 'painted'
        },
        ticks: {
          fill: 'transparent',
          size: 5,
          stroke: 'transparent',
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: blueGrey700
        })
      }
    },
    baseProps
  ),
  line: assign(
    {
      style: {
        data: {
          fill: 'transparent',
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 3
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  scatter: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          opacity: 1,
          stroke: 'transparent',
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
};
