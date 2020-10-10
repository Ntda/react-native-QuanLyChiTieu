import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight,
    SectionList
} from 'react-native';
import { LOCALSTOREKEY, ICONTYPE } from '../common/Constant';
import { getRandomColor } from '../common/ColorPicker';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../common/localStoreHelper';
import { nanoid } from '@reduxjs/toolkit';
import AvartarSelector from './AvartarSelector';
import AddComponent from './AddComponent';
import FilterTimeRangeComponent from './FilterTimeRangeComponent';
import Spinner from 'react-native-loading-spinner-overlay';

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flex: 1,
        padding: 10,
        fontSize: 22
    },
    item: {
        color: 'black'
    },
    sectionHeaderStyle: {
        backgroundColor: '#dde0e4',
        fontSize: 20,
        padding: 5,
        color: 'black',
        borderRadius: 15
    },
    spinnerTextStyle: {
        color: '#FFF'
    }
})

const ChiTieu = ({ navigation }) => {
    const dispatch = useDispatch();
    const filterModel = useSelector(state => state.filter);
    const { fromDate, toDate, isShowToday } = filterModel;
    const model = useSelector(state => state.chiTieu);

    console.log('[Chi tieu]: ' + JSON.stringify(model));
    const renderItem = ({
        item
    }) => {
        return (
            <TouchableHighlight
                style={{
                    marginTop: 5,
                    borderRadius: 20
                }}
                onPress={() => { }}
                underlayColor='#e6f9ff'>
                <View
                    key={nanoid()}
                    style={style.row}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View>
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
                                        style={[{
                                            fontSize: 21,
                                            width: 210
                                        }, style.item]}>
                                        {item.title}
                                    </Text>
                                    <Text style={style.item}>
                                        {item.money}
                                    </Text>
                                    <Text style={{ color: 'gray' }}>
                                        {item.content}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight >
        );
    }

    const renderSectionListHeader = ({ section }) => {
        return (
            <Text style={[style.sectionHeaderStyle, style.row]}>
                {section.title}
                <Text style={{
                    color: 'gray',
                    fontSize: 19
                }}> ({section.totalMoneyDisplay})</Text>
            </Text>
        )
    }

    const renderSectionList = () => {
        return (
            <SectionList
                sections={model.chiTieuArray}
                renderSectionHeader={renderSectionListHeader}
                renderItem={renderItem}
                keyExtractor={(_, index) => index} />
        )
    }

    const renderButtonFilter = () => {
        return (
            <FilterTimeRangeComponent
                iconType={isShowToday
                    ? ICONTYPE.ICONFILTERANT
                    : ICONTYPE.ICONFILTERAWARESOME}
                navigation={navigation} />
        )
    }

    const renderButtonAdd = () => {
        return (
            <AddComponent
                navigation={navigation} />
        )
    }

    useEffect(() => {
        dispatch(getItem(LOCALSTOREKEY))
    }, [fromDate, toDate, isShowToday]);
    return (
        <SafeAreaView style={style.container}>
            <Spinner
                visible={model.loading} 
                style={style.spinnerTextStyle} />
            {renderSectionList()}
            {renderButtonFilter()}
            {renderButtonAdd()}
        </SafeAreaView>
    )
}

export default ChiTieu;