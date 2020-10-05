const getNumberFromString = source => {
    const sourceString = source.toString();
    if (!sourceString.length) {
        return source;
    }
    var matches = sourceString.match(/\d/g)||[];
    return matches.join('');
}

const reverseString = str => str
    .toString()
    .split('')
    .reverse()
    .join('');

const commaFormatted = amount => {
    const amountString = reverseString(amount.toString());

    let numberFormaterResult = '';
    for (let i = 0; i < amountString.length; i++) {
        numberFormaterResult += (i > 0 && i % 3 === 0)
            ? `.${amountString[i]}`
            : amountString[i];
    }
    return reverseString(numberFormaterResult);
}

export {
    getNumberFromString,
    commaFormatted
}