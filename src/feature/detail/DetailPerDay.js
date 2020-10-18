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
        route,
        navigation,
        dataPieChart,
        ammount,
        title,
        dataListView,
        routeViewDetail
    } = props;

    //console.log('[params]: ' + JSON.stringify(route.params));
    useSetHeaderDetail(navigation);

    const renderItemListView = ({
        item }) => {
        return (
            <ItemCommon
            routeViewDetail={routeViewDetail}
            date={title}
            title={item.title}
            money={item.money.substring(1)}
            content={item.content}
            navigation={navigation}/>
            /*{ <TouchableHighlight
                style={{
                    padding: 10,
                    margin: 5,
                    borderRadius: 20
                }}
                onPress={() => navigation.navigate(routeViewDetail, {
                    title: item.title,
                    date: title,
                    money: item.money.substring(1),
                    content: item.content
                })}
                underlayColor='#e6f9ff'>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        marginRight: 10,
                        justifyContent: 'center'
                    }}>
                        <AvartarSelector
                            title={item.title}
                            color={getRandomColor()} />
                    </View>
                    <View>
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: 21,
                                width: widthDimension - 150
                            }}>{item.title}</Text>
                        <Text style={{
                            color: ammount.color
                        }}>{item.money}</Text>
                        <Text
                            numberOfLines={2}
                            style={{
                                width: widthDimension - 120,
                                color: 'gray'
                            }}>{item.content}</Text>
                    </View>
                </View>
            </TouchableHighlight> }*/
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
                <View>
                    <Text style={{
                        color: 'gray',
                        fontSize: 20
                    }}>{title}
                    </Text>
                </View>
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
