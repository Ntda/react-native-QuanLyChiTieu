import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import confirmWrapper from '../common/confirmWrapper';
import useSetHeaderDetail from './useSetHeaderDetail';
import AntDesign from 'react-native-vector-icons/AntDesign';

const useDeleteDetail = props => {
    const {
        date,
        dataId,
        localStoreKey,
        action,
        navigation,
        message,
        buttonTextCancel,
        styleButtonCancel,
        buttonTextOK,
        styleButtonOK,
        titleHeader
    } = props;

    const dispatch = useDispatch();
    const executeDelete = async () => {
        const deleteModel = {
            date,
            dataId,
            localStoreKey
        }
        await dispatch(action(deleteModel));
        navigation.popToTop();
    }

    const handleDeleteChiTieu = async () => {
        const confirmModel = {
            message,
            buttonTextCancel,
            styleButtonCancel,
            onCancel: () => { },
            buttonTextOK,
            styleButtonOK,
            onOK: executeDelete
        };
        await confirmWrapper(confirmModel);
    }

    const deleteIcon = <AntDesign
        name='delete'
        size={25} />

    const headerModel = {
        navigation,
        title: titleHeader,
        onDelete: handleDeleteChiTieu,
        children: deleteIcon
    }

    useSetHeaderDetail(headerModel);
};

export default useDeleteDetail;