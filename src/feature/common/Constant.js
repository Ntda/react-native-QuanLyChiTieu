import { Platform } from "react-native";

const ROUTETHUNHAP = 'ThuNhap';
const ROUTECHITIEU = 'ChiTieu';
const ROUTETHONGKE = 'ThongKe';
const ICONTHUNHAP = 'arrow-undo';
const ICONTHUNHAPOUTLINE = 'arrow-undo-outline';
const ICONCHITIEU = 'arrow-redo';
const ICONCHITIEUOUTLINE = 'arrow-redo-outline';
const ICONTHONGKE = 'bar-chart';
const ICONTHONGKEOUTLINE = 'bar-chart-outline';
const NAVIGATIONTITLE = {
    thuNhap: 'Thu nhập',
    chiTieu: 'Chi tiêu',
    thongKe: 'Thống kê'
};
const STACKNAVIGATIONROUTE = {
    home: 'Home',
    themChiTieu: 'ThemChiTieu',
    timeRange: 'timeRange'
}

const TIMERANGEROUTE = {
    route: 'Xem',
    title: 'Khoảng thời gian'
}

const THEMCHITIEUTITLE = 'Thêm chi tiêu';

const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });
const FOCUSON = {
    TITLE: 'Title',
    CONTENT: 'Content'
}

const LOCALSTOREKEY = '@QuanLyChiTieu';

const TIMERANGE = [
    { label: 'Hôm nay', value: 0 },
    { label: 'Tuần này', value: 1 },
    { label: 'Tháng này', value: 2 },
    { label: 'Năm nay', value: 3 },
    { label: 'Khoảng thời gian', value: 4 }];


export {
    ROUTETHUNHAP,
    ROUTECHITIEU,
    ROUTETHONGKE,
    ICONTHUNHAP,
    ICONCHITIEU,
    ICONTHONGKE,
    ICONTHUNHAPOUTLINE,
    ICONCHITIEUOUTLINE,
    ICONTHONGKEOUTLINE,
    NAVIGATIONTITLE,
    STACKNAVIGATIONROUTE,
    THEMCHITIEUTITLE,
    NAVBAR_HEIGHT,
    STATUS_BAR_HEIGHT,
    FOCUSON,
    LOCALSTOREKEY,
    TIMERANGEROUTE,
    TIMERANGE
}