import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    SectionList,
    TouchableOpacity
} from 'react-native';
import { ICONTYPE } from './Constant';
import AddComponent from './AddComponent';
import FilterTimeRangeComponent from './FilterTimeRangeComponent';
import Spinner from 'react-native-loading-spinner-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ItemCommon from './ItemCommon';
import NoDataComponent from './NoDataComponent';

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
    const [itemDeleted, setItemDeleted] = useState([]);
    const {
        navigation,
        model,
        titleHeader,
        routeViewDetailPerDay,
        routeViewDetail,
        messageNoData,
        colorMoney,
        prefixMoney,
        ...rest
    } = props;

    //console.log('[Chi tieu]: ' + JSON.stringify(model));
    const renderItem = ({
        item,
        section
    }) => {
        //console.log('[Item]: ' + JSON.stringify(section));
        return (
            <ItemCommon
                routeViewDetail={routeViewDetail}
                date={section.title}
                title={item.title}
                money={item.money}
                colorMoney={colorMoney}
                prefixMoney={prefixMoney}
                content={item.content}
                navigation={navigation}
                id={item.id}
            />
        );
    }

    const renderSectionListHeader = ({ section }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(routeViewDetailPerDay, { ...section })}>
                <View style={[
                    style.sectionHeaderStyle,
                    style.row,
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }]}>
                    <View>
                        <Text>
                            {section.title}
                            <Text style={{
                                color: colorMoney,
                                fontSize: 19
                            }}> ({prefixMoney}{section.totalMoneyDisplay})</Text>
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            marginRight: 5
                        }}>
                            <AntDesign
                                name='setting'
                                size={28}
                                onPress={() => { }} />
                        </View>
                        <MaterialIcons
                            name='navigate-next'
                            size={30}
                            onPress={() => navigation.navigate(routeViewDetailPerDay, { ...section })} />
                    </View>
                </View>
            </TouchableOpacity >
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
            {model.entities.length > 0 ?
                renderSectionList()
                : <NoDataComponent
                    message={messageNoData} />}
            {renderButtonFilter()}
            {renderButtonAdd()}
        </SafeAreaView>
    )
}

export default ListViewComponent;