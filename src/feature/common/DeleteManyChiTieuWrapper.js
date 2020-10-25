import React from 'react';
import DeleteManyChiTieuComponent from './DeleteManyComponent';
import { useDispatch, useSelector } from 'react-redux';

const DeleteManyChiTieuWrapper = props => {
    const {
        id
    } = props;
    const dispatch = useDispatch();
    const {
        entities
    } = useSelector(state => state.deleteMany.chiTieu);
    console.log('[deleteMany=>chitieu]: ' + JSON.stringify(entities))

    const handleDeleteManyItemChiTieu = () => {

    }

    return (
        entities.length
            ? <DeleteManyChiTieuComponent
                totalItem={entities.length}
                onDeleteManyItem={handleDeleteManyItemChiTieu} />
            : null
    );
};

export default DeleteManyChiTieuWrapper;