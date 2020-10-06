import React, { useEffect } from 'react';
import { TIMERANGE, TIMERANGEROUTE } from '../common/Constant';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import {
    View,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';

const TimeRange = ({ navigation }) => {
    const renderStyleHeader = () => {
        return ({
            title: TIMERANGEROUTE.title,
            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        });
    }

    useEffect(() => {
        navigation.setOptions({
            ...renderStyleHeader()
        });
    }, [navigation]);
    return (
        <View>
            <RadioForm
                animation
                buttonColor={'#50C900'}
            >
                {/* To create radio buttons, loop through your array of options */}
                {
                    TIMERANGE.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={i} >
                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected
                                onPress={() => { }}
                                borderWidth={1}
                                buttonInnerColor={'#0e5eef'}
                                buttonOuterColor={0 === i ? '#2196f3' : 'gray'}
                                buttonSize={33}
                                buttonOuterSize={40}
                                buttonStyle={{}}
                                buttonWrapStyle={{ marginLeft: 10 }}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={() => { }}
                                labelStyle={{ fontSize: 25, color: 'gray' }}
                                labelWrapStyle={{}}
                            />
                        </RadioButton>
                    ))
                }
            </RadioForm>
        </View>
    );
};

export default TimeRange;