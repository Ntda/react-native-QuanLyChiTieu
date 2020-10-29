import React from 'react';
import DeleteManyComponent from '../common/DeleteManyComponent';
import { useDispatch, useSelector } from 'react-redux';
import { deleteManyItemChiTieu } from '../common/localStoreHelper';
import { LOCALSTOREKEY } from '../common/Constant';
import { clearDeleteItemChiTieu } from '../delete/deleteSlice';

const DeleteManyChiTieuWrapper = () => {
    const dispatch = useDispatch();
    const {
        entities
    } = useSelector(state => state.deleteMany.chiTieu);
    console.log('[deleteMany=>chitieu]: ' + JSON.stringify(entities))

    const handleDeleteManyItemChiTieu = async () => {
        const model = {
            entities,
            localStoreKey: LOCALSTOREKEY.CHITIEU
        }
        await dispatch(deleteManyItemChiTieu(model));
        await dispatch(clearDeleteItemChiTieu());
    }

    const confirmModel = {
        message: 'Xóa chi tiêu',
        buttonTextCancel: 'Cancel',
        styleButtonCancel: 'cancel',
        onCancel: () => { },
        buttonTextOK: 'OK',
        styleButtonOK: 'ok',
        onOK: handleDeleteManyItemChiTieu
    };

    return (
        entities.length
            ? <DeleteManyComponent
                totalItem={entities.length}
                confirmModel={confirmModel} />
            : null
    );
};

export default DeleteManyChiTieuWrapper;