import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        fontWeight: 'normal',
        fontSize: 17,
        padding: 5,
        backgroundColor: 'gray',
        borderRadius: 5
    },
    ammount: {
        backgroundColor: 'tomato'
    },
    description: {
        marginTop: 20,
        backgroundColor: '#d9f2e6',
        padding: 20,
        borderRadius: 20
    },
    content: {
        fontSize: 20,
        color: '#595959'
    }
})

const Detail = ({
    route,
    navigation
}) => {
    //console.log('[Detail]: ' + JSON.stringify(route.params));
    const {
        id,
        type,
        title,
        date,
        money,
        content } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: 'Chi tiết'
        });
    }, []);

    const renderTitle = () => {
        return (
            <View>
                <Text style={styles.title}>
                    {title}{' '}
                    <View style={styles.date}>
                        <Text>{date}</Text>
                    </View>
                    <Text>{' '}</Text>
                    <View style={[styles.date, styles.ammount]}>
                        <Text>{type === 'chitieu'
                            ? '- '
                            : ''}
                            {money}</Text>
                    </View>
                </Text>
            </View>
        )
    }

    const renderContent = () => {
        return (
            <View style={styles.description}>
                <Text style={styles.content}>
                    {content}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderTitle()}
            {renderContent()}
        </View>
    );
};

export default Detail;
