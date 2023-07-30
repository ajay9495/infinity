import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ContactLogic(){

    // const SERVICE_ID = 'service_q66tffa';
    // const TEMPLATE_ID = 'template_vr53evh';
    // const API_KEY = '0qlipfyWVEY5UAdhk';

    
    const SERVICE_ID = 'service_9zpudt8';
    const TEMPLATE_ID = 'template_8fd0kkt';
    const API_KEY = 'K802l581Kam-wvEKm';


    const [Name,setName] = useState('');
    const [Phone,setPhone] = useState('');
    const [Message,setMessage] = useState('');
    const [IsMessageSent, setIsMessageSent] = useState("initial");
    

    function sendMessage(e){


        e.preventDefault();


        if((Name)&&((Phone)&&((Message)))){

            setIsMessageSent("sending");

            const templateParams = {
                from_name: Name,
                from_phone: Phone,
                to_name: 'ajay',
                message: Message
            };
    
            emailjs.send( SERVICE_ID, TEMPLATE_ID, templateParams, API_KEY)
            .then((result) => {

                setIsMessageSent("sent");

            }, (error) => {

                alert("Could not submit the message, There was an error")

                console.log(error.text);
            });

        }


    }

    function reloadPage(){
        window.location.reload();
    }

    
    return {sendMessage, setName, setPhone, setMessage, IsMessageSent, reloadPage}


}


