import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    View,
    StyleSheet
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { getDataThongKeByMonthAndYear } from '../common/localStoreHelper';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        padding: 10,
        alignSelf: 'flex-end'
    }
})

const ReloadComponent = () => {
    const monthModel = useSelector(state => state.thongKe);
    const dispatch = useDispatch();
    const {
        selectedMonth,
        currentYear
    } = monthModel;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    dispatch(getDataThongKeByMonthAndYear({
                        selectedMonth,
                        currentYear
                    }));
                }}
            >
                <FontAwesome
                    name='refresh'
                    size={29} />
            </TouchableOpacity>
        </View>
    );
};

export default ReloadComponent;