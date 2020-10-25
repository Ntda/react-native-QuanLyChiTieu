import React from 'react';
import PropTypes from 'prop-types';
import DeleteManyChiTieuComponent from './DeleteManyComponent';
import { useDispatch, useSelector } from 'react-redux';

const DeleteManyThuNhapWrapper = props => {
    const {
        dataId
    } = props;
    const dispatch = useDispatch();
    const {
        totalItem,
        canDelete
    } = useSelector(state => state.deleteMany.thuNhap);

    const handleDeleteManyItemThuNhap = () => {

    }

    return (
        canDelete
            ? <DeleteManyChiTieuComponent
                totalItem={totalItem}
                onDeleteManyItem={handleDeleteManyItemThuNhap} />
            : null
    );
};

export default DeleteManyThuNhapWrapper;