import React, { useEffect, useState } from 'react';
import { TIMERANGEROUTE } from '../common/Constant';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';
import DateTime from '../common/DateTime';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import CheckBox from 'react-native-check-box';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { nanoid } from '@reduxjs/toolkit';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 20
    },
    displayCalendar: {
        height: 50,
        borderColor: 'gray',
        borderBottomWidth: 1.0,
        fontSize: 22,
        marginTop: 5,
        position: 'relative',
        paddingLeft: 35
    },
    icons: {
        position: 'absolute',
        marginTop: 37
    }
});
const TimeRange = ({ navigation }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [checked, setChecked] = useState(true);

    const renderStyleHeader = () => {
        return ({
            title: TIMERANGEROUTE.title,
            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        });
    }

    const handleUpdateFromDate = date => {
        setShowCalendar(false);
        setFromDate(date);
    }

    const handleUpdateToDate = date => {
        setShowCalendar(false);
        setToDate(date);
    }

    useEffect(() => {
        navigation.setOptions({
            ...renderStyleHeader()
        });
    }, [navigation]);

    const renderInputDateControl = (title, key, date, style) => {
        console.log('[Date]: ' + key);
        console.log('[Date: =>]: ' + JSON.stringify(date));
        return (
            <View style={style}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'gray'
                }}>{title}</Text>
                <TextInput
                    style={[styles.displayCalendar]}
                    value={checked
                        ? ''
                        : moment(date).format('LL')}
                    editable={false}
                />
                {!checked && <Ionicons
                    style={styles.icons}
                    name='ios-calendar'
                    size={25}
                    disable={true}
                    onPress={() => setShowCalendar(true)} />}
                {showCalendar && key === 'FromDate' &&
                    <DateTime
                        defaultDate={date}
                        handleUpdateDate={handleUpdateFromDate}
                        handleHideDatePicker={() => setShowCalendar(false)} />}
                {showCalendar && key === 'ToDate' &&
                    <DateTime
                        defaultDate={date}
                        handleUpdateDate={handleUpdateToDate}
                        handleHideDatePicker={() => setShowCalendar(false)} />}
            </View>
        )
    }

    const handleFilter = () => {
        const model = {
            from: date
        }
    }

    return (
        <View style={styles.container}>
            <View style={{
                marginBottom: 20,
                backgroundColor: '#E7F7F8',
                padding: 8,
                borderRadius: 10
            }}>
                <Text>- Chọn khoảng thời gian để xem chi tiêu của bạn. </Text>
                <Text>- Để xem hôm nay, chọn 'xem hôm nay'. </Text>
            </View>
            <View style={{
                backgroundColor: '#F1FAF2',
                borderRadius: 15,
                padding: 10
            }}>
                {renderInputDateControl('Từ ngày', 'FromDate', fromDate)}
                {renderInputDateControl('Đến ngày', 'ToDate', toDate, {
                    marginTop: 20
                })}
            </View>
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
            <TouchableOpacity
                style={{
                    backgroundColor: 'tomato',
                    padding: 10,
                    marginTop: 30,
                    borderRadius: 18,

                }}
                onPress={handleFilter}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white'
                }}>Xác nhận</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TimeRange;