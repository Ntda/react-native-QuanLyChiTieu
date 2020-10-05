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
    if (source > dest) {
        return -1;
    }
    if (source < dest) {
        return 1;
    }
    return 0;
}

export {
    convertTime12to24,
    compareTime
}