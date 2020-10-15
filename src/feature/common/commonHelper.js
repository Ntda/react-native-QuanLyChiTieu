import {
    getNumberFromString,
    commaFormatted
} from './numberFormater';
import moment from 'moment';
import { isEqual } from 'lodash';
import { CHART } from './Constant';

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
            key: 'chiTieu',
            amount: 100,
            svg: { fill: CHART.COLORCONLAI }
        }]
    }
    if (!ammountChiTieu) {
        return [{
            key: 'sodu',
            amount: 100,
            svg: { fill: CHART.COLORCHITIEU }
        }]
    }

    const percent = ammountChiTieu / ammountThuNhap * 100;
    const ceilPercent = Math.ceil(percent);

    return [{
        key: 'chiTieu',
        amount: ceilPercent,
        svg: { fill: CHART.COLORCONLAI }
    }, {
        key: 'sodu',
        amount: 100 - ceilPercent,
        svg: { fill: CHART.COLORCHITIEU }
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