import { getNumberFromString, commaFormatted } from "./numberFormater";

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalMoney = spends => spends.reduce(reducer);

const buildTotalMoney = payload => {
    for (let i = 0; i < payload.length; i++) {
        const { data } = payload[i];
        const moneySpends = data.map(d => {
            const moneyString = getNumberFromString(d.money);
            return Number(moneyString);
        });
        const total = totalMoney(moneySpends);
        payload[i].totalMoney = `${commaFormatted(total)} đ`;
    }
}

export {
    totalMoney,
    buildTotalMoney
};