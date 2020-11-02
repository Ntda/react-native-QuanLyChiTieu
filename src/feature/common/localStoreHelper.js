import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { isEqual, cloneDeep } from 'lodash';
import { executeFilter, filterEntitiesByMonthYear } from './commonHelper';
import { LOCALSTOREKEY } from './Constant';

const getItemChiTieu = createAsyncThunk(
    'get/itemChiTieu',
    async model => {
        const result = await getItemFromLocalStorage(model);
        return result;
    }
);

const setItemChiTieu = createAsyncThunk(
    'set/itemChiTieu',
    async (model, { getState }) => {
        const filterModel = getState().filter;
        const filterModelChiTieu = filterModel.chiTieu;
        const result = await setItemToLocalStore(model, filterModelChiTieu);
        return result;
    }
);

const getItemThuNhap = createAsyncThunk(
    'get/itemThuNhap',
    async model => {
        const result = await getItemFromLocalStorage(model);
        return result;
    }
);

const getDataThongKeByMonthAndYear = createAsyncThunk(
    'get/getDataThongKeByMonthAndYear',
    async model => {
        const { selectedMonth, currentYear } = model;
        const jsonValueChiTieu = await AsyncStorage.getItem(LOCALSTOREKEY.CHITIEU);
        const jsonValueThuNhap = await AsyncStorage.getItem(LOCALSTOREKEY.THUNHAP);
        const jsonToArrayChiTieu = jsonValueChiTieu
            ? JSON.parse(jsonValueChiTieu)
            : [];
        const jsonToArrayThuNhap = jsonValueThuNhap
            ? JSON.parse(jsonValueThuNhap)
            : [];
        return {
            thuNhap: filterEntitiesByMonthYear(jsonToArrayThuNhap, selectedMonth, currentYear),
            chiTieu: filterEntitiesByMonthYear(jsonToArrayChiTieu, selectedMonth, currentYear)
        }
    }
);

const setItemThuNhap = createAsyncThunk(
    'set/itemThuNhap',
    async (model, { getState }) => {
        const filterModel = getState().filter;
        const filterModelThuNhap = filterModel.thuNhap;
        const result = await setItemToLocalStore(model, filterModelThuNhap);
        return result;
    }
);

const deleteItemThuNhap = createAsyncThunk(
    'delete/itemThuNhap',
    async (model, { getState }) => {
        console.log('[delete/itemThuNhap]: START');
        const filterModel = getState().filter;
        const filterModelThuNhap = filterModel.thuNhap;
        const { date, localStoreKey, dataId } = model;
        try {

            const jsonValue = await AsyncStorage.getItem(localStoreKey);
            let newArray = jsonValue
                ? JSON.parse(jsonValue)
                : [];

            let indexitemDeleted;
            for (let i = 0; i < newArray.length; i++) {
                console.log('[delete/itemThuNhap]:title: ' + newArray[i].title);
                if (isEqual(newArray[i].title, date)) {
                    indexitemDeleted = i;
                    break;
                }
            }

            let { data } = newArray[indexitemDeleted];
            newArray[indexitemDeleted].data = data.filter(d => !isEqual(d.id, dataId));

            if (!newArray[indexitemDeleted].data.length) {
                newArray = newArray.filter((_, index) => !isEqual(index, indexitemDeleted));
            }

            await AsyncStorage.setItem(localStoreKey, JSON.stringify(newArray), e => {
                console.log('[delete/itemThuNhap->Error: ]' + JSON.stringify(e));
            });
            const getDataModel = {
                localStoreKey,
                ...filterModelThuNhap
            };

            return executeFilter(newArray, getDataModel);
        } catch (err) {
            console.log('[delete/itemThuNhap]err: ' + err.message)
        }
    }
)

const deleteItemChiTieu = createAsyncThunk(
    'delete/itemChiTieu',
    async (model, { getState }) => {
        console.log('[delete/itemChiTieu]: START');
        const filterModel = getState().filter;
        const filterModelChiTieu = filterModel.chiTieu;
        const { date, localStoreKey, dataId } = model;
        try {

            const jsonValue = await AsyncStorage.getItem(localStoreKey);
            let newArray = jsonValue
                ? JSON.parse(jsonValue)
                : [];

            let indexitemDeleted;
            for (let i = 0; i < newArray.length; i++) {
                console.log('[delete/itemChiTieu]:title: ' + newArray[i].title);
                if (isEqual(newArray[i].title, date)) {
                    indexitemDeleted = i;
                    break;
                }
            }

            let { data } = newArray[indexitemDeleted];
            newArray[indexitemDeleted].data = data.filter(d => !isEqual(d.id, dataId));

            if (!newArray[indexitemDeleted].data.length) {
                newArray = newArray.filter((_, index) => !isEqual(index, indexitemDeleted));
            }

            await AsyncStorage.setItem(localStoreKey, JSON.stringify(newArray), e => {
                console.log('[delete/itemChiTieu->Error: ]' + JSON.stringify(e));
            });
            const getDataModel = {
                ...filterModelChiTieu
            };

            return executeFilter(newArray, getDataModel);
        } catch (err) {
            console.log('[delete/itemChiTieu]err: ' + err.message)
        }
    }
)

const deleteManyItemChiTieu = createAsyncThunk(
    'delete/deleteManyItemChiTieu',
    async (model, { getState }) => {
        const filterModel = getState().filter.chiTieu;
        return (await deleteManyItem({
            ...model,
            filterModel
        }));
    }
)

const deleteManyItemThuNhap = createAsyncThunk(
    'delete/deleteManyItemThuNhap',
    async (model, { getState }) => {
        const filterModel = getState().filter.thuNhap;
        return (await deleteManyItem({
            ...model,
            filterModel
        }));
    }
)

const deleteManyItem = async model => {
    const {
        entities,
        localStoreKey,
        filterModel
    } = model;
    const jsonValue = await AsyncStorage.getItem(localStoreKey);
    let newArray = jsonValue
        ? JSON.parse(jsonValue)
        : [];

    for (let i = 0; i < newArray.length; i++) {
        newArray[i].data = newArray[i].data.filter(d => !entities.some(id => isEqual(id, d.id)));
    }

    const arrayResult = newArray.filter(n => n.data.length);

    console.log('[deleteManyItem]: ' + JSON.stringify(arrayResult));
    console.log('[deleteMany]=> Write data to local storage: ' + localStoreKey);

    await AsyncStorage.setItem(localStoreKey, JSON.stringify(arrayResult), e => {
        console.log('[setItemToLocalStore->Error: ]' + JSON.stringify(e));
    });

    return executeFilter(arrayResult, filterModel);
}

const getItemFromLocalStorage = async model => {
    const {
        localStoreKey,
        ...rest } = model;
    const jsonValue = await AsyncStorage.getItem(localStoreKey);
    const jsonToArray = jsonValue
        ? JSON.parse(jsonValue)
        : [];
    return executeFilter(jsonToArray, rest);
}

const setItemToLocalStore = async (model, filter) => {
    const { key, value } = model;
    const jsonValue = await AsyncStorage.getItem(key);
    let newArray = jsonValue
        ? JSON.parse(jsonValue)
        : [];
    const result = newArray.find(c => isEqual(c.title, value.title));
    result
        ? result.data.push(value.data[0])
        : newArray.push(value)

    await AsyncStorage.setItem(key, JSON.stringify(newArray), e => {
        console.log('[setItemToLocalStore->Error: ]' + JSON.stringify(e));
    });
    return executeFilter(newArray, filter);
}

const getDataByDate = async model => {
    const { localStoreKey, date } = model;
    const jsonValue = await AsyncStorage.getItem(localStoreKey);
    let newArray = jsonValue
        ? JSON.parse(jsonValue)
        : [];
    const result = newArray.find(f => isEqual(date, f.title));
    return result
        ? result
        : { data: [] }
}
export {
    getItemChiTieu,
    setItemChiTieu,
    getItemThuNhap,
    setItemThuNhap,
    getDataByDate,
    deleteItemChiTieu,
    deleteItemThuNhap,
    deleteManyItemChiTieu,
    deleteManyItemThuNhap,
    getDataThongKeByMonthAndYear
}