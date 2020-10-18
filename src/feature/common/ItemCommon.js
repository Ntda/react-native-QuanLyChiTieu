import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import { getRandomColor } from './ColorPicker';
import AvartarSelector from './AvartarSelector';

const widthDimension = Dimensions.get('window').width;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        padding: 10,
        fontSize: 22
    },
    item: {
        color: 'black'
    }
});

const ItemCommon = props => {
    const {
        routeViewDetail,
        date,
        title,
        money,
        colorMoney,
        prefixMoney,
        content,
        navigation
    } = props;
    return (
        <TouchableHighlight
            style={{
                marginTop: 5,
                borderRadius: 20,
                backgroundColor: 'transparent'
            }}
            onPress={() => navigation.navigate(routeViewDetail, {
                title,
                date,
                money,
                content
            })}
            underlayColor='#e6f9ff'>
            <View
                style={styles.row}>
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
                                    title={title}
                                    color={getRandomColor()} />
                            </View>
                            <View>
                                <Text
                                    numberOfLines={1}
                                    style={[{
                                        fontSize: 21,
                                        width: widthDimension - 150
                                    }, styles.item]}>
                                    {title}
                                </Text>
                                <Text style={[styles.item, {
                                    color: colorMoney
                                }]}>
                                    {prefixMoney}{money}
                                </Text>
                                <Text
                                    numberOfLines={2}
                                    style={{
                                        color: 'gray',
                                        width: widthDimension - 100
                                    }}>
                                    {content}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableHighlight >
    );
};

export default ItemCommon;