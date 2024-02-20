// Phim đang chiếu
import MatVuOng from '/imageMoving/MatVuOng.webp';
import QuyCau from '/imageMoving/quyCau.webp';
import RuouCotNguoi from '/imageMoving/ruouCotNguoi.webp';
import VongVayCaMap from '/imageMoving/vongVayCaMap.webp';

// Phim sắp chiếu
import MaKeoGio from '/imageNewMovie/maKeoGio.webp';
import SuMenhDaiDuong from '/imageNewMovie/suMenhDaiDuong.webp';
import TronTimVoiQuy from '/imageNewMovie/tronTimVoiQuy.webp';
import Oppenheimer from '/imageNewMovie/oppenheimer.webp';

//Phim Imax
import DongChayCuaNuoc from '/imageImaxMovie/dongChayCuaNuoc.webp';
import HanhTinhCat from '/imageImaxMovie/hanhTinhCat.webp';
import SieuDiepVien from '/imageImaxMovie/sieuDiepVien.webp';
import VuongQuocThatLac from '/imageImaxMovie/vuongQuocThatLac.webp';

const DataMovie = [
    {
        id: 1,
        title: 'PHIM ĐANG CHIẾU',
        path: '/phim-dang-chieu',
        list: [
            {
                id: 1,
                image: MatVuOng,
                name: 'Mật Vụ Ong',
                rate: 9.2,
                age: 'T18',
            },
            {
                id: 2,
                image: QuyCau,
                name: 'Quỷ Cẩu',
                rate: 8.3,
                age: 'T18',
            },
            {
                id: 3,
                image: RuouCotNguoi,
                name: 'Rượu Cốt Người',
                rate: 4.6,
                age: 'T16',
            },
            {
                id: 4,
                image: VongVayCaMap,
                name: 'Vòng Vây Cá Mập',
                rate: 6.8,
                age: 'T16',
            },
        ],
    },
    {
        id: 2,
        title: 'PHIM SẮP CHIẾU',
        path: 'phim-sap-chieu',
        list: [
            {
                id: 1,
                image: TronTimVoiQuy,
                name: 'Trốn Tìm Với Quỷ',
                rate: 5.1,
                age: 'T18',
            },
            {
                id: 2,
                image: SuMenhDaiDuong,
                name: 'Katak Và Sứ Mệnh Đại Dương',
                rate: 8.6,
            },
            {
                id: 3,
                image: MaKeoGio,
                name: 'Trú Quỷ: Truyền Thuyết Ma Kéo Giò',
                rate: 8.1,
                age: 'T16',
            },
            {
                id: 4,
                image: Oppenheimer,
                name: 'Oppenheimer',
                rate: 8.6,
                age: 'T18',
            },
        ],
    },
    {
        id: 3,
        title: 'PHIM IMAX',
        path: 'phim-imax',
        list: [
            {
                id: 1,
                image: VuongQuocThatLac,
                name: 'Aquaman And The Lost Kingdom',
                rate: 9.2,
                age: 'T13',
            },
            {
                id: 2,
                image: DongChayCuaNuoc,
                name: 'Avatar: The Way Of Water',
                rate: 8.2,
                age: 'T13',
            },
            {
                id: 3,
                image: HanhTinhCat,
                name: 'Dune',
                rate: 8.6,
                age: 'T13',
            },
            {
                id: 4,
                image: SieuDiepVien,
                name: 'Argylle Siêu Điệp Viên',
                rate: 7.6,
                age: 'T13',
            },
        ],
    },
];

export { DataMovie };
