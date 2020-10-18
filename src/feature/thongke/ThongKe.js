import React from 'react'
import { View, StyleSheet } from 'react-native'
import {nanoid} from '@reduxjs/toolkit';

import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryLabel
} from "victory-native";

const ThongKe = () => {
  return (
    <View>
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryGroup
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}>
          <VictoryLine
            labels={({ datum }) => datum.y}
            labelComponent={
              <VictoryLabel
                renderInPortal dy={20}
                renderInPortal={false} />}

            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" },
              labels: { fill: "#c43a31" }
            }}
            data={[
              { x: 't2', y: 3 },
              { x: 't3', y: 5 },
              { x: 't4', y: 4 },
              { x: 't5', y: 7 },
              { x: 't6', y: 7 },
              { x: 't7', y: 7 },
            ]}
          />

        </VictoryGroup>
      </VictoryChart>
    </View>
  )
}

export default ThongKe;