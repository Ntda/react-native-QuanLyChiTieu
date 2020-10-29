import { createSlice } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';

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
        clearDeleteItemChiTieu: (state, _) => {
            state.chiTieu.entities.length = 0;
        },
        clearDeleteItemThuNhap: (state, _) => {
            state.thuNhap.entities.length = 0;
        },
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

            }
        },
        setSelectedItemThuNhap: (state, action) => {
            console.log('[setSelectedItemThuNhap]: ' + JSON.stringify(action))
            const {
                dataId,
                selected
            } = action.payload;
            if (selected) {
                state.thuNhap.entities.push(dataId);
            } else {
                let { entities } = state.thuNhap
                state.thuNhap.entities = entities.filter(id => !isEqual(id, dataId));
            }
        }
    }
})
const { actions, reducer } = filterSlice;
const {
    setSelectedItemChiTieu,
    setSelectedItemThuNhap,
    clearDeleteItemChiTieu,
    clearDeleteItemThuNhap
} = actions;
export {
    setSelectedItemChiTieu,
    setSelectedItemThuNhap,
    clearDeleteItemChiTieu,
    clearDeleteItemThuNhap
}
export default reducer;