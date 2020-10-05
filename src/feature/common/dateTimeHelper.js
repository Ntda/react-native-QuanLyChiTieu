const convertTime12to24 = time12h => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}:00`;
}

const compareTime = (source, dest) => {
    const dateTimeSource = Date.parse(`01/01/2011 ${source}`);
    const dateTimeDest = Date.parse(`01/01/2011 ${dest}`);
    if (dateTimeSource > dateTimeDest) {
        return -1;
    }
    if (dateTimeSource < dateTimeDest) {
        return 1;
    }
    return 0;
}

export {
    convertTime12to24,
    compareTime
}