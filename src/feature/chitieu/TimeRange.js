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
        fontSize: 25,
        width: Math.round(Dimensions.get('window').width) - 20,
        marginTop: 5,
        position: 'relative',
        paddingLeft: 35,
        paddingBottom: 10
    },
    icons: {
        position: 'absolute',
        marginTop: 38
    }
});
const TimeRange = ({ navigation }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(new Date());
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

    const handleUpdateDate = d => {
        setShowCalendar(false);
        setDate(d);
    }

    useEffect(() => {
        navigation.setOptions({
            ...renderStyleHeader()
        });
    }, [navigation]);

    const renderInputDateControl = (title, style) => {
        return (
            <View style={style}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'gray'
                }}>{title}</Text>
                <TextInput
                    style={[styles.displayCalendar]}
                    value={moment(date).format('LL')}
                    editable={false}
                />
                <Ionicons
                    style={styles.icons}
                    name='ios-calendar'
                    size={25}
                    onPress={() => setShowCalendar(true)} />
                {showCalendar &&
                    <DateTime
                        defaultDate={date}
                        handleUpdateDate={handleUpdateDate}
                        handleHideDatePicker={() => setShowCalendar(false)} />}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderInputDateControl('Từ ngày')}
            {renderInputDateControl('Đến ngày',{
                marginTop: 40
            })}
        </View>
    );
};

export default TimeRange;