import React, { useEffect, useState } from 'react';
import { TIMERANGEROUTE } from './Constant';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputDateTimeComponent from '../chitieu/InputDateTimeComponent';
import AlertComponent from './AlertComponent';
import moment from 'moment';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 20
    }
});
const TimeRange = props => {
    const {
        route,
        navigation,
        onSetFilter
    } = props;
    const { filterModel, tabType } = route.params;
    console.log('[filterModel]: ' + JSON.stringify(filterModel));
    const [showCalendarFromDate, setShowCalendarFromDate] = useState(false);
    const [showCalendarToDate, setShowCalendarToDate] = useState(false);
    const [fromDate, setFromDate] = useState(new Date(filterModel.fromDate));
    const [toDate, setToDate] = useState(new Date(filterModel.toDate));
    const [checked, setChecked] = useState(filterModel.isShowToday);
    const [message, setMessage] = useState({
        display: false,
        value: ''
    });

    const renderStyleHeader = () => {
        return ({
            title: TIMERANGEROUTE.title,
            headerStyle: {
                backgroundColor: 'gray'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        });
    }

    const handleUpdateFromDate = date => {
        setShowCalendarFromDate(false);
        setFromDate(date);
    }

    const handleUpdateToDate = date => {
        setShowCalendarToDate(false);
        setToDate(date);
    }

    useEffect(() => {
        navigation.setOptions({
            ...renderStyleHeader()
        });
    }, [navigation]);

    const handleFilter = () => {
        const fromDateTypeDate = Date.parse(fromDate);
        const toDateTypeDate = Date.parse(toDate);

        if (fromDateTypeDate > toDateTypeDate && !checked) {
            const newMessage = {
                display: true,
                value: 'Ngày bắt đầu phải nhỏ hơn ngày kết thúc'
            };
            setMessage(newMessage);
            return;
        }

        const filterModel = {
            timeRange: {
                fromDate: moment(fromDate).format('LL'),
                toDate: moment(toDate).format('LL')
            },
            isShowToday: checked
        }
        onSetFilter(filterModel);
    }

    const renderCheckbox = () => {
        return (
            <CheckBox
                style={{
                    marginTop: 40
                }}
                rightTextStyle={{
                    fontSize: 20,
                    color: '#1F85DE'
                }}
                checkedCheckBoxColor='#1F85DE'
                uncheckedCheckBoxColor='gray'
                onClick={() => setChecked(!checked)}
                isChecked={checked}
                rightText='Chi tiêu hôm nay'
            />
        )
    }

    const renderButtonSubmit = () => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: 'tomato',
                    padding: 10,
                    marginTop: 30,
                    borderRadius: 18
                }}
                onPress={handleFilter}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white'
                }}>Xác nhận</Text>
            </TouchableOpacity>
        );
    }

    const renderDescription = () => {
        return (
            <View style={{
                marginBottom: 20,
                backgroundColor: '#b8bdb5',
                padding: 8,
                borderRadius: 10
            }}>
                <Text>- Chọn khoảng thời gian để xem {tabType.toLowerCase()} của bạn. </Text>
                <Text>- Để xem hôm nay, chọn 'xem hôm nay'. </Text>
            </View>
        )
    }

    const renderFilterTimeRange = () => {
        return (
            <View style={{
                backgroundColor: '#F1FAF2',
                borderRadius: 15,
                padding: 10
            }}>
                <InputDateTimeComponent
                    title='Từ ngày'
                    date={fromDate}
                    checked={checked}
                    showCalendar={showCalendarFromDate}
                    onShowCalendar={() => setShowCalendarFromDate(true)}
                    onUpdateDate={handleUpdateFromDate}
                />
                <InputDateTimeComponent
                    title='Đến ngày'
                    date={toDate}
                    checked={checked}
                    showCalendar={showCalendarToDate}
                    onShowCalendar={() => setShowCalendarToDate(true)}
                    onUpdateDate={handleUpdateToDate}
                    style={{ marginTop: 20 }}
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {renderDescription()}
            {renderFilterTimeRange()}
            {renderCheckbox()}
            {renderButtonSubmit()}
            {message.display &&
                <AlertComponent
                    message={message.value}
                    confirmText='OK'
                    confirmButtonColor='#DD6B55'
                    onCloseAlert={() => setMessage({
                        ...message,
                        display: false
                    })} />}
        </View>
    );
};

export default TimeRange;