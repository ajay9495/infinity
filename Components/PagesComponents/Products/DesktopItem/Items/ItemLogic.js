import { useState } from "react"


export default function ItemLogic(data){

    const [Description, setDescription]  = useState(`${data.description.slice(0,100)}...`);

    
    function readMore(){
        
        setDescription((prevState)=>{
            return(
                data.description
            )
        });

    }
    
    return {Description,readMore}


}


