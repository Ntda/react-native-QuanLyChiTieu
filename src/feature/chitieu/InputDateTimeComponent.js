import React from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import DateTime from '../common/DateTime';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const styles = StyleSheet.create({
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


const InputDateTimeComponent = props => {
    const {
        style,
        title,
        checked,
        showCalendar,
        onShowCalendar,
        onUpdateDate,
        date
    } = props;
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
                onPress={() => onShowCalendar(true)} />}
            {showCalendar &&
                <DateTime
                    defaultDate={date}
                    handleUpdateDate={onUpdateDate}
                    handleHideDatePicker={() => onShowCalendar(false)} />}
        </View>
    );
};

export default InputDateTimeComponent;