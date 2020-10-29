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

const getMonday = d => {
    d = new Date(d);
    const day = d.getDay();
    const diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

const buildDataPieChart = (ammountThuNhap, ammountChiTieu) => {
    if (!ammountThuNhap || ammountThuNhap < ammountChiTieu) {
        return [{
            key: 'chiTieu',
            amount: ammountChiTieu,
            svg: { fill: CHART.COLORCHITIEU }
        }]
    }
    if (!ammountChiTieu) {
        return [{
            key: 'sodu',
            amount: ammountThuNhap,
            svg: { fill: CHART.COLORCONLAI }
        }]
    }

    return [{
        key: 'chiTieu',
        amount: ammountChiTieu,
        svg: { fill: CHART.COLORCHITIEU }
    }, {
        key: 'sodu',
        amount: ammountThuNhap - ammountChiTieu,
        svg: { fill: CHART.COLORCONLAI }
    }]
}

export {
    totalMoney,
    buildTotalMoneyPerDay,
    totalMoneyPerDayFormatted,
    executeFilter,
    buildTotalMoneyBaseOnTimeRange,
    buildDataPieChart,
    getMonday
};