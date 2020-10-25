import { createSlice } from '@reduxjs/toolkit';
import {isEqual} from 'lodash';

const deleteModel = {
    entities: [],
};

const filterSlice = createSlice({
    name: 'delete/deleteMany',
    initialState: {
        thuNhap: {
            ...deleteModel
        },
        chiTieu: {
            ...deleteModel
        }
    },
    reducers: {
        setSelectedItemChiTieu: (state, action) => {
            const {
                dataId,
                selected
            } = action.payload;
            if (selected) {
                state.chiTieu.entities.push(dataId);
            } else {
                let { entities } = state.chiTieu
                state.chiTieu.entities = entities.filter(id => !isEqual(id, dataId));
                console.log('[Delete]: '+ JSON.stringify(entities))
            }
        },
        setSelectedItemThuNhap: (state, action) => {
            const {
                dataId,
                selected
            } = action.payload;
            if (selected) {
                state.thuNhap.entities.push(dataId);
            } else {
                let { entities } = state.thuNhap
                entities = entities.filter(id => !isEqual(id, dataId));
            }
        }
    }
})
const { actions, reducer } = filterSlice;
const {
    setSelectedItemChiTieu,
    setSelectedItemThuNhap
} = actions;
export {
    setSelectedItemChiTieu,
    setSelectedItemThuNhap
}
export default reducer;