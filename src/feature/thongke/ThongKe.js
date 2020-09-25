import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import PieChartComponent from './PieChartComponent';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

const ThongKe = () => {
    return (
        <View style={style.container}>
            <PieChartComponent/>
        </View>
    )
}

export default ThongKe;