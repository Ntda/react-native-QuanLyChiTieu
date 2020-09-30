import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    TouchableHighlight,
    Button
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
    }
})

const ChiTieu = ({ navigation }) => {
    const dispatch = useDispatch();
    const model = useSelector(state => state.chiTieu);
    if (!model.chiTieuArray) {
        return <View>Loading...</View>;
    }

    const renderItem = ({
        item
    }) => {
        return (
            <TouchableHighlight
                style={{
                    marginTop: 5,
                    borderRadius: 20
                }}
                onPress={()=>{}}
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
                                        color={getRandomColor()}/>
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
                                        {item.spend}
                                    </Text>
                                    <Text style={{ color: 'gray' }}>
                                        {item.content}
                                    </Text>
                                </View>
                            </View>

                        </View>
                        <View>
                            <Text style={style.item}>
                                {moment(item.date).format('ll')}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight >
        );
    }

    const renderListView = () => <FlatList
        data={model.chiTieuArray}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
    />;

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
            {renderListView()}
            {renderButtonAdd()}
        </SafeAreaView>
    )
}

export default ChiTieu;