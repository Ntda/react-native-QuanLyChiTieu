import { useEffect } from 'react';

const useSetHeaderDetail = navigation => {
    useEffect(() => {
        navigation.setOptions({
            title: 'Chi tiết'
        });
    }, [navigation]);
};


export default useSetHeaderDetail;