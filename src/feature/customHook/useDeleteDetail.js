import React from 'react';
import confirmWrapper from '../common/confirmWrapper';
import useSetHeaderDetail from './useSetHeaderDetail';
import AntDesign from 'react-native-vector-icons/AntDesign';

const useDeleteDetail = props => {
    const {
        date,
        dataId,
        localStoreKey,
        onDelete,
        navigation,
        message,
        buttonTextCancel,
        styleButtonCancel,
        buttonTextOK,
        styleButtonOK,
        titleHeader
    } = props;

    const executeDelete = async () => {
        const deleteModel = {
            date,
            dataId,
            localStoreKey
        }
        await onDelete(deleteModel);
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