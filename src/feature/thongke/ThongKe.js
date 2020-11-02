import React from 'react'
import { View, StyleSheet } from 'react-native'
import { nanoid } from '@reduxjs/toolkit';

import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryLabel
} from "victory-native";
import VerticalCalendarComponent from './VerticalCalendarComponent';
import Chart from './Chart';

const ThongKe = () => {
  return (
    <View>
      <VerticalCalendarComponent />
      <Chart />
    </View>
  )
}

export default ThongKe;