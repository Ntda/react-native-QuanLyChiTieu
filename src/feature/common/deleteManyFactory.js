import React from 'react';
import { NAVIGATIONTITLE } from './Constant';
import DeleteManyChiTieuWrapper from '../chitieu/DeleteManyChiTieuWrapper';
import DeleteManyThuNhapWrapper from '../thunhap/DeleteManyThuNhapWrapper';

const deleteManyFactory = tabType => {
     switch(tabType){
         case NAVIGATIONTITLE.chiTieu:
             return <DeleteManyChiTieuWrapper/>
        case NAVIGATIONTITLE.thuNhap:
            return <DeleteManyThuNhapWrapper/>
     }
};

export default deleteManyFactory;