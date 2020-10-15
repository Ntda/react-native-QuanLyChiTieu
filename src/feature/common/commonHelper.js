import {
    getNumberFromString,
    commaFormatted
} from './numberFormater';
import moment from 'moment';
import { isEqual } from 'lodash';

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalMoney = spends => spends.reduce(reducer, 0);

const buildTotalMoneyPerDay = payload => {
    for (let i = 0; i < payload.length; i++) {
        const { data } = payload[i];
        const moneySpends = data.map(d => {
            const moneyString = getNumberFromString(d.money);
            return Number(moneyString);
        });
        const total = totalMoney(moneySpends);
        payload[i].totalMoney = total;
    }
}

const totalMoneyPerDayFormatted = payload => {
    for (let i = 0; i < payload.length; i++) {
        const { totalMoney } = payload[i];
        payload[i].totalMoneyDisplay = `${commaFormatted(totalMoney)} đ`;
    }
}

const buildTotalMoneyBaseOnTimeRange = payload => {
    const spends = payload.map(p => Number(p.totalMoney));
    return totalMoney(spends);
}

const executeFilter = (array, filterModel) => {
    const today = moment(new Date()).format('LL');
    const { fromDate, toDate, isShowToday } = filterModel;
    if (isShowToday) {
        const resultFilter = array.filter(f => isEqual(f.title, today));
        return resultFilter;
    }
    return array.filter(c => {
        const fromDateTypeDate = new Date(fromDate);
        const toDateTypeDate = new Date(toDate);
        const titleTypeDate = new Date(c.title);
        return fromDateTypeDate <= titleTypeDate &&
            titleTypeDate <= toDateTypeDate;
    });
}

const buildDataPieChart = (ammountThuNhap, ammountChiTieu) => {
    if (!ammountThuNhap) {
        return [{
            key: 1,
            amount: 100,
            svg: { fill: '#a6f5c8' }
        }]
    }
    if (!ammountChiTieu) {
        return [{
            key: 1,
            amount: 100,
            svg: { fill: '#ede1bb' }
        }]
    }

    return [{
        key: 1,
        amount: 50,
        svg: { fill: '#a6f5c8' }
    }, {
        key: 1,
        amount: 50,
        svg: { fill: '#ede1bb' }
    }]
}

export {
    totalMoney,
    buildTotalMoneyPerDay,
    totalMoneyPerDayFormatted,
    executeFilter,
    buildTotalMoneyBaseOnTimeRange,
    buildDataPieChart
};