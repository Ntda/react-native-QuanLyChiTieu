import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import PieChartComponent from '../../chart/PieChartComponent';
import useSetHeaderDetail from '../customHook/useSetHeaderDetail';
import { CHART } from '../common/Constant';
import AvartarSelector from '../common/AvartarSelector';
import { getRandomColor } from '../common/ColorPicker';
import ItemCommon from '../common/ItemCommon';

const widthDimension = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    infoChart: {
        padding: 25,
        borderRadius: 15
    },
    chartDescription: {
        width: 80,
        height: 10,
    }
})

const DetailPerDay = props => {
    const {
        colorMoney,
        prefixMoney,
        navigation,
        dataPieChart,
        title,
        dataListView,
        routeViewDetail
    } = props;

    const headerModel ={
        navigation,
        title,
        onDelete: undefined,
        children: undefined
    }

    //console.log('[params]: ' + JSON.stringify(route.params));
    useSetHeaderDetail(headerModel);

    const renderItemListView = ({
        item }) => {
        return (
            <ItemCommon
                colorMoney={colorMoney}
                prefixMoney={prefixMoney}
                routeViewDetail={routeViewDetail}
                date={title}
                title={item.title}
                money={item.money.substring(1)}
                content={item.content}
                navigation={navigation}
                id={item.id} />
        )
    }

    const renderListView = () => {
        console.log('[dataListView]: ' + JSON.stringify(dataListView))
        return (
            <FlatList
                data={dataListView}
                renderItem={renderItemListView} />
        )
    }

    const renderDetail = () => {
        return (
            <View style={{
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 10,
                marginTop: 40
            }}>
                {renderListView()}
            </View>
        )
    }
    const renderChart = () => {
        return (
            <View>
                <Text>Chi tiêu: <View style={[
                    styles.chartDescription, {
                        backgroundColor: CHART.COLORCHITIEU
                    }]} />
                </Text>
                <Text style={{
                    marginTop: 5,
                }}>Còn lại:  <View style={[
                    styles.chartDescription, {
                        backgroundColor: CHART.COLORCONLAI
                    }]} />
                </Text>
                <PieChartComponent
                    data={dataPieChart} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {renderChart()}
            {props.children}
            {renderDetail()}
        </View>
    );
};

export default DetailPerDay;
