
import { staticPageGenerationTimeout } from "@/next.config";
import { useEffect, useState } from "react";

export default function HeaderLogic(){


    const [ServiceExpandState, setServiceExpandState] = useState({status:"inactive"});

    const [MenuExpandState,setMenuExpandState] = useState({status:"active"});

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
    
        console.log("animateSectionsCenter");

        RightSection.style.transform = `translateX(${0}%)`;
        leftSection.style.transform = `translateX(${0}%)`;

    }

    useEffect(()=>{

        if(MenuExpandState.status == "active"){
            
            setTimeout(()=>{

                animateSectionsCenter();

            },100);

            // animateSectionsCenter();
            
            console.log("hello active");
        }
        else{
            console.log("hello inactive");
        }

    },[MenuExpandState])


    const Events = {
        toggleServiceExpand, toggleMenuExpand
    };

    return{
        ServiceExpandState, MenuExpandState, Events
    }

} 







