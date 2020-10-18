import { useEffect } from 'react';

const useSetHeaderDetail = (navigation, title) => {
    useEffect(() => {
        navigation.setOptions({
            title
        });
    }, [navigation]);
};


export default useSetHeaderDetail;