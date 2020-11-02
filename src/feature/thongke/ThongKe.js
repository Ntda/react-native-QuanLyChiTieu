import React from 'react'


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