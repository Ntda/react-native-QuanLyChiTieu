import React, { useState } from 'react';
import { Avatar } from "react-native-elements";
import CheckBox from 'react-native-check-box';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATIONTITLE } from './Constant';
import { setSelectedItemChiTieu, setSelectedItemThuNhap } from '../delete/deleteSlice';
import { isEqual } from 'lodash';

const AvartarSelector = props => {
    const {
        tabType,
        id
    } = props;
    const dispatch = useDispatch();
    const state = useSelector(state => state.deleteMany);
    const itemsDeleted = isEqual(tabType, NAVIGATIONTITLE.chiTieu)
        ? state.chiTieu.entities
        : state.thuNhap.entities;
    const [displayAvatar, setDisplayAvatar] = useState(!itemsDeleted.some(item => isEqual(item, id)));

    const handleDisplayAvatar = canDisplay => {

        const payload = {
            dataId: id,
            selected: !canDisplay
        };
        switch (tabType) {
            case NAVIGATIONTITLE.chiTieu:
                dispatch(setSelectedItemChiTieu(payload));
                break;
            case NAVIGATIONTITLE.thuNhap:
                dispatch(setSelectedItemThuNhap(payload));
                break;
        }

        setDisplayAvatar(canDisplay);
    }
    const renderAvatar = () => {
        return (
            <Avatar
                overlayContainerStyle={{ backgroundColor: props.color }}
                size='medium'
                rounded
                title={props.title.charAt(0).toUpperCase()}
                activeOpacity={0.7}
                onPress={() => handleDisplayAvatar(false)}
            />);
    }
    const renderCheckedIcon = () => {
        return (
            <CheckBox
                checkedCheckBoxColor='#1F85DE'
                onClick={() => handleDisplayAvatar(true)}
                isChecked
                checkedImage={<Image source={require('../../image/check.png')} />}
            />
        );
    }

    return (
        <>
            {displayAvatar
                ? renderAvatar()
                : renderCheckedIcon()}
        </>
    );
};

export default AvartarSelector;