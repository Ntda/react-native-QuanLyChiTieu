import React, { useState, useEffect } from 'react';
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
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import IconSend from '../common/IconSend';
import { LOCALSTOREKEY, ROUTECHITIEU, THEMCHITIEUTITLE } from '../common/Constant';
import inputValid from '../common/valdiateInput';
import AlertComponent from '../common/AlertComponent';
import { useDispatch } from 'react-redux';
import { setItem } from '../common/localStoreHelper';
import { nanoid } from '@reduxjs/toolkit';
import { commaFormatted, getNumberFromString } from '../common/numberFormater';

moment.locale('vi');
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1.0,
        fontSize: 20,
        width: Math.round(Dimensions.get('window').width) - 20,
        marginTop: 30
    }
});
const ThemChiTieu = ({ navigation }) => {
    const dispatch = useDispatch();
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [money, setMoney] = useState(null);
    const [alertModel, setAlertModel] = useState({
        displayMessage: false,
        message: ''
    });

    const handleUpdateDate = date => {
        setShowCalendar(false);
        setDate(date);
    }

    const renderStyleHeader = () => {
        return ({
            title: THEMCHITIEUTITLE,
            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        });
    }

    const handleSend = async () => {
        const TIEUDE = 'Tiêu đề';
        const NOIDUNG = 'Nội dung';
        const SOTIEN = 'Số tiền';
        const titleValidator = inputValid(TIEUDE, title);
        if (!titleValidator.valid) {
            setAlertModel({
                displayMessage: true,
                message: titleValidator.message
            });
            return;
        }
        console.log(money);
        const moneyValidator = inputValid(SOTIEN, money);
        if (!moneyValidator.valid) {
            setAlertModel({
                displayMessage: true,
                message: moneyValidator.message
            });
            return;
        }
        const contentValidator = inputValid(NOIDUNG, content);
        if (!contentValidator.valid) {
            setAlertModel({
                displayMessage: true,
                message: contentValidator.message
            });
            return;
        }
        const model = {
            key: LOCALSTOREKEY,
            value: {
                title: moment(new Date(date)).format('LL'),
                data: [{
                    id: nanoid(),
                    title,
                    time: moment(new Date()).format('LT'),
                    money,
                    content
                }]
            }
        }
        await dispatch(setItem(model));
        navigation.navigate(ROUTECHITIEU);
    }

    const handleCloseAlert = () => {
        setAlertModel({
            ...alertModel,
            displayMessage: false
        });
    }

    useEffect(() => {
        navigation.setOptions({
            ...renderStyleHeader(),
            headerRight: () => (
                <IconSend
                    onSend={handleSend} />)
        });
    }, [navigation, title, content, money]);

    const handleMoneyChange = event => {
        let { text } = event.nativeEvent;
        console.log('[Money]=> change: ' + text)
        text = text.replace('đ', '');
        const ammount = getNumberFromString(text);
        console.log('[ammount]=> change: ' + ammount)
        let ammountFormater = commaFormatted(ammount);
        console.log('[Money]=> change: ' + ammountFormater)
        ammountFormater = ammountFormater
            ? `${ammountFormater} đ`
            : '';
        setMoney(ammountFormater);
    }

    const renderDate = () => {
        return (<View>
            <TextInput
                style={[
                    style.textInput,
                    {
                        position: 'relative',
                        paddingLeft: 35,
                        paddingBottom: 10
                    }]}
                placeholder='Ngày'
                value={moment(date).format('LL')}
                editable={false}
            />
            <Ionicons
                style={{
                    position: 'absolute',
                    marginTop: 30
                }}
                name='ios-calendar'
                size={25}
                onPress={() => setShowCalendar(true)} />
        </View>)
    }

    const renderTitle = () => {
        return (<AutoGrowingTextInput
            onChange={event => setTitle(event.nativeEvent.text || '')}
            value={title}
            style={[
                style.textInput,
                { paddingBottom: 10 }]}
            placeholder='Tiêu đề' />)
    }

    const renderMoney = () => {
        return (<TextInput
            ref={el => moneyInputRef = el}
            onChange={handleMoneyChange}
            keyboardType='numeric'
            numeric
            value={money}
            style={[
                style.textInput,
                { paddingBottom: 10 }
            ]}
            placeholder='Số tiền' />)
    }

    const renderContent = () => {
        return (<AutoGrowingTextInput
            onChange={event => setContent(event.nativeEvent.text || '')}
            value={content}
            style={[
                style.textInput,
                {
                    borderColor: 'transparent',
                }]}
            placeholder='Nội dung' />)
    }

    const renderCalendar = () => showCalendar &&
        <DateTime
            defaultDate={date}
            handleUpdateDate={handleUpdateDate}
            handleHideDatePicker={() => setShowCalendar(false)} />

    const renderAlert = () => <AlertComponent
        message={alertModel.message}
        confirmText='OK'
        confirmButtonColor='#DD6B55'
        onCloseAlert={handleCloseAlert} />

    return (
        <View style={style.container}>
            {renderDate()}
            {renderTitle()}
            {renderMoney()}
            {renderCalendar()}
            {renderContent()}
            {alertModel.displayMessage && renderAlert()}
        </View>
    );
}

export default ThemChiTieu;