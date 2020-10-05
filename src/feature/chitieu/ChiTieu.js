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
        backgroundColor: '#efe3db',
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

    console.log('[Chi tieu]: '+ JSON.stringify(model.chiTieuArray));
    const renderItem = ({
        item
    }) => {
        debugger
        console.log('[Chi tieu]=> Item: '+ JSON.stringify(item));
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

    const renderButtonAdd = () => <View style={{
        marginBottom: 20,
        backgroundColor: 'red',
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
    }}>
        <Button
            title='Add'
            onPress={() => navigation.navigate(STACKNAVIGATIONROUTE.themChiTieu)}
        />
    </View>;

    useEffect(() => {
        dispatch(getItem(LOCALSTOREKEY))
    }, []);;
    return (
        <SafeAreaView style={style.container}>
            {renderSectionList()}
            {renderButtonAdd()}
        </SafeAreaView>
    )
}

export default ChiTieu;