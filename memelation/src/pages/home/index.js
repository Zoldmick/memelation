import React from 'react'
import Carousel from 'react-multi-carousel'
import { ToastContainer, toast } from 'react-toastify'

export default function HomePage(){
    const consultClick = () => {
        try{

        }
        catch(e){
            if(e.response.data.erro) toast.error(e.response.data.erro)
            else toast.error("Algo deu errado. Tente de novo mais tarde.")
        }
    }
    
    return(
        <ToastContainer />
    )
}