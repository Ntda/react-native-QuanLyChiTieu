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
    themThuNhap: 'ThemThuNhap',
    timeRange: 'timeRange',
    chitiet:'ChiTiet'
}

const TIMERANGEROUTE = {
    route: 'Xem',
    title: 'Khoảng thời gian'
}

const ICONTYPE = {
    ICONFILTERANT: 'ICONFILTERANT',
    ICONFILTERAWARESOME: 'ICONFILTERAWARESOME'
}

const THEMCHITIEUTITLE = 'Thêm chi tiêu';

const THEMTHUNHAPTITLE = 'Thêm thu nhập';

const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });
const FOCUSON = {
    TITLE: 'Title',
    CONTENT: 'Content'
}

const LOCALSTOREKEY={
    THUNHAP: '@QuanLyThuNhap',
    CHITIEU: '@QuanLyChiTieu'
};

const TABTYPE={
    CHITIEU: 'chiTieu',
    THUNHAP: 'ThuNhap',
    THONGKE: 'ThongKe'
}

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
    THEMTHUNHAPTITLE,
    NAVBAR_HEIGHT,
    STATUS_BAR_HEIGHT,
    FOCUSON,
    LOCALSTOREKEY,
    TIMERANGEROUTE,
    ICONTYPE,
    TABTYPE
}