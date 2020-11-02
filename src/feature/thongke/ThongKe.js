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
import {
  SafeAreaView
} from 'react-native';

const ThongKe = () => {
  return (
    <SafeAreaView>
      <VerticalCalendarComponent />
      <Chart />
    </SafeAreaView>
  )
}

export default ThongKe;