import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function ItemLogic(){


    var router = useRouter();

    

    function goToWorkDetails(data){

        router.push({
            pathname: '/work-details',
            query: {data: JSON.stringify(data)}
        });
    } 
    
    return {goToWorkDetails}


}


