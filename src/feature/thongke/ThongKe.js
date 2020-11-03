import React from 'react'


import VerticalCalendarComponent from './VerticalCalendarComponent';
import Chart from './Chart';
import {
  SafeAreaView
} from 'react-native';
import ReloadComponent from './ReloadComponent';

const ThongKe = () => {
  return (
    <SafeAreaView>
      <VerticalCalendarComponent />
      <Chart />
      <ReloadComponent/>
    </SafeAreaView>
  )
}

export default ThongKe;