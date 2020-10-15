import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight,
    SectionList
} from 'react-native';
import { ICONTYPE, NAVIGATIONTITLE, STACKNAVIGATIONROUTE, TABTYPE } from './Constant';
import { getRandomColor } from './ColorPicker';
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

const ListViewComponent = props => {
    const {
        navigation,
        model,
        titleHeader,
        ...rest
    } = props;

    console.log('[Chi tieu]: ' + JSON.stringify(model));
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
                    tabType: rest.tabType
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
                sections={model.entities}
                renderSectionHeader={renderSectionListHeader}
                renderItem={renderItem}
                keyExtractor={(_, index) => index} />
        )
    }

    const renderButtonFilter = () => {
        return (
            <FilterTimeRangeComponent
                iconType={rest.filterModel.isShowToday
                    ? ICONTYPE.ICONFILTERANT
                    : ICONTYPE.ICONFILTERAWARESOME}
                navigation={navigation}
                {...rest}
            />
        )
    }

    const renderButtonAdd = () => {
        return (
            <AddComponent
                navigation={navigation}
                route={rest.route}
                titleHeader={titleHeader} />
        )
    }

    if (model.loading) {
        return (
            <SafeAreaView style={style.container}>
                <Spinner
                    visible={model.loading}
                    style={style.spinnerTextStyle} />
            </SafeAreaView>
        )
    }
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

export default ListViewComponent;