import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight,
    Button,
    SectionList
} from 'react-native';
import moment from 'moment';
import { LOCALSTOREKEY, STACKNAVIGATIONROUTE } from '../common/Constant';
import { getRandomColor } from '../common/ColorPicker';
import { useDispatch } from 'react-redux';
import { getItem } from '../common/localStoreHelper';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import AvartarSelector from './AvartarSelector';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
})

const ChiTieu = ({ navigation }) => {
    const dispatch = useDispatch();
    const model = useSelector(state => state.chiTieu);
    if (!model.chiTieuArray) {
        return <View>Loading...</View>;
    }

    console.log('[Chi tieu]: ' + JSON.stringify(model.chiTieuArray));
    const renderItem = ({
        item
    }) => {
        debugger
        console.log('[Chi tieu]=> Item: ' + JSON.stringify(item));
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
                        <View>
                            <Text style={style.item}>
                                {item.time}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight >
        );
    }

    const renderSectionList = () => {
        return (
            <SectionList
                sections={model.chiTieuArray}
                renderSectionHeader={({ section }) => (
                    <Text style={[style.sectionHeaderStyle, style.row]}>
                        {moment(new Date(section.title)).format('ll')}
                    </Text>
                )}
                renderItem={renderItem}
                keyExtractor={(_, index) => index} />
        )
    }

    const renderButtonFilter = () => <View style={{
        position: 'absolute',
        bottom: 50,
        right: 10,
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
        paddingLeft: 30,
        paddingRight: 25,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row'
    }}>

        <AntDesign
            style={{
                color: 'red',
                marginRight: 10
            }}
            name='filter'
            size={25}
            onPress={() => { }} />
        <Text style={{
            color: 'red',
            fontSize: 15,
            fontFamily: 'Times'
        }}
            onPress={() => navigation.navigate(STACKNAVIGATIONROUTE.themChiTieu)}>
            Loc
        </Text>
    </View >;

    const renderButtonAdd = () => <View style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
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
        paddingLeft: 30,
        paddingRight: 25,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row'
    }}>
        <AntDesign
            style={{
                color: 'red',
                marginRight: 10
            }}
            name='edit'
            size={25}
            onPress={() => { }} />
        <Text style={{
            color: 'red',
            fontSize: 15,
            fontFamily: 'Times'
        }}
            onPress={() => navigation.navigate(STACKNAVIGATIONROUTE.themChiTieu)}>
            Thêm
        </Text>
    </View>
        ;

    useEffect(() => {
        dispatch(getItem(LOCALSTOREKEY))
    }, []);;
    return (
        <SafeAreaView style={style.container}>
            {renderSectionList()}
            {renderButtonFilter()}
            {renderButtonAdd()}
        </SafeAreaView>
    )
}

export default ChiTieu;