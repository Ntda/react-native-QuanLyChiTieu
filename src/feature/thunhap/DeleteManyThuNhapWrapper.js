import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOCALSTOREKEY } from '../common/Constant';
import DeleteManyComponent from '../common/DeleteManyComponent';
import { deleteManyItemThuNhap } from '../common/localStoreHelper';
import { clearDeleteItemThuNhap } from '../delete/deleteSlice';

const DeleteManyThuNhapWrapper = () => {
    const dispatch = useDispatch();
    const {
        entities
    } = useSelector(state => state.deleteMany.thuNhap);

    const handleDeleteManyItemThuNhap = async () => {
        const model = {
            entities,
            localStoreKey: LOCALSTOREKEY.THUNHAP
        };
        await dispatch(deleteManyItemThuNhap(model));
        await dispatch(clearDeleteItemThuNhap());
    }

    const confirmModel = {
        message: 'Xóa thu nhập',
        buttonTextCancel: 'Cancel',
        styleButtonCancel: 'cancel',
        onCancel: () => { },
        buttonTextOK: 'OK',
        styleButtonOK: 'ok',
        onOK: handleDeleteManyItemThuNhap
    };

    return (
        entities.length
            ? <DeleteManyComponent
                totalItem={entities.length}
                confirmModel={confirmModel} />
            : null
    );
};

export default DeleteManyThuNhapWrapper;