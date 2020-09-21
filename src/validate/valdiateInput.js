'use strict'

const inputValid = (fieldName, value) => {
    return value
        ? {
            valid: true,
            message: ''
        }
        : {
            valid: false,
            message: `${fieldName} không bỏ trống`
        }
};

export default inputValid;