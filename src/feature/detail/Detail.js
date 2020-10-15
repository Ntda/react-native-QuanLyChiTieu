import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    title: {
        color: 'black',
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

const Detail = props => {
    const {
        title,
        date,
        content } = props.route.params;

    const renderTitle = () => {
        return (
            <View>
                <Text style={[styles.title]}>
                    {title}{' '}
                    <View style={styles.date}>
                        <Text>{date}</Text>
                    </View>
                    <Text>{' '}</Text>
                    <View style={[styles.date, styles.ammount]}>
                        {props.children}
                    </View>
                </Text>
            </View>
        )
    }

    const renderContent = () => {
        return (
            <View style={[styles.description]}>
                <Text style={styles.content}>
                    {content}
                </Text>
            </View>
        )
    }

    return (
        <>
            {renderTitle()}
            {renderContent()}
        </>
    );
};

export default Detail;
