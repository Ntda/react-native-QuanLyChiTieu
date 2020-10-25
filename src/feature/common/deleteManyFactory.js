import React from 'react';
import { NAVIGATIONTITLE } from './Constant';
import DeleteManyChiTieuWrapper from './DeleteManyChiTieuWrapper';
import DeleteManyThuNhapWrapper from './DeleteManyThuNhapWrapper';

const deleteManyFactory = tabType => {
     switch(tabType){
         case NAVIGATIONTITLE.chiTieu:
             return <DeleteManyChiTieuWrapper/>
        case NAVIGATIONTITLE.thuNhap:
            return <DeleteManyThuNhapWrapper/>
     }
};

export default deleteManyFactory;