import { isEqual } from 'lodash';
import React, {
    useEffect,
    useState
} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
}
    from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { setSelectedMonth } from './thongKeSlice';

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        borderTopWidth: 1,
        borderBottomWidth: 1

    },
    item: {
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        color: 'gray',
        fontSize: 15
    }
});


const VerticalCalendarComponent = () => {
    const monthModel = useSelector(state => state.thongKe);
    const dispatch = useDispatch();
    const { selectedMonth, monthDataSource } = monthModel;

    const handleSelectMonthChange = async month => {
        await dispatch(setSelectedMonth(month));
    };

    const Item = ({ month, year }) => {
        const styleTouchable = isEqual(selectedMonth, month)
            ? [
                styles.item,
                {
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 20,
                    fontWeight: 'bold'
                }
            ]
            : styles.item;
        const styleTitle = isEqual(selectedMonth, month)
            ? [
                styles.title,
                {
                    fontWeight: 'bold',
                    color: 'black'
                }
            ]
            : styles.title;

        return (
            <TouchableOpacity
                style={styleTouchable}
                onPress={() => handleSelectMonthChange(month)}>
                <Text
                    style={styleTitle}>
                    {`${month}/${year}`}
                </Text>
            </TouchableOpacity>)
    }


    const renderItem = ({ item }) => (
        <Item
            month={item.month}
            year={item.year} />
    );

    const renderCalendarVertical = () => {
        return <FlatList
            horizontal
            data={monthDataSource}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    }

    return (
        <View style={styles.container}>
            {renderCalendarVertical()}
        </View>
    );
};


export default VerticalCalendarComponent;