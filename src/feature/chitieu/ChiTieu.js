import React from 'react';
import { Avatar } from "react-native-elements";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    TouchableHighlight,
    TouchableOpacity,
    Button
} from 'react-native';
import moment from 'moment';
import { dataChiTieu } from '../../testData/testData';
import { STACKNAVIGATIONROUTE } from '../common/Constant';
import { getRandomColor } from '../common/ColorPicker';

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
    const renderItem = ({
        item,
        index
    }) => {
        return (
            <TouchableHighlight
                style={{
                    marginTop: 5,
                    borderRadius: 20
                }}
                key={index}
                onPress={() => alert(item.title)}
                underlayColor='#e6f9ff'>
                <View
                    key={index}
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
                                    <Avatar
                                        overlayContainerStyle={{ backgroundColor: getRandomColor() }}
                                        size='medium'
                                        rounded
                                        title={item.title.charAt(0).toUpperCase()}
                                        activeOpacity={0.7}
                                    />
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
                                {moment(item.time).format('ll')}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight >
        );
    }

    const renderListView = () => <FlatList
        data={dataChiTieu}
        renderItem={renderItem}
        keyExtractor={renderKey}
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

    const renderKey = ({
        index
    }) => index;
    return (
        <SafeAreaView style={style.container}>
            {renderListView()}
            {renderButtonAdd()}
        </SafeAreaView>
    )
}

export default ChiTieu;