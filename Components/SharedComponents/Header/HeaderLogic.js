
import { staticPageGenerationTimeout } from "@/next.config";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function HeaderLogic(){



    const [ServiceExpandState, setServiceExpandState] = useState({status:"inactive"});

    const [MenuExpandState,setMenuExpandState] = useState({status:"inactive"});

    var router = useRouter();


    function toggleServiceExpand(event){

        setServiceExpandState((prevState)=>{
            if(prevState.status == "active"){
                return{...prevState, status:"inActive"}
            }
            else{
                return{...prevState, status:"active"}
            }
        })
    }

    function toggleMenuExpand(event){

        setMenuExpandState((prevState)=>{
            
            
            if(prevState.status == "active"){
                return{...prevState, status:"inActive"}
            }
            else{
                return{...prevState, status:"active"}
            }
        });

    }

    var leftSection;
    var RightSection;

    function animateSectionsCenter(){

        leftSection = document.getElementById('menuLeftSection');
        RightSection = document.getElementById('menuRightSection');
    

        RightSection.style.transform = `translateX(${0}%)`;
        leftSection.style.transform = `translateX(${0}%)`;

    }

    function goTo(destination){

        router.push({
            pathname: destination
        });
    }



    useEffect(()=>{

        if(MenuExpandState.status == "active"){
            
            setTimeout(()=>{

                animateSectionsCenter();

            },100);

        }


    },[MenuExpandState])


    const Events = {
        toggleServiceExpand, toggleMenuExpand, goTo
    };

    return{
        ServiceExpandState, MenuExpandState, Events, toggleMenuExpand
    }

} 







