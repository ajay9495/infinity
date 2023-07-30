import { useEffect, useState } from "react"


export default function SummaryLogic(){


    const[Projects, setProjects] = useState(0);
    const[Clients, setClients] = useState(0);
    const[Team, setTeam] = useState(0);

    const [IsIntervalOneComplete, setIsIntervalOneComplete] = useState(false);
    const [IsIntervalTwoComplete, setIsIntervalTwoComplete] = useState(false);

    
    const PROJECTS_COUNT = 1000;
    const CLIENTS_COUNT = 350;
    const TEAM_COUNT = 150;



    useEffect(()=>{

        const intervalId1 = setInterval(()=>{

            setProjects((prevState)=>{

                if (prevState >= (PROJECTS_COUNT - 50)) {
                    clearInterval(intervalId1);
                    setIsIntervalOneComplete(true);
                }

                return(prevState + 50);
            })

        },30)

    },[]);

    useEffect(()=>{

        if(IsIntervalOneComplete){

            const intervalId2 = setInterval(()=>{

                setClients((prevState)=>{
    
                    if (prevState >= (CLIENTS_COUNT - 10)) {
                        clearInterval(intervalId2);
                        setIsIntervalTwoComplete(true);
                    }
    
                    return(prevState + 10);
                })
    
            },12)
        }

    },[IsIntervalOneComplete]);


    useEffect(()=>{

        if(IsIntervalTwoComplete){

            const intervalId3 = setInterval(()=>{

                setTeam((prevState)=>{
    
                    if (prevState >= (TEAM_COUNT - 10)) {
                        clearInterval(intervalId3);
                    }
    
                    return(prevState + 10);
                })
    
            },24)
        }

    },[IsIntervalTwoComplete]);
    
    return {Projects, Clients, Team}


}


