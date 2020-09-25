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
    themChiTieu: 'ThemChiTieu'
}

const THEMCHITIEUTITLE = 'Thêm chi tiêu';

const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });
const FOCUSON = {
    TITLE: 'Title',
    CONTENT: 'Content'
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
    NAVBAR_HEIGHT,
    STATUS_BAR_HEIGHT,
    FOCUSON
}