import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function MenuLeftItemLogic(toggleMenuExpand){


    var router = useRouter();

    

    function goToWorkDetails(data){

        router.push({
            pathname: '/work-details',
            query: {data: JSON.stringify(data)},

        },
        '/work-details',
        {
            shallow: true
        }
        );

        toggleMenuExpand();
    } 

    
    return {goToWorkDetails}


}


