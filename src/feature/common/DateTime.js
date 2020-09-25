import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTime = ({
    handleHideDatePicker,
    handleUpdateDate,
    defaultDate }) => {

    return (
        <DateTimePickerModal
            isVisible
            mode="date"
            date={defaultDate}
            cancelTextIOS='Thoát'
            confirmTextIOS='Xác nhận'
            headerTextIOS='Chọn ngày'
            onConfirm={handleUpdateDate}
            onCancel={handleHideDatePicker}
        />
    );
};

export default DateTime;