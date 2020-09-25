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
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../common/localStoreHelper';


const style = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
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
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        });
    }

    const handleSend = () => {
        const TIEUDE = 'Tiêu đề';
        const NOIDUNG = 'Nội dung';
        console.log(title);
        console.log(content);
        const titleValidator = inputValid(TIEUDE, title);
        if (!titleValidator.valid) {
            setAlertModel({
                displayMessage: true,
                message: titleValidator.message
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
        //navigation.navigate(ROUTECHITIEU);
        const model = {
            key: LOCALSTOREKEY,
            value: {
                date,
                title,
                content
            }
        }
        dispatch(setItem(model));
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
    }, [navigation, title, content]);

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
            onChange={() => { }}
            keyboardType='numeric'
            numeric
            style={[
                style.textInput,
                { paddingBottom: 10 }]}
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