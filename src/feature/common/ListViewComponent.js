import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight,
    SectionList
} from 'react-native';
import { LOCALSTOREKEY, ICONTYPE, NAVIGATIONTITLE, STACKNAVIGATIONROUTE } from './Constant';
import { getRandomColor } from './ColorPicker';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from './localStoreHelper';
import { nanoid } from '@reduxjs/toolkit';
import AvartarSelector from './AvartarSelector';
import AddComponent from './AddComponent';
import FilterTimeRangeComponent from './FilterTimeRangeComponent';
import Spinner from 'react-native-loading-spinner-overlay';
import { Dimensions } from 'react-native';

const widthDimension = Dimensions.get('window').width;
const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
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
        borderRadius: 10
    },
    spinnerTextStyle: {
        color: '#FFF'
    }
})

const ListViewComponent = ({ navigation }) => {
    const dispatch = useDispatch();
    const filterModel = useSelector(state => state.filter);
    const { fromDate, toDate, isShowToday } = filterModel;
    const modelChiTieu = useSelector(state => state.chiTieu);

    console.log('[Chi tieu]: ' + JSON.stringify(modelChiTieu));
    const renderItem = ({
        item,
        section
    }) => {
        console.log('[Item]: ' + JSON.stringify(section));
        return (
            <TouchableHighlight
                style={{
                    marginTop: 5,
                    borderRadius: 20
                }}
                onPress={() => navigation.navigate(STACKNAVIGATIONROUTE.chitiet, {
                    ...item,
                    date: section.title,
                    type: 'chitieu'
                })}
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
                                            width: widthDimension - 150
                                        }, style.item]}>
                                        {item.title}
                                    </Text>
                                    <Text style={style.item}>
                                        {item.money}
                                    </Text>
                                    <Text
                                        numberOfLines={2}
                                        style={{
                                            color: 'gray',
                                            width: widthDimension - 90
                                        }}>
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
            <View style={[style.sectionHeaderStyle, style.row]}>
                <Text>
                    {section.title}
                    <Text style={{
                        color: 'gray',
                        fontSize: 19
                    }}> ({section.totalMoneyDisplay})</Text>
                </Text>
            </View>

        )
    }

    const renderSectionList = () => {
        return (
            <SectionList
                sections={modelChiTieu.chiTieuArray}
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

    useEffect(() => {
        navigation.setOptions({
            title: NAVIGATIONTITLE.chiTieu,
            tabBarBadge: modelChiTieu.totalMoneyBaseOnTimeRangeDisplay
        });
    }, [modelChiTieu.totalMoneyBaseOnTimeRangeDisplay]);

    if (modelChiTieu.loading) {
        return (
            <SafeAreaView style={style.container}>
                <Spinner
                    visible={modelChiTieu.loading}
                    style={style.spinnerTextStyle} />
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={style.container}>
            <Spinner
                visible={modelChiTieu.loading}
                style={style.spinnerTextStyle} />
            {renderSectionList()}
            {renderButtonFilter()}
            {renderButtonAdd()}
        </SafeAreaView>
    )
}

export default ListViewComponent;