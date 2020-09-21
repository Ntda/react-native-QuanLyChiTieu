import React, { Component } from 'react';
import {
    Animated,
    Image,
    Platform,
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight,
    Button
} from 'react-native';

import moment from 'moment'

import { dataChiTieu as data } from './testData/testData';
import { SafeAreaView } from 'react-native-safe-area-context';
import { STACKNAVIGATIONROUTE } from './Constant';

const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

const AnimatedListView = Animated.createAnimatedComponent(FlatList);

class ChiTieuTemp extends Component {
    constructor(props) {
        super(props);

        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);

        this.state = {
            dataSource: data,
            scrollAnim,
            offsetAnim,
            clampedScroll: Animated.diffClamp(
                Animated.add(
                    scrollAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolateLeft: 'clamp',
                    }),
                    offsetAnim,
                ),
                0,
                NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
            ),
        };
    }

    _clampedScrollValue = 0;
    _offsetValue = 0;
    _scrollValue = 0;

    componentDidMount() {
        this.state.scrollAnim.addListener(({ value }) => {
            const diff = value - this._scrollValue;
            this._scrollValue = value;
            this._clampedScrollValue = Math.min(
                Math.max(this._clampedScrollValue + diff, 0),
                NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
            );
        });
        this.state.offsetAnim.addListener(({ value }) => {
            this._offsetValue = value;
        });
    }

    componentWillUnmount() {
        this.state.scrollAnim.removeAllListeners();
        this.state.offsetAnim.removeAllListeners();
    }

    _onScrollEndDrag = () => {
        this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
    };

    _onMomentumScrollBegin = () => {
        clearTimeout(this._scrollEndTimer);
    };

    _onMomentumScrollEnd = () => {
        const toValue = this._scrollValue > NAVBAR_HEIGHT &&
            this._clampedScrollValue > (NAVBAR_HEIGHT - STATUS_BAR_HEIGHT) / 2
            ? this._offsetValue + NAVBAR_HEIGHT
            : this._offsetValue - NAVBAR_HEIGHT;

        Animated.timing(this.state.offsetAnim, {
            toValue,
            duration: 350,
            useNativeDriver: true,
        }).start();
    };

    renderItem = ({
        item,
        index,
        separators
    }) => {
        return (
            <TouchableHighlight
                key={index}
                onPress={() => alert(item.title)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View
                    key={index}
                    style={styles.row}>
                    <Text style={[{
                        fontSize: 25
                    }, styles.item]}>
                        {item.title}
                    </Text>
                    <Text style={styles.item}>
                        {moment(item.time).format('LL')}
                    </Text>
                    <Text>
                        {item.spend}
                    </Text>
                    <Text>
                        {item.content}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    _renderButtonAdd = () => <Button
        title='Add'
        onPress={() => this.props.navigation.navigate(STACKNAVIGATIONROUTE.themChiTieu)}
    />;

    render() {
        const { clampedScroll } = this.state;

        const navbarTranslate = clampedScroll.interpolate({
            inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
            outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT)],
            extrapolate: 'clamp',
        });
        const navbarOpacity = clampedScroll.interpolate({
            inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });


        return (
            <SafeAreaView style={styles.fill}>
                <AnimatedListView
                    contentContainerStyle={styles.contentContainer}
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={({ index }) => index}
                    scrollEventThrottle={1}
                    onMomentumScrollBegin={this._onMomentumScrollBegin}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    onScrollEndDrag={this._onScrollEndDrag}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                        { useNativeDriver: true },
                    )}
                />
                {this._renderButtonAdd()}
                <Animated.View style={[
                    styles.navbar,
                    {
                        transform: [{
                            translateY: navbarTranslate
                        }]
                    }]
                }>
                    <Animated.Text style={[
                        styles.title,

                    ]}>
                        PLACES
          </Animated.Text>
                </Animated.View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        height: NAVBAR_HEIGHT,
        justifyContent: 'center',
        paddingTop: STATUS_BAR_HEIGHT,
    },
    contentContainer: {
        paddingTop: 50,
    },
    title: {
        color: '#333333',
        backgroundColor: 'transparent'
    },
    row: {
        height: 150,
        width: null,
        marginBottom: 1,
        backgroundColor: 'transparent',
    },
    rowText: {
        color: 'white',
        fontSize: 18
    },
});

export default ChiTieuTemp;