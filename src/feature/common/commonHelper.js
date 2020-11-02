import {
    getNumberFromString,
    commaFormatted
} from './numberFormater';
import moment from 'moment';
import { isEqual } from 'lodash';
import { CHART, CHARTCOLOR } from './Constant';
import { nanoid } from '@reduxjs/toolkit';

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

const getFirstDayOfMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
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

const buildVerticalCalendarOfCurrentYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthDataSource = [];
    for (let i = currentDate.getMonth() + 1; i >= 1; i--) {
        monthDataSource.push({
            id: nanoid(),
            month: i,
            year: currentYear
        });
    }
    return monthDataSource;
}

const filterEntitiesByMonthYear = (entities, month, year) => {
    return entities.filter(e => {
        const dateStringToTypeDate = new Date(e.title);
        const currentMonth = dateStringToTypeDate.getMonth() + 1;
        const currentYear = dateStringToTypeDate.getFullYear();
        return isEqual(month, currentMonth) && isEqual(year, currentYear);
    });
}

const calculateAmountPerMonth = (
    thuNhapEntities,
    chiTieuEntities
) => {
    let totalThuNhapPerMonth = 0;
    let totalChiTieuPerMonth = 0;
    for (let i = 0; i < thuNhapEntities.length; i++) {
        totalThuNhapPerMonth += thuNhapEntities[i].totalMoney;
    }
    for (let i = 0; i < chiTieuEntities.length; i++) {
        totalChiTieuPerMonth += chiTieuEntities[i].totalMoney;
    }

    return {
        thuNhapFormatter: `${commaFormatted(totalThuNhapPerMonth)} đ`,
        thuNhap: (totalThuNhapPerMonth / 10000),
        chiTieuFormatter: `${commaFormatted(totalChiTieuPerMonth)} đ`,
        chiTieu: (totalChiTieuPerMonth / 10000),
        conLaiFormatter: `${commaFormatted(totalThuNhapPerMonth - totalChiTieuPerMonth)} đ`,
        conLai: ((totalThuNhapPerMonth - totalChiTieuPerMonth) / 10000)
    }
}

const buildDescriptionThongKeChart = (
    thuNhapFormatter,
    chiTieuFormatter,
    conLaiFormatter
) => {
    return [{
        title: 'Thu nhập',
        ammount: `+ ${thuNhapFormatter}`,
        color: CHARTCOLOR.THUNHAP
    },
    {
        title: 'Chi tiêu',
        ammount: `- ${chiTieuFormatter}`,
        color: CHARTCOLOR.CHITIEU
    },
    {
        title: 'Còn lại',
        ammount: conLaiFormatter,
        color: CHARTCOLOR.CONLAI
    }]
}

export {
    totalMoney,
    buildTotalMoneyPerDay,
    totalMoneyPerDayFormatted,
    executeFilter,
    buildTotalMoneyBaseOnTimeRange,
    buildDataPieChart,
    getFirstDayOfMonth,
    buildVerticalCalendarOfCurrentYear,
    calculateAmountPerMonth,
    filterEntitiesByMonthYear,
    buildDescriptionThongKeChart
};